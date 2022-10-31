import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ContentHeader from "../../components/ContentHeard";
import Footer from "../../components/Footer";
import Narbar from "../../components/Narvar";
import SidebarContainer from "../../components/SidebarContainer";

import swal from 'sweetalert2'
import APIInvoke from "../../utils/APIInvoke";

const ProductoFormulario = () => {

    const navigate = useNavigate();

  const [producto, setProducto] = useState({
    id: "",
    codigo: "",
    nombre: "",
    categoria: "",
    descripcion: "",
    valor: "",
    iva: "",
    estado: "",
  });

  const { id, codigo, nombre, categoria, descripcion, valor, iva, estado } =
    producto;

  const onChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const crearProducto = async () => {
    const data = {
      id: producto.id,
      codigo: producto.codigo,
      nombre: producto.nombre,
      categoria: producto.categoria,
      descripcion: producto.descripcion,
      valor: producto.valor,
      iva: producto.iva,
      estado: producto.estado,
    };
    console.log(data);
    const responde = await APIInvoke.invokePOST(`/api/productos`, data);
    const idproducto = responde.producto.id;

    if (idproducto === "El producto fue guardado exitosamente") {
      const mensaje = "El producto fue creado exitosamente..";
      navigate("/listarproductos");
      swal({
        title: " Confirmación",
        text: mensaje,
        icon: "success",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-success",
            closeModal: true,
          },
        },
      });
    } else {
      const mensaje = "El producto  no fue creado";
      swal({
        title: "error",
        text: mensaje,
        icon: "error",
        buttons: {
          confirm: {
            text: "Error",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    }
    setProducto({
      id: "",
      codigo: "",
      nombre: "",
      categoria: "",
      descripcion: "",
      valor: "",
      iva: "",
      estado: "",
    });
  };

  useEffect(() => {
    document.getElementById("id").focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    crearProducto();
  };

  return (
    <div className="wrapper">
      <Narbar></Narbar>
      <SidebarContainer></SidebarContainer>

      <div className="content-wrapper">
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
                          required
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
                        <label htmlFor="txtcategoria">Categoria</label>
                        <input
                          type="text"
                          className="form-control"
                          id="categoria"
                          name="categoria"
                          value={categoria}
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
                            type="text"
                            id="estado"
                            name="estado"
                            value={estado}
                            onChange={onChange}
                            className="form-control"
                            placeholder="Estado (false, true)"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">
                        Guardar
                      </button>
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
