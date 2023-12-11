import React from 'react'
import {Link, Outlet, useNavigate } from 'react-router-dom'
import '../src/views/App.css'

const Layout = () => {

  const navigate = useNavigate ();

  

  
const handleSearchChange = (event) => {
    
 
const selectedValue = event.target.value;

    switch (selectedValue) {
      case 'nombre':
        navigate('/search');
        break;
      case 'genero':
        navigate('/genre');
        break;
      case 'estado':
        navigate('/search/estado');
        break;      
default:
        break;
    }
  };


  return (
    <>
  {/*     <header>
        <nav>
          <ul>
            <li><Link style={{ textDecoration: "none", color: "#fff" }} to='/'>HOME</Link></li>
            <li><Link style={{ textDecoration: "none", color: "#fff" }} to='/randomCharacter'>PERSONAJES</Link></li>
            <li >
              <label htmlFor="buscar">BUSCAR</label>
                <select name="buscar" id="">
                  <option value="nombre"><Link style={{ textDecoration: "none", color: "#fff" }} to='/search'>NOMBRE</Link></option>
                  <option value="genero"><Link style={{ textDecoration: "none", color: "#fff" }} to='/search'>GÉNERO</Link></option>
                  <option value="estado"><Link style={{ textDecoration: "none", color: "#fff" }} to='/search'>ESTADO</Link></option>
                </select>            
            </li>
            
          </ul>     
            
            
        </nav>

      </header> */}

{/* <header>
      <nav>
        <ul>
          <li><Link to='/' style={{ textDecoration: "none", color: "#fff" }}>HOME</Link></li>
          <li><Link to='/randomCharacter' style={{ textDecoration: "none", color: "#fff" }}>PERSONAJES</Link></li>
          <li>
            <label htmlFor="buscar">BUSCAR</label>
            <select name="buscar" id="buscarSelect" onChange={handleSearchChange}> */}
              {/* <option value="nombre">NOMBRE</option>
              <option value="genero">GÉNERO</option>
              <option value="estado">ESTADO</option> */}

             {/*  <Link to='/search' style={{ textDecoration: "none", color: "#fff" }}>NOMBRE</Link>
              <Link to='/randomCharacter' style={{ textDecoration: "none", color: "#fff" }}>GENERO</Link>
              <Link to='/randomCharacter' style={{ textDecoration: "none", color: "#fff" }}>ESTADO</Link>
            </select>
          </li>
        </ul>
      </nav>
    </header> */}

<header>
        <nav>
          <ul>
            <li><Link to='/' style={{ textDecoration: "none", color: "#fff" }}>HOME</Link></li>
            <li><Link to='/randomCharacter' style={{ textDecoration: "none", color: "#fff" }}>PERSONAJES</Link></li>
            <li>
              <label htmlFor="buscar">BUSCAR</label>
              <select name="buscar" id="buscarSelect" onChange={handleSearchChange}>
                <option value="">Selecciona...</option>
                <option value="nombre">NOMBRE</option>
                <option value="genero">GÉNERO</option>
                <option value="estado">ESTADO</option>
              </select>
              <button onClick={() => handleSearchChange({ target: { value: document.getElementById('buscarSelect').value } })}>
                
              </button>
            </li>
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
