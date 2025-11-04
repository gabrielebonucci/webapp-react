import { useState, useEffect } from 'react'
import axios from 'axios'
import FilmCard from '../components/FilmCard';

const HomePage = () => {
  const [films, setFilms]= useState([]);

  const fetchFilms = () => {
    
    axios.get('http://localhost:3000/movies')
      .then(response => {
        setFilms(response.data);
      })
      .catch(error => {
        console.error("Errore nel caricamento film:", error);
      })
  }
  // Facciamo partire la chiamata al primo montaggio
  useEffect(fetchFilms, []);

  // Funzione di generazione istanze film 
  const renderFilms = () => {
    return films.map(film => {
      return (
        <div className="col-12 col-md-6 col-lg-3 mb-4" key={film.id}>
          <FilmCard filmProp={film} />
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Lista dei Film</h1>
      <div className="row">
        {renderFilms()}
      </div>
    </div>
  )
}

export default HomePage