import React from 'react'
import { useEffect, useState } from 'react';
import { CardCharacter } from "../components/CardCharacter";
import './Card.css'
import CountsPage from '../components/CountsPage';

const GenreCharacter = ({count, handleSuma, handleResta }) => {
    const [characters, setCharacters] = useState([])
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [counts, setCounts] = useState(0);
   
  
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(`https://apisimpsons.fly.dev/api/personajes?limit=12&page=${count}`)
        const data = await res.json()
  
        setCharacters(data.docs)
        setFilteredCharacters(data.docs);
        setCounts(data.docs.length);
      }
      fetchData()
    }, [count])
  
    console.log(characters)
  
    const handleMasculino = () => {
    
    const masculinoCharacters = characters.filter(    
    (character) => character.Genero === 'Masculino'
        );
    setFilteredCharacters(masculinoCharacters);       
    setCounts(masculinoCharacters.length);
      };
    
      
      
    const handleFemenino = () => {
    const femeninoCharacters = characters.filter(          
    (character) => character.Genero === 'Femenino'
        );   
       
    setFilteredCharacters(femeninoCharacters);
       
    setCounts(femeninoCharacters.length);
      };
    
      
      
    
    const handleReset = () => {
        
    setFilteredCharacters(characters);
      
    setCounts(characters.length);
      };
    
  
    return (
      <div className='bg'>
        <h1>LOS SIMPSONS</h1>
  
        <CountsPage count={count} handleSuma={handleSuma} handleResta={handleResta} />
        <h3>{counts}</h3>
        <button className='masculino' onClick={handleMasculino}>Masculino</button>
        <button className='femenino' onClick={handleFemenino} >Femenino</button>
        <button className='reset' onClick={handleReset}>
        Reset
      </button>
        <section className='cards'>
        {filteredCharacters.map((character, id) => (
  
  
  <CardCharacter key={id} character={character} />
  ))}
        </section>
  
      </div>
  
    );

};
  
export default GenreCharacter
