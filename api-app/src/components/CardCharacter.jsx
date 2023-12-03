import React from 'react'
import "./cardCharacter.css"
import { Link } from 'react-router-dom';

export const CardCharacter = ({ character }) => {
  return (
    <article className="card" key={character._id}>
      {/* <p className="numT">{character._id[0]}</p> */}
      <Link to="/characterInfo">
      <h2 className="charList__nombre">{character.Nombre}</h2>
    </Link>
      <img
        className="charList__img"
        src={character.Imagen}
        alt={character.Nombre}
      />
      <h3 className="charList__ocupacion">{character.Ocupacion}</h3>
      {/* <p className="numB">{character._id[0]}</p> */}
    </article>
  );
};

/* export const CardCharacter = ({character}) => {
  
  return (
    <article className='card' key={character._id}>
      <Link to={"/characters/"+character._id}>
    <h2>{character.Nombre}</h2>
    </Link>
    <h3>{character.Ocupacion}</h3>
    <img src={character.Imagen} alt={character.Nombre} />
  </article>
  )
}
 */