import React from 'react'
import { useEffect, useState } from 'react';
/* import { CardCharacter } from "../components/CardCharacter"; */
/* import CountsPage from '../components/CountsPage'; */
import '../views/Card.css'

const CountsPage = ({ count, handleSuma, handleResta }) => {
    /* const [count, setCount] = useState(1) */
    /* const [character, setCharacter] = useState([]); */

    /* useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(`https://apisimpsons.fly.dev/api/personajes?limit=12&page=${count}`)
        const data = await res.json()
  
        setCharacter(data.docs)
      }
      fetchData()
    }, [count])
  
    console.log(character) */
  
/*     const handleSuma = () => {
      setCount(count + 1)
    }
  
    const handleResta = () => {
      count == 0 ? setCount(count) : setCount(count - 1)
    } */

    return (
        <div >    
          <h3 className='count'>{count}</h3>
          <button className='suma' onClick={handleSuma}>+</button>
          <button className='resta' onClick={handleResta} > - </button>    
        </div>    
      );
}

export default CountsPage
