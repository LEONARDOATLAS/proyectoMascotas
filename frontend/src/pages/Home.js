import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Narvar from "../components/Narvar";
import SidebarContainer from "../components/SidebarContainer";
import ContentHeader from "../components/ContentHeard";
import Footer from "../components/Footer";
import './css/home.css'

import APIInvoke from "../utils/APIInvoke";

const Home = () => {


  const [dataProductos, setdataProductos] = useState([]);
  const [dataClientes, setdataClientes] = useState([]);

  const listaProductos = async () => {
    const response = await APIInvoke.invokeGET(`/api/productos/listar`);
    setdataProductos(response.productos);
  };

  const listaClientes = async () => {
    const response = await APIInvoke.invokeGET(`/api/clientes/listar`);
    setdataClientes(response.clientes);
  };

  const productos = dataProductos.length;
  const clientes = dataClientes.length


  useEffect(() => {
    listaProductos();
    listaClientes();
  }, []);



  return (
    <div className="wrapper">
      <Narvar></Narvar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper background">
        <ContentHeader
          titulo={"Inicio"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Agregar"}
          ruta={"/"}
        />

        {/* Inicio del contenido de la pagina  */}
        <section>
          <div className="">
            <div className="row">
              <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 ">
                <img className="logoMision" src="dist/img/misiontic/misionticuis.png" alt="" />
              </div>

              <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3 ">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{productos}</h3>
                    <p>Productos</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <Link to={"/productos"} className="small-box-footer">
                    Mas Información <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>

              <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>{clientes}</h3>
                    <p>Nuestros Clientes</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <Link to={"/clientes"} className="small-box-footer">
                    Consultarlos <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>

              <div className="col-xs-12 col-md-3 col-lg-3 col-xl-3">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>$150.000.00</h3>
                    <p>Total de Ventas</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <Link to={"/clientes"} className="small-box-footer">
                    Consultarlos <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-lg-7 connectedSortable ui-sortable">



              <div className="col-md-6">
                {/* USERS LIST */}
                <div className="card m-5 w-100 h-100">
                  <div className="card-header">
                    <h3 className="card-title">Listado de Desarrolladores</h3>
                    <div className="card-tools">
                      <span className="badge badge-danger">5 Integrantes</span>
                      <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus" />
                      </button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}

                  <div className="card-body p-1">
                    <ul className="users-list clearfix">
                      <li>
                        <img src="dist/img/user1-128x128.jpg" alt="" />
                        <Link className="users-list-name" href="#">Leonardo</Link>
                        <span className="users-list-date">Frontend</span>
                      </li>
                      <li>
                        <img src="dist/img/user8-128x128.jpg" alt="" />
                        <Link className="users-list-name" href="#">Andres</Link>
                        <span className="users-list-date">Backend</span>
                      </li>
                      <li>
                        <img src="dist/img/user7-128x128.jpg" alt="" />
                        <Link className="users-list-name" href="#">Alison</Link>
                        <span className="users-list-date">Frontend</span>
                      </li>
                      <li>
                        <img src="dist/img/user6-128x128.jpg" alt="" />
                        <Link className="users-list-name" to={"#"}>Fransuat</Link>
                        <span className="users-list-date">Backend</span>
                      </li>
                      <li>
                        <img src="dist/img/user2-160x160.jpg" alt="" />
                        <Link className="users-list-name" href="#">Camilo</Link>
                        <span className="users-list-date">Backend</span>
                      </li>
                    </ul>
                  </div>

                  <div className="card-footer text-center">
                    <Link to={"#"}>Información Desarrolladores</Link>
                  </div>
                </div>
              </div>



            </div>
            <div className="col-lg-3 connectedSortable ui-sortable derecho bg-white border-transparent">
              {/* CARRUSEL DE IMAGENES */}
              <div className="col-md-16 w-100 align-content-center">
                {/* RECOMENDED PRODUCTS*/}

                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="dist/img/PurinaPerros.png" class="d-block w-100 align-content-center" alt="COMIDA DE PERROS"></img>
                    </div>
                    <div className="carousel-item">
                      <img src="dist/img/PurinaGatos.png" class="d-block w-100 align-content-center" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                      <img src="dist/img/JuguetePerro.png" class="d-block w-100 align-content-center" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                      <img src="dist/img/JugueteGato.png" class="d-block w-100 align-content-center" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                      <img src="dist/img/CorreaPerros.png" class="d-block w-100 align-content-center" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                      <img src="dist/img/CorreaGatos.png" class="d-block w-100 align-content-center" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                      <img src="dist/img/HeladoPerros.png" class="d-block w-100 align-content-center" alt="..."></img>
                    </div>
                  </div>
                </div>
              </div>
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
