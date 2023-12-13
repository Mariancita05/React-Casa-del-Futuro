import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
/* import "../views/Card.css"; */
/* import './cardCharacter.css' */
import "./character.css";

const Character = () => {
  const { nombreCharacter } = useParams();
  const navigate = useNavigate();
  const [currentCharacter, setCurrentCharacter] = useState({});

  useEffect(() => {
    const getCharacter = async () => {
      const res = await fetch(
        `https://apisimpsons.fly.dev/api/personajes/find/${nombreCharacter}`
      );
      const data = await res.json();
      const found = await data.result.find(
        (character) => character.Nombre.trim() === nombreCharacter.trim()
      );
      setCurrentCharacter(found);
      console.log(data);
    };
    getCharacter();
  }, [nombreCharacter]);

  return (
    <div className="container">
      <div className="bg">
        <div className="contenedor-btn-volver">
          <button className="btn-volver" onClick={() => navigate(-1)}>
            VOLVER
          </button>
        </div>
        <div className="personaje">
          <div className="name-img">
            <h3>{currentCharacter.Nombre}</h3>
            <img src={currentCharacter.Imagen} alt={currentCharacter.Nombre} />
          </div>
          <div className="info">
            <h3>Estado: {currentCharacter.Estado}</h3>
            <h3>Género: {currentCharacter.Genero}</h3>
            <h3>Ocupación: {currentCharacter.Ocupacion}</h3>
            <p>Historia: {currentCharacter.Historia}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
