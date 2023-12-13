import React from "react";
import "./cardCharacter.css";
import { Link } from "react-router-dom";

export const CardCharacter = ({ character }) => {
  return (
    <article className="card" key={character._id}>
      <Link 
      className="nombre"
      style= {{ textDecoration: "none", color: "#ff0000" }}
      to= {"/characterInfo/" + character.Nombre } >
        <h2 >{character.Nombre}</h2>
      </Link>
      <img
        className="charList__img"
        src={character.Imagen}
        alt={character.Nombre}
      />
      <h4 className="ocupacion">{character.Ocupacion}</h4>
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
