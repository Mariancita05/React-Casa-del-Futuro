import React from 'react'

export const Card = ({jugador}) => {
    const {name, position, number} = jugador
  return (
<div class="card">
  <div class="card-info">
    <h1>{number}</h1>
    <h2>{name}</h2>
    <p class="title">{position}</p>
  </div>
</div>
  )
}
