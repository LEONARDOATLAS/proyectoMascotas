import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uniquid from "uniqid"

import ContentHeader from "../../components/ContentHeard";
import Footer from "../../components/Footer";
import Narbar from "../../components/Narvar";
import SidebarContainer from "../../components/SidebarContainer";

import APIInvoke from "../../utils/APIInvoke";
import Swal from 'sweetalert2'


const CategoriaFormulario = () => {

  //const navigate = useNavigate();

  const [categoria, setCategoria] = useState({
    id: "",
    nombre: "",
    estado: "",
  });

  const { id, nombre, estado } =
    categoria;

  const onChange = (e) => {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  };

  const crearCategoria = async () => {
    const data = {
      id: uniquid(),
      nombre: categoria.nombre,
      estado: categoria.estado,
    };
    console.log(data);
    const responde = await APIInvoke.invokePOST(`/api/categoria/save`, data);
    const mensaje = responde.msg; // mensaje que se coloca res.json() esta en el controller
    console.log(mensaje)
    if (mensaje !== "La categoria fue guardado exitosamente") {
      const msg = "La categoria fue creado exitosamente..";
      Swal.fire({
        icon: 'success',
        title: 'Confirmación',
        text: msg,
      
      });
   
    } else {
      const msg = "La categoria  no fue creado";
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: msg,
      });

    }
    setCategoria({
      id: "",
      nombre: "",
      estado: "",
    });
  };

  useEffect(() => {
    document.getElementById("id").focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    crearCategoria();
  };

  return (
    <div className="wrapper">
      <Narbar></Narbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper background">
        <ContentHeader
          titulo={"Agregar Categorias"}
          breadCrumb1={"Listado"}
          breadCrumb2={"Agregar"}
          ruta={"/categorias"} />
      

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card card primary">
                <div className="card-header">
                  <h3 className="card-title">Agregar Categoria</h3>
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
                        placeholder="Idlocal"
                        disabled />
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
                        placeholder="nombre categoria"
                        required>
                      </input>
                    </div>

                    <div className="form-group">
                      <label htmlFor="txtestado">Estado</label>
                      <input
                        type="text"
                        id="estado"
                        name="estado"
                        value={estado}
                        onChange={onChange}
                        className="form-control"
                        placeholder="Estado de la categoria"
                        required>
                      </input>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <button type="submit" className="col-sm-3 btn btn-outline-primary">
                        Guardar
                      </button>
                      &nbsp;&nbsp;
                      <Link to={"/categorias"} className="col-sm-3 btn btn-sm btn-outline-secondary">Regresar</Link>
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
  
  export default CategoriaFormulario;
