import { React } from "react";
import { Link, Outlet, useNavigate, NavLink } from "react-router-dom";
import "../src/views/App.css";
import { useState } from "react";

const Layout = () => {
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const selectedValue = event.target.value;

    switch (selectedValue) {
      case "nombre":
        navigate("/search");
        break;
      case "genero":
        navigate("/genre");
        break;
      default:
        break;
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  
  return (
    <>
      <header >
        <nav >
        <Link to="/" className="title">
        HOME
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/randomCharacter"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                PERSONAJES
              </Link>
            </li>
            <li>
              <label htmlFor="buscar"></label>
              <select
                name="buscar"
                id="buscarSelect"
                onChange={handleSearchChange}
                className="menuDesplegable"
              >
                <option value="" className="desplegado">Buscar por: </option>
                <option value="nombre" className="desplegado">NOMBRE</option>
                <option value="genero" className="desplegado">GÉNERO</option>
              </select>
              <button
                onClick={() =>
                  handleSearchChange({
                    target: {
                      value: document.getElementById("buscarSelect").value,
                    },
                  })
                }
              ></button>
            </li>
          </ul>
        </nav>
        {/* <a href="#" className="hamb"><i class="fa-solid fa-burger-cheese"></i></a> */}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
