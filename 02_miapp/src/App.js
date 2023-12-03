import logo from './logo.svg';
import './App.css';

/* EXPORTAR POR DEFAULT*/
import Button from './Button';

function App() {

  const valueButton = 'CLICK'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOLA REACT
        </p>
        <Button valueButton={valueButton}></Button>
       
      </header>
    </div>
  );
}

export default App;
