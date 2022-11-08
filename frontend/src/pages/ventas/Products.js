import React from 'react';

import ContentHeader from '../../components/ContentHeard';
import Footer from '../../components/Footer';
import Narbar from '../../components/Narvar';
import SidebarContainer from '../../components/SidebarContainer';
import './ventas.css'

const Products = () => {
    return (
        <div className="wrapper">
          <Narbar></Narbar>
          <SidebarContainer></SidebarContainer>
    
          {/* INICIO DEL CONTENIDO DE LA PAGINA  */}
              <div className="content-wrapper">
                <ContentHeader
                  titulo={"PRODUCTOS"}
                  breadCrumb1={"Inicio"}
                  breadCrumb2={"Agregar"}
                  ruta={"/"}
                />
    
                 {/* INICIO CONTENIDO INTERNO DE LA PAGINA  */}
    
                 <section className="content">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <div className='imagen'>
                            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjDRRKN9LX2BlLq2Mk2ej9WYUhIuEw3_FVw&usqp=CAU" className="card-img-top" alt="..." />
                            </div>
                        <div className="card-body">
                            <h5 className="card-title">Purina</h5> 
                            <h4 className="card-text">Precio: </h4>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://www.elheraldo.co/sites/default/files/styles/width_414/public/comercio_mascotas_bienestar_animal_barranquilla.jpg?itok=5JsfBfvE" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tienda de Mascotas</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://www.elheraldo.co/sites/default/files/styles/width_414/public/comercio_mascotas_bienestar_animal_barranquilla.jpg?itok=5JsfBfvE" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tienda de Mascotas</h5>
                            <h5 className="card-text">Precio: </h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://www.elheraldo.co/sites/default/files/styles/width_414/public/comercio_mascotas_bienestar_animal_barranquilla.jpg?itok=5JsfBfvE" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tienda de Mascotas</h5>
                            <h5 className="card-text">Precio: </h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    </div>

                 </section>

    
    
                 {/* FIN CONTENIDO INTERNO DE LA PAGINA  */}
    
    
    
              </div>
           {/* FIN DEL CONTENIDO DE LA PAGINA  */}
          <Footer></Footer>
        </div>
      );
}
 
export default Products;