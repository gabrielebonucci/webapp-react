import axios from "axios";
import { useState } from "react";
import { useGlobal } from "../context/GlobalContext";

const ReviewForm = ({ idProp, reloadReviews }) => {
  const initialValues = {
    name: "Anonymous",
    text: "",
    vote: 1,
  };

  const [formData, setFormData] = useState(initialValues);

  const { setIsLoading } = useGlobal();

  const setFieldValue = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // endpoint API per l'invio della recensione
  const apiUrl = `http://localhost:3000/movies/${idProp}/reviews`;

  const handleSubmit = (e) => {
    e.preventDefault();
    //accendi il loader
    setIsLoading(true);

    axios
      .post(apiUrl, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        setFormData(initialValues);
        if (typeof reloadReviews === "function") reloadReviews();
        //spegni il loader quando la chiamata è completata
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    //spegni il loader se c'è errore
    setIsLoading(false);
  };

  return (
    <div className="card">
      <header className="card-header">
        <h5>Aggiungi una recensione</h5>
      </header>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label>Nome</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={setFieldValue}
            />
          </div>
          <div className="form-group mb-2">
            <label>Recensione</label>
            <textarea
              className="form-control"
              name="text"
              value={formData.text}
              onChange={setFieldValue}
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label>Voto</label>
            <input
              name="vote"
              type="number"
              min="1"
              max="5"
              className="form-control"
              value={formData.vote}
              onChange={setFieldValue}
            />
          </div>
          <div className="d-flex justify-content-end pt-3">
            <button type="submit" className="btn btn-primary">
              Invia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
