import React from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../components/ContentHeard';
import Footer from '../components/Footer';
import Narbar from '../components/Narvar';
import SidebarContainer from '../components/SidebarContainer';

const Error404 = () => {
    return (
        <div className="wrapper">
          <Narbar></Narbar>
          <SidebarContainer></SidebarContainer>
    
          {/* INICIO DEL CONTENIDO DE LA PAGINA  */}
              <div className="content-wrapper">
                <ContentHeader
                  titulo={"Error 404"}
                  breadCrumb1={"Inicio"}
                  breadCrumb2={"Agregar"}
                  ruta={"/"}
                />
    
                 {/* INICIO CONTENIDO INTERNO DE LA PAGINA  */}
    

    <section className="content">
  <div className="error-page">
    <h2 className="headline text-warning"> 404</h2>
    <div className="error-content">
      <h3><i className="fas fa-exclamation-triangle text-warning" /> Oops! La Pagina no Funciona</h3>
      <p>
      No pudimos encontrar la página que estabas buscando. Mientras tanto, puede volver al <Link to={"/"}> panel de control </Link>o intentar usar el formulario de búsqueda.
      </p>
      <form className="search-form">
        <div className="input-group">
          <input type="text" name="search" className="form-control" placeholder="Search" />
          <div className="input-group-append">
            <button type="submit" name="submit" className="btn btn-warning"><i className="fas fa-search" />
            </button>
          </div>
        </div>
    
      </form>
    </div>

  </div>

</section>

    
                 {/* FIN CONTENIDO INTERNO DE LA PAGINA  */}
    
    
    
              </div>
           {/* FIN DEL CONTENIDO DE LA PAGINA  */}
          <Footer></Footer>
        </div>
      );
    };
 
export default Error404;