import { Link } from 'react-router-dom'
// Riceviamo la prop "filmProp"
const FilmCard = ({ filmProp }) => {

  // Dentro "filmProp" c'è l'intero oggetto: { id, titolo, trama, ... }
  const { id, title, abstract, image } = filmProp;

 return (
   <Link to={`/movies/${id}`} className="text-decoration-none text-dark">
        <div className="card h-100 border-0 shadow-sm">
        <img src={`http://localhost:3000/${image}`}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{abstract}</p> 
        </div>
      </div>

    </Link>
  )
}

export default FilmCard