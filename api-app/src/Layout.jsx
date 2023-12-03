import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <nav>
            <Link to='/'>HOME</Link>
            <Link to='/randomCharacter'>PERSONAJES</Link>
            <Link to='/search'>BUSCAR</Link>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout
