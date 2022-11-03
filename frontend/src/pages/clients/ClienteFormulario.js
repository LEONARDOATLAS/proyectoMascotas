import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ContentHeader from "../../components/ContentHeard";
import Footer from "../../components/Footer";
import Narbar from "../../components/Narvar";
import SidebarContainer from "../../components/SidebarContainer";

import APIInvoke from "../../utils/APIInvoke";
import Swal from 'sweetalert2'


const ClienteFormulario = () => {

  

  const [cliente, setCliente] = useState({
    id: "",
    nombre: "",
    direccion: "",
    telefono: "",
    correo: "",
  });

  const { id, nombre, direccion, telefono, correo } =
    cliente;

  const onChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const crearCliente = async () => {
    const data = {
      id: cliente.id,
      nombre: cliente.nombre,
      direccion: cliente.direccion,
      telefono: cliente.telefono,
      correo: cliente.correo,
    };
    console.log(data);
    const responde = await APIInvoke.invokePOST(`/api/clientes/save`, data);
    const mensaje = responde.msg;
    console.log(mensaje)
    if (mensaje !== "El cliente fue guardado exitosamente") {
      const msg = "El cliente  no fue creado";
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: msg,
      });

    } else {
      const msg = "El cliente fue creado exitosamente..";
      Swal.fire({
        icon: 'success',
        title: 'Confirmación',
        text: msg,
      });

    }
    setCliente({
      id: "",
      nombre: "",
      direccion: "",
      telefono: "",
      correo: "",
    });
  };

  useEffect(() => {
    document.getElementById("id").focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    crearCliente();
  };

  return (
    <div className="wrapper">
      <Narbar></Narbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper">
        <ContentHeader
          titulo={"Agregar Clientes"}
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
                    <h3 className="card-title">Agregar Cliente</h3>
                  </div>
                  <form onSubmit={onSubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="Id">Id:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="id"
                          name="id"
                          value={id}
                          onChange={onChange}
                          placeholder="IdLocal"
                          required
                        />
                      </div>

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
                      <div className="form-group">
                        <label htmlFor="txtdescripcion">Telefono</label>
                        <input
                          type="number"
                          className="form-control"
                          id="telefono"
                          name="telefono"
                          value={telefono}
                          onChange={onChange}
                          placeholder="Numero de Telefono"
                          required
                        />
                      </div>

                        <div className="form-group col-md-3">
                          <label htmlFor="txtvalor">Correo</label>
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

export default ClienteFormulario;
