import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import '../src/views/App.css'

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/randomCharacter'>PERSONAJES</Link></li>
            <li><Link to='/search'>BUSCAR</Link></li>
          </ul>
            
            
            
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout
