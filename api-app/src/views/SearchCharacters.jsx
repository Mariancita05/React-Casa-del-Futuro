import React from "react";
import { CardCharacter } from "../components/CardCharacter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Search.css";
import "../components/cardCharacter.css";

//BUSCAR POR NOMBRE DE PERSONAJE

const SearchCharacters = () => {
  const [busqueda, setBusqueda] = useState("");
  const [currentBusqueda, setCurrentBusqueda] = useState("");
  const [character, setCharacter] = useState([]);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(
        `https://apisimpsons.fly.dev/api/personajes/find/${busqueda}`
      );
      console.log(response);
      const data = await response.json();

      console.log(data);
      setCharacter(data.result);
      setShowCards(data.result.length > 0);
    };
    getCharacter();
  }, [currentBusqueda]);

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
    console.log(e.target.value);
    console.log(character);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentBusqueda(busqueda);
  };

  const indice = parseInt(character);

  console.log("character", character);

  return (
    <div className={`container ${showCards ? 'container-name' : 'container-name-cards'}`}>

      <div className=" container-name">
        <h1 className="title-name">LOS SIMPSONS</h1>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={busqueda}
            placeholder="Escribí una personaje"
            onChange={handleInputChange}
          />
          <button type="submit" className="search-button">
            Buscar
          </button>
        </form>

        <div className="cards">
          {character?.map((character, _id) => {
            return <CardCharacter key={_id} character={character} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchCharacters;
