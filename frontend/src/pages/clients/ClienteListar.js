import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import ContentHeader from '../../components/ContentHeard';
import Footer from '../../components/Footer';
import Narbar from '../../components/Narvar';
import SidebarContainer from '../../components/SidebarContainer';

import APIInvoke from "../../utils/APIInvoke";

const ClienteListar = () => {

    const [dataClientes, setdataClientes] = useState([]);

    const listaClientes = async () => {
        const response = await APIInvoke.invokeGET(`/api/clientes/listar`);
        setdataClientes(response.clientes);
    };

    const eliminarCliente = async (e, idCliente) => {
      e.preventDefault();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
       
    swalWithBootstrapButtons.fire({
      title: 'Esta seguro de eliminar el cliente',
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
          'Se elimino el cliente seleccionado.',
          'exitoso'
        )
        APIInvoke.invokeDELETE(`/api/clientes/eliminar/${idCliente}`
        );
        listaClientes()
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'No se el elimino el cliente'
        )
      }
    })
};
//Refrescar la pagina 
useEffect(() => {
  listaClientes();
}, []);

return (
  <div className="wrapper">
    <Narbar></Narbar>
    <SidebarContainer></SidebarContainer>

    <div className="content-wrapper">
      <ContentHeader
        titulo={"Lista de clientes"}
        breadCrumb1={"Inicio"}
        breadCrumb2={"Agregar"}
        ruta={"/"}
      />

      
      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <Link
                to={"/clientesagregar"}
                type="button"
                className="btn btn-block btn-outline-primary btn-sm-4"
              >
                Agregar nuevo
              </Link>
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
                  <th style={{ width: "15%" }}>Nombre</th>
                  <th style={{ width: "25%" }}>Dirección</th>
                  <th style={{ width: "6%" }}>telefono</th>
                  <th style={{ width: "15%" }}>correo</th>
                  <th style={{ width: "8%" }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {dataClientes.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                  <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{item.direccion}</td>
                    <td>{item.telefono}</td>
                    <td>{item.correo}</td>
                    <td>
                      <Link
                        to={`/clienteseditar/${item.id}@${item.nombre}@${item.direccion}@${item.telefono}@${item.correo}`}
                        className="btn btn-sm btn-primary"
                      >
                        Editar
                      </Link>
                      &nbsp;&nbsp;
                      <button
                        onClick={(e) => eliminarCliente(e, item.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


    </div>
    <Footer></Footer>
  </div>
);
};

export default ClienteListar;

