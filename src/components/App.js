
import "../assets/css/App.css";

// importar componentes

import Header from "./Header";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import SeccionPruebas from "./SeccionPruebas";


function App() {


  return (
    <div className="App">
       <Header></Header>
       <Slider></Slider>



   <div className="center">

   <SeccionPruebas>
      
      </SeccionPruebas>
     
        <Sidebar></Sidebar>
    </div>
    <div className="clearfix">

    </div>
    <Footer></Footer>
    </div> 
    
  );
}

export default App;
