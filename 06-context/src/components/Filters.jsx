import React, { useContext, useState } from 'react'
import { FilterContext } from '../context/ContextFilter'

const Filters = () => {

    const {filters, setFilters} = useContext(FilterContext)

    const handleMinPrice = event => {
        setFilters( (prevState) =>  ({...prevState, minPrice: event.target.value }) ) // la funcion que modifica el estado "set" recibe una funcion como parametro, el primer valor de las props es el estado anterior 
    }

    const handleCategory = event =>{
        setFilters(prevState => ({...prevState, category: event.target.value}))
    }

  return (
    <>
        <div>
            <label htmlFor="price">Precio</label>
            <input 
            type="range" 
            name="" 
            id="price" 
            min={0}
            max={50}
            value={filters.minPrice}
            onChange={handleMinPrice}
            />
            <span>{filters.minPrice}</span>
        </div>
        <div>
            <label htmlFor="category">Categoria</label>
            <select name="" id="category" onChange={handleCategory}>
                <option value="all">Todos</option>
                <option value="Electrodomésticos">Electrodomésticos</option>
                <option value="Hogar">Hogar</option>
                <option value="Limpieza">Limpieza</option>
            </select>
        </div>
    </>
  )
}

export default Filters