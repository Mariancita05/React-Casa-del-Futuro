import React from 'react'
import { CardCharacter } from "../components/CardCharacter";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const SearchCharacters = () => {
    const [busqueda, setBusqueda] = useState("");
    const [characters, setCharacters] = useState({});
    const { nombreCharacter } = useParams();
  
    const getCharacter = async () => {
      const res = await fetch(
        `https://apisimpsons.fly.dev/api/personajes/find/${nombreCharacter}`
      );
      const data = await res.json();
      const found = await data.result.find(
        (character) => character.Nombre.trim() === nombreCharacter.trim()
      );
      setCharacters(found)
      console.log(found)
    };
  
    const handleInputChange = (e) => {
      setBusqueda(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      getCharacter();
    };
  
    useEffect(() => {
      if (characters) {
        getCharacter();
      }
    }, [nombreCharacter]);
  
    const indice = parseInt(characters);
  
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
        
        {characters && <CardCharacter key={characters.id} character={characters} />}
         
        </div>
      </div>
    )
  }

export default SearchCharacters
