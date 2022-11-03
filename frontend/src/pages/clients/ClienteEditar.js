import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import ContentHeader from "../../components/ContentHeard";
import Footer from "../../components/Footer";
import Narbar from "../../components/Narvar";
import SidebarContainer from "../../components/SidebarContainer";

import APIInvoke from "../../utils/APIInvoke";
import Swal from 'sweetalert2'

const ClienteEditar = () => {

  const navigate = useNavigate();

  const { idcliente } = useParams();
  let arreglo = idcliente.split("@");
  const consnombre = arreglo[1];
  const consdireccion = arreglo[2];
  const constelefono = arreglo[3];
  const conscorreo = arreglo[4]


  const [cliente, setCliente] = useState({
    nombre: consnombre,
    direccion: consdireccion,
    telefono: constelefono,
    correo: conscorreo,
  });

  const {nombre, direccion, telefono, correo } =
    cliente;

  const onChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const editarCliente = async () => {
    let arreglo = idcliente.split("@");
    const idCliente = arreglo[0];

    const data = {
      nombre: cliente.nombre,
      direccion: cliente.direccion,
      telefono: cliente.telefono,
      correo: cliente.correo,
    };
    const responde = await APIInvoke.invokePUT(`/api/productos/editar/${idCliente}`, data);
    const idprod = responde.msg; // mesaje que fue colocado en controller en donde dice res.json()

  
    if (idprod !== "Los datos del cliente se actualizaron correctamente") {
      const msg = "Los datos no se cambiaron";
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: msg,
      });

    } else {
      const msg = "El Cliente fue creado exitosamente..";
      Swal.fire({
        icon: 'success',
        title: 'Confirmación',
        text: msg,
      });
      navigate("/clientes")
    }
  };

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    editarCliente();
  };

  return (
    <div className="wrapper">
      <Narbar></Narbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper">
        <ContentHeader
          titulo={"Editar Clientes"}
          breadCrumb1={"Listado"}
          breadCrumb2={"Agregar"}
          ruta={"/clientes"}
        />

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Editar Clientes</h3>
                  </div>
                  <form onSubmit={onSubmit}>
                    <div className="card-body">

                      <div className="form-group">
                        <label htmlFor="txtnombre">Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombre"
                          name="nombre"
                          value={nombre}
                          onChange={onChange}
                          placeholder="Su nombre"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="txtdescripcion">Direccion</label>
                        <input
                          type="text"
                          className="form-control"
                          id="direccion"
                          name="direccion"
                          value={direccion}
                          onChange={onChange}
                          placeholder="Direccion"
                          required
                        />
                      </div>

                      <div className="row">
                        <div className="form-group col-md-3">
                          <label htmlFor="txtvalor">Telefono</label>
                          <input
                            type="number"
                            className="form-control"
                            id="telefono"
                            name="telefono"
                            value={telefono}
                            onChange={onChange}
                            placeholder="Telefono"
                            required
                          />
                        </div>

                        <div className="form-group col-md-3">
                          <label htmlFor="txtiva">Correo</label>
                          <input
                            type="text"
                            className="form-control"
                            id="correo"
                            name="correo"
                            value={correo}
                            onChange={onChange}
                            placeholder="Correo Electronico"
                            required
                          />
                        </div>

                        
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="row">
                      <button type="submit" className="btn btn-primary">
                        Guardar
                      </button>
                      &nbsp;&nbsp;
                      <Link to={"/clientes"} className="btn btn-sm btn-secondary">Regresar</Link>
                      </div>
                    </div>
                  </form>
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

export default ClienteEditar;
