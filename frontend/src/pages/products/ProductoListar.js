import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import ContentHeader from "../../components/ContentHeard";
import Footer from "../../components/Footer";
import Narbar from "../../components/Narvar";
import SidebarContainer from "../../components/SidebarContainer";

import APIInvoke from "../../utils/APIInvoke";

const ProductoListar = () => {
  //const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const consutlaToken = async () =>{
    const token = localStorage.getItem('token');
    if(token !== null) {
        setLoggedIn(true);
    }
  }


  const [dataProductos, setdataProductos] = useState([]);

  const listaProductosdos = async () => {
    const response = await APIInvoke.invokeGET(`/api/productos/listar`);
    setdataProductos(response.productos);
  };

  //Eliminar el el producto
  const eliminarProducto = async (e, idProducto) => {
      e.preventDefault();

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta seguro de eliminar producto',
        text: "No puede revertir este proceso",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Se elimino el producto seleccionado.',
            'exitoso'
          )
          APIInvoke.invokeDELETE(`/api/productos/delete/${idProducto}`
          );
          listaProductosdos()
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se el elimino el producto'
          )
        }
      })
  };

  //Refrescar la pagina 
  useEffect(() => {
    listaProductosdos();
    consutlaToken();
  }, []);

  return (
    <div className="wrapper">
      <Narbar></Narbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper background">
        <ContentHeader
          titulo={"Listado de productos"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Agregar"}
          ruta={"/"}
        />

        {/* Contenido de la pagina  */}
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">

                {loggedIn && 
                <Link
                  to={"/productosagregar"}
                  type="button"
                  className="btn btn-block btn-outline-primary btn-sm-4"
                >
                  Agregar nuevo
                </Link>
                }
              </h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "2%" }}>#</th>
                    <th style={{ width: "4%" }}>Id</th>
                    <th style={{ width: "4%" }}>Codigo</th>
                    <th style={{ width: "15%" }}>Nombre</th>
                    <th style={{ width: "5%" }}>Categoria</th>
                    <th style={{ width: "3%" }}>Valor</th>
                    <th style={{ width: "15%" }}>Descripción</th>
                    <th style={{ width: "12%" }}>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {dataProductos.map((item, index) => (
                    <tr key={item._id}>
                        <td style={{textAlign: "center"}}>{index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.codigo}</td>
                        <td>{item.nombre}</td>
                        <td>{item.id_categoria}</td>
                        <td style={{textAlign: "right"}}>{new Intl.NumberFormat().format(item.valor)}</td>
                        <td>{item.descripcion}</td>
                        <td>

                          { loggedIn && 
                          <Link
                            to={`/productoseditar/${item.id}`}
                            className="btn btn-sm btn-primary"
                          >
                            Editar
                          </Link>

                           }

                          &nbsp;&nbsp;
                          
                          { loggedIn && 
                          <button
                            onClick={(e) => eliminarProducto(e, item.id)}
                            className="btn btn-sm btn-danger"
                          >
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            Eliminar
                          </button>
                         }
                          <Link to={`/productosdetalle/${item.id}`} className="btn btn-sm btn-outline-secondary">
                          Mas Detalles
                          </Link>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

         {/* Fin contenido de la pagina  */}

      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductoListar;
