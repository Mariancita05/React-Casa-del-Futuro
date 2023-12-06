import React from "react";
import { CardCharacter } from "../components/CardCharacter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Search.css";

const SearchCharacters = () => {
  const [busqueda, setBusqueda] = useState("");
  const [character, setCharacter] = useState([]);
  const { nombreCharacter } = useParams();

  /* const getCharacter = async () => {
    const res = await fetch(
      `https://apisimpsons.fly.dev/api/personajes/find/${nombreCharacter}`
    );
    const data = await res.json();
    const found = await data.result.find(
      (character) => character.Nombre.trim() === nombreCharacter.trim()
    );
    setCharacter(found);
    console.log(found);
  }; */

  const getCharacter = async () => {
    const response = await fetch(
      `https://apisimpsons.fly.dev/api/personajes/find/${nombreCharacter}`
    );
    const data = await response.json();
    const found = await data.result.find(
      (character) => character.Nombre.trim() === nombreCharacter.trim()
    );
    setCharacter(found);
  };

  useEffect(() => {
    
    getCharacter();
  }, [nombreCharacter]);

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    getCharacter();
  };

 /*  useEffect(() => {
    const fetchData = async () => {
      if (nombreCharacter) {
        getCharacter();
      }
    };
    fetchData();
  }, [nombreCharacter, character]); */

  const indice = parseInt(character);
/* const [character, setCharacter] = useState([])
    const [count, setCount ]= useState(1)
  
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(`https://apisimpsons.fly.dev/api/personajes?limit=12&page=${count}`)
        const data = await res.json()
  
        setCharacter(data.docs)
      }
      fetchData()
    }, [count])
  
    console.log(character) */
  return (
    <div className="container">
      <h1>Buscador de personajes</h1>
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

      <div className="movie-list ">
        {Array.isArray(character) &&
          character.map((character, _id) => {
            <CardCharacter key={_id} character={character} />;
          })}
      </div>
    </div>
  );
};

export default SearchCharacters;
