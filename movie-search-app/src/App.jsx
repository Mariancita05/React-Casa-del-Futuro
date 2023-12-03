import { useState } from "react";
import "./App.css";
import { CardMovies } from "./components/CardMovies";

function App() {
  const urlBase = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "f2bd0ce9bb39a7a6344f647dfc222da9";
  const [busqueda, setBusqueda] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPeliculas();
  };

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(
        `${urlBase}?query=${busqueda}&api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Error fetching movies");
      }
      const data = await response.json();
      const movies = data.results;
      setPeliculas(movies);
      console.log("Movies:", movies);
    } catch (error) {
      console.log("Ha ocurrido un error: ", error);
    }
  };

  return (
    <div className="container">
      <h1>Buscador de peliculas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={busqueda}
          placeholder="Escribí una película"
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>

      <div className="movie-list ">
        {peliculas.map((peliculas, id) => {
          return <CardMovies key={id} peliculas={peliculas} />;
        })}
      </div>
    </div>
  );
}

export default App;
