import React from "react";
import { Link } from "react-router-dom";

import Narvar from "../components/Narvar";
import SidebarContainer from "../components/SidebarContainer";
import ContentHeader from "../components/ContentHeard";
import Footer from "../components/Footer";
import './css/home.css'

const Home = () => {
  return (
    <div className="wrapper">
      <Narvar></Narvar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper">
        <ContentHeader
          titulo={"Inicio"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Agregar"}
          ruta={"/"}
        />

        {/* Inicio del contenido de la pagina  */}

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>12</h3>
                    <p>Productos</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <Link to={"/productos"} className="small-box-footer">
                    Información <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>150</h3>
                    <p>New Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <Link to={"#"} className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-lg-7 connectedSortable ui-sortable">

            <button className="btn btn-lg btn-primary">Lado izquierdo</button>
           
            </div>
            <div className="col-lg-5 connectedSortable ui-sortable derecho">

            <button className="btn btn-lg btn-secondary">Lado derecho</button>

            </div>
          </div>
        </section>

        {/* Fin del contenido de la pagina  */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
