import React from 'react'

const Products = ({products}) => {

  return (
    <ul>
        {products.map(product =>{
            return(
                <li key={product.id}>
                    <h2>{product.name}</h2>
                    <h3>{product.category}</h3>
                    <h1>{product.price}</h1>
                    <p>{product.description}</p>
                </li>
            )
        })}
    </ul>
  )
}

export default Products