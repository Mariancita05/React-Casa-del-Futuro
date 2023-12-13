import React from "react";
import { useEffect, useState } from "react";
import { CardCharacter } from "../components/CardCharacter";
import "./Card.css";
import CountsPage from "../components/CountsPage";
import "./Search.css"

const GenreCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [count, setCount] = useState(1);
  const [counts, setCounts] = useState(0);
  

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://apisimpsons.fly.dev/api/personajes?limit=12&page=${count}`
      );
      const data = await res.json();

      setCharacters(data.docs);
      setFilteredCharacters(data.docs);
      setCounts(data.docs.length);
    };
    fetchData();
  }, [count]);

  console.log(characters);

  const handleMasculino = () => {
    const masculinoCharacters = characters.filter(
      (character) => character.Genero === "Masculino"
    );
    setFilteredCharacters(masculinoCharacters);
    setCounts(masculinoCharacters.length);
  };

  const handleFemenino = () => {
    const femeninoCharacters = characters.filter(
      (character) => character.Genero === "Femenino"
    );

    setFilteredCharacters(femeninoCharacters);

    setCounts(femeninoCharacters.length);
  };

  const handleReset = () => {
    setFilteredCharacters(characters);

    setCounts(characters.length);
  };

  const handleSuma = () => {
    setCount(count + 1);
  };

  const handleResta = () => {
    count == 0 ? setCount(count) : setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="container-genre">
        <h1>LOS SIMPSONS</h1>
        <h4 className="title">Buscar por género</h4>
        <div className="botones">
          <button className="masculino" onClick={handleMasculino}>
            Masculino
          </button>
          <button className="femenino" onClick={handleFemenino}>
            Femenino
          </button>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
        <CountsPage
          count={count}
          handleSuma={handleSuma}
          handleResta={handleResta}
        />

        <h3 className="contador">{counts} personajes</h3>
        <section className="cards">
          {filteredCharacters.map((character, id) => (
            <CardCharacter key={id} character={character} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default GenreCharacter;
