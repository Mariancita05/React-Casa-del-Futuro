import React, { useState } from 'react'

 /* Desestructurar el elemento props */
  export default function Button({valueButton}) {

    /* Hook useState */
    const [inputValue, setInputValue] = useState();
    const [guardado, setGuardado] = useState()

    const renderizarInput = (e) =>{
        setInputValue(e.target.value)
    }
    const guardarInput = () => {
        setGuardado(inputValue)
    }

  return (
    <>
    <input type="text" value={inputValue} onChange={renderizarInput} />
    <button onClick={guardarInput}>{valueButton}</button>
    <p>Texto renderizado: {inputValue}</p>
    <p>Texto guardado: {guardado}</p>
    </>
    
  )
}

/* export default function Button(props) {
    return (
      <button>{props.valueButton}</button>
    )
  } */
