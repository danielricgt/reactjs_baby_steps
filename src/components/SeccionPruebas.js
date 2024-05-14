import React, { Component } from "react";
import MiComponente from "./MiComponente";


class SeccionPruebas extends Component {
//   contador = 0;
//   constructor(props) {
//     super(props);

//     this.state = {
//       contador: 0,
//     };
//   }

  state = {
    contador : 0

  }
  sumar = () =>  {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = () => {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  HolaMundo = (nombre, edad) => {
    const presentacion = (
      <div>
        <h2>Hola soy {nombre}</h2>
        <h1>Tengo {edad}</h1>
      </div>
    );
    return presentacion;
  };

  render() {
    const nombre = "Daniel Galvan";
    const edad = 32;
    return (
      <section id="content">
        <h2 className="sub-header">Ultimos Articulos de Perritos</h2>
        <p> Bienvenidos a perritos</p>

        <h2 className="sub-header">Funciones y JSX basicos</h2>
        {this.HolaMundo(nombre, edad)}
        <h2 className="sub-header">Funciones y JSX basicos</h2>
        <section className="componentes">
          <MiComponente></MiComponente>
         
          <h2 className="sub-header"> Estados </h2>
          <p> Contador: {this.state.contador} </p>
          <p>
            <input
              type="button"
              value="Sumar"
              onClick={this.sumar}
            ></input>
            <input
              type="button"
              value="Restar"
              onClick={this.restar}
            ></input>
          </p>
        </section>
      </section>
    );
  }
}

export default SeccionPruebas;
