import React, { Component } from "react";

class MiComponente extends Component {
  render() {
    let receta = {
      nombre: "pizza",
      ingredientes: ["tomate", "queso"],
      calorias: 400,
    };
    return (
      <div>
        <h1>{"receta: " + receta.nombre}</h1>
        <h2>{"calorias: " + receta.calorias}</h2>
        <ol>
          {receta.ingredientes.map((ingrediente, i) => {
            return (
                <li key={i}>{ingrediente}</li>
                );
          })}
        </ol>
      </div>
    );
  }
}
export default MiComponente;
