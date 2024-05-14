
import "../assets/css/App.css";

// importar componentes

import Header from "./Header";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Peliculas from "./Peliculas";

function App() {

const buttonString = "Ir al Blog";
  return (
    <div className="App">
       <Header></Header>
       <Slider 
       title="Bienvenido a Animalitos Web"
       btn = {buttonString}
       ></Slider>



   <div className="center">

<Peliculas></Peliculas>
      
   
     
        <Sidebar></Sidebar>
    </div>
    <div className="clearfix">

    </div>
    <Footer></Footer>
    </div> 
    
  );
}

export default App;
