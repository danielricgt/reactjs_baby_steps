import logo from "../assets/images/logo.svg";
import "../assets/css/App.css";

// importar componentes
import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";
import Header from "./Header";

const holaMundo = (nombre, edad) => {
  const presentacion = (
    <div>
      <h2>Hola soy {nombre}</h2>
      <h1>Tengo {edad}</h1>
    </div>
  );
  return presentacion;
};
function App() {
  const nombre = "Daniel Galvan";
  const edad = 32;

  return (
    <div className="App">
       <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {holaMundo(nombre, edad)}

        <section className="componentes">
          <MiComponente></MiComponente>
          <Peliculas></Peliculas>
         
        </section>
      </header>
    </div>
  );
}

export default App;
