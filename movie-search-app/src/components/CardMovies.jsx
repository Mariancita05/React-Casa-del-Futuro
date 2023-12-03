import React from 'react'
import './card.css'

export const CardMovies = ({peliculas}) => {
    return (
        <div className="containerCard">
          <div key={peliculas.id} className="movie-card front">
            <img
              src={`https://image.tmdb.org/t/p/w500${peliculas.poster_path}`}
              alt={peliculas.title}
            />
            <div className="inner">
              <h2>{peliculas.title}</h2>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>{peliculas.overview}</p>
            </div>
          </div>
        </div>
      );
}
