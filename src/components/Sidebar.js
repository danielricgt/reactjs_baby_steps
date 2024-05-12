import React, {Component} from "react";

class Sidebar extends Component {
    render(){
        return (


            <aside id="sidebar">

            <div id="nav-blog" className="sidebar-item">

                <h3>Puedes Hacer estilos</h3>
                <a href="index.html" target="_blank" className="botton-article">Crear Articulo</a>

            </div>


            <div id="search" className="sidebar-item">

                <h3>Buscador</h3>
                <h4>Encuentra el articulo que buscas</h4>


                <form>
                    <input type="text" name="search"/>
                    <input type="submit" value="Buscar" className="botton-article"/>
                    <br></br>
                </form>



            </div>

        </aside>

        );
    }
}

export default Sidebar;