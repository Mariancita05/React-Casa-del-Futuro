import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const Character = () => {
  const { idCharacter } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      const res = await fetch(
        "https://rickandmortyapi.com/api/character/" + idCharacter
      );
      const data = await res.json();
      setCharacter(data);
    };
    getCharacter();
  }, [idCharacter]);

  const indice = parseInt(idCharacter);

  return (
    <>
      <button onClick={() => navigate(-1)}>VOLVER</button>
      <div>
        <h1>{character.id}</h1>
        <h3>{character.name}</h3>
        <img src={character.image} alt={character.name} />
        <h3>{character.status}</h3>
        <h3>{character.gender}</h3>
        <h3>{character.species}</h3>
      </div>
      <button onClick={() => navigate("/characters/" + (indice - 1))}>
        Anterior
      </button>
      <button onClick={() => navigate("/characters/" + (indice + 1))}>
        Siguiente
      </button>
    </>
  );
};

export default Character;
