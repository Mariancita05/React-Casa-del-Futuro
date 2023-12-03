import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <nav>
            <Link to='/'>HOME</Link>
            <Link to='/SearchCharacter'>BUSCAR</Link>
        </nav>
      </header>
      <main>
        <h1>ENRUTAMIENTO</h1>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout
