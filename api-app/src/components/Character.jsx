import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const Character = () => {

    const { idCharacter } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState([]);
  
    useEffect(() => {
      const getCharacter = async () => {
        const res = await fetch(
          `https://apisimpsons.fly.dev/api/personajes/find/${idCharacter}`
        );
        const data = await res.json();
        setCharacter(data);
        console.log("Character data:", data); 
      };
      getCharacter();
    }, [idCharacter]);
  
    const indice = parseInt(idCharacter);
    

  return (
    <>
      <button onClick={() => navigate(-1)}>VOLVER</button>
      <div>
        <h1>{character._id}</h1>
        <h3>{character.Nombre}</h3>
        <img src={character.Imagen} alt={character.Nombre} />
        <h3>{character.Estado}</h3>
        <h3>{character.Genero}</h3>
        <h3>{character.Ocupacion}</h3>
        <p>{character.Historia}</p>
        
      </div>
      <button onClick={() => navigate("/characters/" + (indice - 1))}>
        Anterior
      </button>
      <button onClick={() => navigate("/characters/" + (indice + 1))}>
        Siguiente
      </button>
    </>
  )
}

export default Character
