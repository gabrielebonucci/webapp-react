import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";
import { useGlobal } from "../context/GlobalContext";

const DetailPage = () => {
  const navigate = useNavigate();
  const [film, setFilm] = useState();
  const { id } = useParams();

  // 2. PRENDI 'setIsLoading' DAL CONTEXT
  const { setIsLoading } = useGlobal();

  // funzione per la chiamata axios
  const fetchSingleFilm = () => {
    setIsLoading(true);

    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((response) => {
        setFilm(response.data);
        //spegni il loader quando la chiamata è completata
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel caricamento del film:", error);
        //spegni il loader se c'è errore
        setIsLoading(false);
        // Se il film non esiste (404), reindirizziamo
        if (error.response && error.response.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchSingleFilm, [id]);

  // Funzione di generazione istanze reviews
  const renderReviews = () => {
    return film?.reviews.map((review) => {
      return <ReviewCard reviewProp={review} key={review.id} />;
    });
  };
  return (
    <div>
      <header className="row mb-4 align-items-center">
        <div className="col-md-4">
          <img
            src={`http://localhost:3000/${film?.image}`}
            className="img-fluid rounded rounded shadow-sm"
            alt={film?.title}
          />
        </div>
        <div className="col-md-8">
          <h1>{film?.title}</h1>
          <p className="lead">{film?.abstract}</p>
        </div>
      </header>

      {/* Sezione Recensioni*/}
      <section id="reviews" className="mb-4">
        <h3>Recensioni</h3>
        {renderReviews()}

        {/* Messaggio se non ci sono recensioni */}
        {film && film.reviews.length === 0 && (
          <p>Non ci sono ancora recensioni per questo film.</p>
        )}
      </section>
      <section>
        <ReviewForm idProp={id} reloadReviews={fetchSingleFilm} />
      </section>
      {/* Footer della Pagina */}
      <footer className="border-top pt-3">
        <Link className="btn btn-secondary" to="/">
          &larr; Torna alla Home
        </Link>
      </footer>
    </div>
  );
};

export default DetailPage;
