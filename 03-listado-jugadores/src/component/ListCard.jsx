import React, { useState } from 'react'
import { Card } from './Card'

const ListCard = () => {

const [list, setList] = useState([
    {
      name: "Lionel Messi",
      number: 10,
      position: "Forward"
    },
    {
      name: "Cristiano Ronaldo",
      number: 7,
      position: "Forward"
    },
    {
      name: "Neymar Jr.",
      number: 10,
      position: "Forward"
    },
    {
      name: "Kylian Mbappe",
      number: 7,
      position: "Forward"
    },
    {
      name: "Kevin De Bruyne",
      number: 17,
      position: "Midfielder"
    },
    {
      name: "Robert Lewandowski",
      number: 9,
      position: "Forward"
    },
    {
      name: "Sergio Ramos",
      number: 4,
      position: "Defender"
    },
    {
      name: "Virgil van Dijk",
      number: 4,
      position: "Defender"
    },
    {
      name: "Sadio Mane",
      number: 10,
      position: "Forward"
    },
    {
      name: "Mohamed Salah",
      number: 11,
      position: "Forward"
    }
  ])

  return (
    <div className='listado'>
    {list.map((jugador, index)=>{
        return(<Card key={index} jugador={jugador}/>)
    })}
    </div>
  )
}

export default ListCard
