import React, { useState, useEffect } from "react";
import Product from './Product';


import APIInvoke from "../../utils/APIInvoke";


export default function ProductosVentaInicio(){

    const [dataProductos, setdataProductos] = useState([]);

    const listaProductosdos = async () => {
      const response = await APIInvoke.invokeGET(`/api/productos/listar`);
      setdataProductos(response.productos);
    };

      //Refrescar la pagina 
    useEffect(() => {
    listaProductosdos();
  }, []);

    return (

        <div>
  
        {/* INICIO DEL CONTENIDO DE LA PAGINA  */}
            <div className="container-fluid">

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
    </div>
        
    );
}
