import React from "react";
import { CardCharacter } from "../components/CardCharacter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Search.css";
import "../components/cardCharacter.css"



const SearchCharacters = () => {
  const [busqueda, setBusqueda] = useState("");
  const [currentBusqueda, setCurrentBusqueda] = useState("");
  const [character, setCharacter] = useState([]);


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



  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetch(
        `https://apisimpsons.fly.dev/api/personajes/find/${busqueda}`
      );
      console.log(response);
      const data = await response.json();
/*       const found = await data.result.find(
        (character) => character.Nombre.trim() === busqueda.trim()
      ); */

      console.log(data);
      setCharacter(data.result);
    };
    console.log("efect");
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
      console.log("character",character)

  return (
    < >

    <div className="container-name" >
      <h1>Buscar por nombre</h1>
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
        {          
          character?.map((character, _id) => {
            return (<CardCharacter key={_id} character={character} />)
          })
        }
      </div>
    </div>
    <div className="container-genre" >
    <h1>Buscar por género</h1>
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
      {          
        character?.map((character, _id) => {
          return (<CardCharacter key={_id} character={character} />)
        })
      }
    </div>
  </div>
  <div className="container-status" >
  <h1>Buscar por estado</h1>

  <button type="submit" className="search-button">
      Buscar
    </button>
    <button type="submit" className="search-button">
      Buscar
    </button>
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
    {          
      character?.map((character, _id) => {
        return (<CardCharacter key={_id} character={character} />)
      })
    }
  </div>
</div>

</ >
  );
};

export default SearchCharacters;
