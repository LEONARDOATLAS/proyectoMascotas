import React, { useState, useEffect } from "react";
import Product from './Product';


import APIInvoke from "../../utils/APIInvoke";
import Narbar from "../../components/Narvar";
import SidebarContainer from "../../components/SidebarContainer";
import ContentHeader from "../../components/ContentHeard";
import Footer from "../../components/Footer";

export default function ProductosVenta(){

    const [dataProductos, setdataProductos] = useState([]);

    const listaProductosdos = async () => {
      const response = await APIInvoke.invokeGET(`/api/productos/listar`);
      setdataProductos(response.productos);
    };

    console.log("total de productos", dataProductos.length)

      //Refrescar la pagina 
    useEffect(() => {
    listaProductosdos();
  }, []);


    return (

        <div className="wrapper">
        <Narbar></Narbar>
        <SidebarContainer></SidebarContainer>
  
        {/* INICIO DEL CONTENIDO DE LA PAGINA  */}
            <div className="content-wrapper background">
              <ContentHeader
                titulo={"Productos para la Venta"}
                breadCrumb1={"Inicio"}
                breadCrumb2={"Agregar"}
                ruta={"/"}
              />
            {/* INICIO CONTENIDO INTERNO DE LA PAGINA  */}

            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5">
            {
                dataProductos.map(product =>(
                        <Product key={product.id} product={product} />
                ))
            }
            </div>

            {/* FIN CONTENIDO INTERNO DE LA PAGINA  */}
            </div>
            {/* FIN DEL CONTENIDO DE LA PAGINA  */}
      <Footer></Footer>
    </div>
        
    );
}
