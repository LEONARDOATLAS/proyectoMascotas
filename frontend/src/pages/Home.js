import React from "react";
import { Link } from "react-router-dom";

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
          titulo={"Home"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Agregar"}
          ruta={"/"}
        />

      <section className="container">
        <div className="container-fluid">
          <div className="row">
          <div class="col-lg-3 col-6">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>Total de productos</h3>
                  <p>Los productos mas vendidos</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <Link to={"#"} className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
              </div>

          </div>
        </div>
        </div>
      </section>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
