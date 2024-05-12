import React, { Component } from "react";
import logo from "../assets/images/logo.svg";

class Header extends Component {
  render() {
    return (
      <header id="animalHeader">
        <div className="center">
          <div id="Logo">
            <img
              src={logo}
              className="appp logo"
              alt="Logotipo"
            />

            <span id="Brand">
              <strong>Master </strong> en framework
            </span>
          </div>
          <nav id="Menu">
            <ul>
              <li>
                <a href="index.html" target="_blank">
                  Inicio
                </a>
              </li>
              <li>
                <a href="blog.html" target="_blank">
                  Blog
                </a>
              </li>
              <li>
                <a href="formulario.html" target="_blank">
                  Formulario
                </a>
              </li>
              <li>
                <a  href="formulario.html" target="_blank">
                  Pagina 1
                </a>
              </li>
              <li>
                <a href="formulario.html" target="_blank">
                  Pagina 2
                </a>
              </li>
            </ul>
          </nav>{" "}
        </div>

        <div className="clearfix"></div>
      </header>
    );
  }
}
export default Header;
