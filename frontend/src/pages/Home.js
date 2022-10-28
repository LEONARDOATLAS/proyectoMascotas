import React from "react";

import Narvar from '../components/Narvar';
import SidebarContainer from '../components/SidebarContainer'
import ContentHeader from '../components/ContentHeard'
import Footer from '../components/Footer'

const Home = () => {

 
  return (
    <div className="wrapper">
      <Narvar></Narvar>
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

export default Home;
