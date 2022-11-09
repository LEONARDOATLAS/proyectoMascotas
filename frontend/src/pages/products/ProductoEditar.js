import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import ContentHeader from "../../components/ContentHeard";
import Footer from "../../components/Footer";
import Narbar from "../../components/Narvar";
import SidebarContainer from "../../components/SidebarContainer";

import APIInvoke from "../../utils/APIInvoke";
import Swal from 'sweetalert2'

const ProductoEditar = () => {

  const navigate = useNavigate();

  const { idproducto } = useParams();
  let arreglo = idproducto.split("@");
  const conscodigo = arreglo[1];
  const consnombre = arreglo[2];
  const consid_categoria = arreglo[3];
  const consdescripcion = arreglo[4];
  const consurlimagen = arreglo[9];
  const consvalor = arreglo[5];
  const consiva = arreglo[6]
  const conestado = arreglo[7]


  const [producto, setProducto] = useState({
    codigo: conscodigo,
    nombre: consnombre,
    id_categoria: consid_categoria,
    descripcion: consdescripcion,
    urlimagen: consurlimagen,
    valor: consvalor,
    iva: consiva,
    estado: conestado,
  });

  const {codigo, nombre, id_categoria, descripcion, urlimagen, valor, iva, estado } =
    producto;

  const onChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const editarProducto = async () => {
    let arreglo = idproducto.split("@");
    const idProducto = arreglo[0];

    const data = {
      codigo: producto.codigo,
      nombre: producto.nombre,
      id_categoria: producto.id_categoria,
      descripcion: producto.descripcion,
      urlimagen: producto.urlimagen,
      valor: producto.valor,
      iva: producto.iva,
      estado: producto.estado,
    };
    const responde = await APIInvoke.invokePUT(`/api/productos/editar/${idProducto}`, data);
    const idprod = responde.msg; // mesaje que fue colocado en controller en donde dice res.json()

  
    if (idprod !== "El producto se actualizo correctamente") {
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
      navigate("/productos")
    }
  };

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    editarProducto();
  };

  return (
    <div className="wrapper">
      <Narbar></Narbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper background">
        <ContentHeader
          titulo={"Editar Productos"}
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
                    <h3 className="card-title">Editar Productos</h3>
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
                        <label htmlFor="txtcategoria">Categoria</label>
                        <input
                          type="text"
                          className="form-control"
                          id="id_categoria"
                          name="id_categoria"
                          value={id_categoria}
                          onChange={onChange}
                          placeholder="Categoria"
                          required
                        />
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
                      <button type="submit" className="btn btn-primary">
                        Guardar
                      </button>
                      &nbsp;&nbsp;
                      <Link to={"/productos"} className="btn btn-sm btn-secondary">Regresar</Link>
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

export default ProductoEditar;
