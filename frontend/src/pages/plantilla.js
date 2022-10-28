import React from "react";


import ContentHeader from '../components/ContentHeard';
import Footer from "../components/Footer";
import Narbar from "../components/Narvar";
import SidebarContainer from "../components/SidebarContainer";


const Plantilla = () => {

 
  return (
    <div className="wrapper">
      <Narbar></Narbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper">
        <ContentHeader
          titulo={"Plantilla"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Agregar"}
          ruta={"/"}
        />



      </div>
      <Footer></Footer>
    </div>
  );
};

export default Plantilla;
