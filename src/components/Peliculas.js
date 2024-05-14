import React, { Component } from "react";
import Pelicula from "./Pelicula";

class Peliculas extends Component {
  state = {
    peliculas: [
      {
        title: "Bulldog I",
        image:
          "https://frenchiestore.com/cdn/shop/articles/movie_47238e2c-5b2a-47ea-ae19-35aa020e4389_2000x.jpg?v=1626151271",
      },
      {
        title: "Bullgog 2",
        image:
          "https://blogstudio.s3.amazonaws.com/frenchiestore/67271865517c2eb63b7d0c08235455cb.jpg",
      },
      {
        title: "Perritos Pastor Aleman bebes, como tratarlos",
        image:
          "https://t1.ea.ltmcdn.com/es/posts/7/0/0/alimentacion_de_un_pastor_aleman_cachorro_21007_orig.jpg",
      },
      {
        title: "La velocidad de las cheetahs",
        image:
          "https://i.natgeofe.com/n/de5643df-d07b-4547-b10a-3d5941022d46/01sarahcheetah.jpg",
      },
    ],
    nombre: "Daniel Galvan",
    favorita: "",
  };

  cambiarTitulo = () => {
    const { peliculas } = this.state;
    peliculas[0].title = "Bulldog Begins";

    this.setState({
      peliculas,
    });
  };

  favorita = (pelicula, indice) => {
    console.log("Marcada");
    console.log(indice);
    this.setState({
      favorita: pelicula,
    });
  };
  render() {
    const pStyle = {
      background: "green",
      color: "white",
      padding: "10px"
  }
    return (
      <div id="content" className="peliculas">
        <h2 className="subheader">Peliculas</h2>
        <p>Seleccion de peliculas favoritas de {this.state.nombre}</p>
        <p>
          <button onClick={this.cambiarTitulo}>Cambiar titulo</button>
        </p>

        {this.state.favorita && (
          <p className="favorita" style={pStyle}>
            <strong>la pelicula favorita es:</strong>
            <span>{this.state.favorita.title}</span>
          </p>
        )}

        <div id="articles" className="peliculas">
          {this.state.peliculas.map((pelicula, i) => {
            return (
              <Pelicula
                key={i}
                pelicula={pelicula}
                indice = {i}
                marcarFavorita={this.favorita}
              ></Pelicula>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Peliculas;
