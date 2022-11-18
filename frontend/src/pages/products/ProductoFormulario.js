import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uniquid from "uniqid"

import ContentHeader from "../../components/ContentHeard";
import Footer from "../../components/Footer";
import Narbar from "../../components/Narvar";
import SidebarContainer from "../../components/SidebarContainer";

import APIInvoke from "../../utils/APIInvoke";
import Swal from 'sweetalert2'


const ProductoFormulario = () => {

  //const navigate = useNavigate();

  const [producto, setProducto] = useState({
    id: "",
    codigo: "",
    nombre: "",
    id_categoria: "",
    descripcion: "",
    urlimagen:"",
    valor: "",
    iva: "",
    estado: "",
  });


  const [dataCategorias, setdataCategorias] = useState([]);

  const listaProductos = async () => {
    const response = await APIInvoke.invokeGET(`/api/categoria/listar`);
    setdataCategorias(response.categoria);
  };
 
 
  const { id, codigo, nombre, id_categoria, descripcion, urlimagen, valor, iva, estado } =
    producto;

  const onChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const crearProducto = async () => {
    const data = {
      id: uniquid(),
      codigo: producto.codigo,
      nombre: producto.nombre,
      id_categoria: producto.id_categoria,
      descripcion: producto.descripcion,
      urlimagen: producto.urlimagen,
      valor: producto.valor,
      iva: producto.iva,
      estado: producto.estado,
    };
    console.log(data);
    const responde = await APIInvoke.invokePOST(`/api/productos/save`, data);
    const mensaje = responde.msg; // mensaje que se coloca res.json() esta en el controller
    console.log(mensaje)
    if (mensaje !== "El producto fue guardado exitosamente") {
      const msg = "El producto  no fue creado";
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: msg,
      });

    } else {
      const msg = "El producto fue creado exitosamente..";
      Swal.fire({
        icon: 'success',
        title: 'Confirmación',
        text: msg,
      });

    }
    setProducto({
      id: "",
      codigo: "",
      nombre: "",
      id_categoria: "",
      descripcion: "",
      urlimagen: "",
      valor: "",
      iva: "",
      estado: "",
    });
  };

  useEffect(() => {
    document.getElementById("codigo").focus();
    listaProductos();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    crearProducto();
  };

  return (
    <div className="wrapper">
      <Narbar></Narbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper background">
        <ContentHeader
          titulo={"Agregar Productos"}
          breadCrumb1={"Listado"}
          breadCrumb2={"Agregar"}
          ruta={"/productos"}
          
        />

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Agregar Productos</h3>
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
                          disabled
                        />
                      </div>

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
                        <label htmlFor="txtcategoria">Categoria: </label>
                        
                        <select id="id_categoria" name="id_categoria" value={id_categoria} onChange={onChange} className="form-control form-control-sm">
                        <option key={1}>Seleccione la categoria: </option>
                          {dataCategorias.map((item) => (
                            <option key={item._id} value={item.id}>{item.nombre}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="txtdescripcion">Descripcion</label>
                        <input
                          type="text"
                          className="form-control"
                          id="descripcion"
                          name="descripcion"
                          value={descripcion}
                          onChange={onChange}
                          placeholder="Descripcion"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="txtdescripcion">Url_imagen</label>
                        <input
                          type="text"
                          className="form-control"
                          id="urlimagen"
                          name="urlimagen"
                          value={urlimagen}
                          onChange={onChange}
                          placeholder="Url_imagen"
                          required
                        />
                      </div>

                      <div className="row">
                        <div className="form-group col-md-3">
                          <label htmlFor="txtvalor">Valor</label>
                          <input
                            type="text"
                            className="form-control"
                            id="valor"
                            name="valor"
                            value={valor}
                            onChange={onChange}
                            placeholder="Valor"
                            required
                          />
                        </div>

                        <div className="form-group col-md-3">
                          <label htmlFor="txtiva">Iva</label>
                          <input
                            type="text"
                            className="form-control"
                            id="iva"
                            name="iva"
                            value={iva}
                            onChange={onChange}
                            placeholder="Iva"
                            required
                          />
                        </div>

                        <div className="form-group col-md-3">
                          <label htmlFor="txtestado">Estado</label>
                          <input
                            type="number"
                            id="estado"
                            name="estado"
                            value={estado}
                            onChange={onChange}
                            className="form-control"
                            placeholder="Estado (1, 0)"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="row">
                      <button type="submit" className="col-sm-3 btn btn-outline-primary">
                        Guardar
                      </button>
                      &nbsp;&nbsp;
                      <Link to={"/productos"} className="col-sm-3 btn btn-sm btn-outline-secondary">Regresar</Link>
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

export default ProductoFormulario;
