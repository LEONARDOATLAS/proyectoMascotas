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

      <div className="content-wrapper">
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
                  <div className="card">
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
                              <span className="users-list-date">Yesterday</span>
                            </li>
                            <li>
                              <img src="dist/img/user7-128x128.jpg" alt="" />
                              <Link className="users-list-name" href="#">Alison</Link>
                              <span className="users-list-date">Frontend</span>
                            </li>
                            <li>
                              <img src="dist/img/user6-128x128.jpg" alt="" />
                              <Link className="users-list-name" to={"#"}>Fronsualt</Link>
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
            <div className="col-lg-5 connectedSortable ui-sortable derecho">


            <div className="card-body p-1">
            </div>


                {/* CARRUSEL DE IMAGENES */}
                <div className="row">
                <div className="product col-xs-10 col-sm-6 col-md-4 ">
                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="dist/img/products/purina.png" className="d-block w-100"  alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src=".../" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="dist/img/products/purina.png" className="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="visually-hidden">Next</span>
                    </button>
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
