import { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async() => {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const data = await res.json()
      setCharacters(data.results)
    }
    getCharacters()    
  })
  
  return (
    <div >
      <h3>HOME</h3>
      <ul>
        {characters.map((character)=>{
          return(
            <li key={character.id}>
              <Link to={"/characters/"+character.id}>
                <h3>{character.name}</h3>
              </Link>
              <img src={character.image} alt={character.name}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
