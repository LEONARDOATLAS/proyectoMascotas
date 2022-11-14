import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import ContentHeader from "../../components/ContentHeard";
import Footer from "../../components/Footer";
import Narbar from "../../components/Narvar";
import SidebarContainer from "../../components/SidebarContainer";

import APIInvoke from "../../utils/APIInvoke";
import Swal from 'sweetalert2'

const CategoriasEditar = () => {
    const navigate = useNavigate();

    const { idcategoria}  = useParams();

    const [dataCategorias, setdataCategorias] = useState([]);
    async function listaCategorias () {
        const response = await APIInvoke.invokeGET(`/api/categoria/listar/${idcategoria}`);
        setdataCategorias(response.categoria);
    };

    const consutalCategoria = dataCategorias[0];
    // Guardamos los datos en una constantes 
    const conscodigo = consutalCategoria?.codigo;
    const consnombre = consutalCategoria?.nombre;
    const consestado = consutalCategoria?.estado;

    const [categoria, setCategoria] = useState({});

    const {
        codigo = conscodigo,
        nombre = consnombre,
        estado = consestado
       } = categoria

    const onChange = (e) => {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
      document.getElementById("codigo").focus();
      listaCategorias();
  }, [0]);
  

    const editarCategoria = async () => {
        let arreglo = idcategoria.split("@");
        const idCategoria = arreglo[0];

        const data = {
            codigo: categoria.codigo,
            nombre: categoria.nombre,
            estado: categoria.estado,
        };
        const responde = await APIInvoke.invokePUT(`/api/categoria/editar/${idCategoria}`, data);
        const idcat = responde.msg; //

        if (idcat !== "La categoria se actualizo correctamente") {
            const msg = "La categoria no se actualizo";
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: msg,
            });
        } else {
            const msg = "La categoria fue creado exitosamente";
            Swal.fire({
                icon: 'success',
                title: 'Confirmación',
                text: msg,
            });
            navigate("/categorias")
        }
    };

    const onSubmit =(e) => {
        e.preventDefault();
        editarCategoria();
    };

    return(
        <div className="wrapper">
      <Narbar></Narbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper background">
        <ContentHeader
          titulo={"Editar Categorias"}
          breadCrumb1={"Listado"}
          breadCrumb2={"Agregar"}
          ruta={"/categorias"}
        />

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Editar Categoria</h3>
                  </div>
                  <form onSubmit={onSubmit}>
                    <div className="card-body">

                      <div className="form-group">
                        <label htmlFor="codigo">Codigo:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="codigo"
                          name="codigo"
                          value={codigo}
                          onChange={onChange}
                          placeholder="codigo"
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
                          placeholder="nombre producto"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="txtestado">Estado</label>
                        <input
                          type="text"
                          className="form-control"
                          id="estado"
                          name="estado"
                          value={estado}
                          onChange={onChange}
                          placeholder="Estado"
                          required
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="row">
                      <button type="submit" className="btn btn-primary">
                        Guardar
                      </button>
                      &nbsp;&nbsp;
                      <Link to={"/categorias"} className="btn btn-sm btn-secondary">Regresar</Link>
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

export default CategoriasEditar;