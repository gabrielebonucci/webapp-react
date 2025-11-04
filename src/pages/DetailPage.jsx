import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'

const DetailPage = () => {
  return (
    <div>
      <h1>Dettaglio del Film</h1>
      <p>Qui ci saranno i dati di un singolo film.</p>
    </div>
  )
}

export default DetailPage