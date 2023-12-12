import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="bgApp">
     
      <h1 className="your-style titulo">LOS SIMPSONS</h1>
        <Link
          style={{ textDecoration: "none", color: "#fff" }}
          to="/randomCharacter"
        >
          <button>PERSONAJES</button>
        </Link>
   
    </div>
  );
}

export default App;
