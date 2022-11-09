import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ContentHeader from "../../components/ContentHeard";
import Footer from "../../components/Footer";
import Narbar from "../../components/Narvar";
import SidebarContainer from "../../components/SidebarContainer";

import APIInvoke from "../../utils/APIInvoke";
import Swal from 'sweetalert2'
const FormularioFactura = () => {
    const [factura, setFactura] = useState({
        id: "",
        categoria: "",
        id_cliente: "",
        cantidad: "",
        valor_unitario: "",
        valor_total: ""
    });
    const { id, categoria, id_cliente, cantidad, valor_unitario, valor_total } = factura;
    const onChange = (e) => {
        setFactura({
            ...factura,
            [e.target.categoria]: e.target.value,
        });
    };
    const crearFactura = async () => {
        const data = {
            id: factura.id,
            categoria: factura.categoria,
            id_cliente: factura.id_cliente,
            cantidad: factura.cantidad,
            valor_unitario: factura.valor_unitario,
            valor_total: factura.valor_total
        };
        console.log(data);
        const responde = await APIInvoke.invokePOST(`/api/factura/save`, data);
        const mensaje = responde.msg;
        console.log(mensaje)
        if (mensaje !== "La factura se guardo exitosamente") {
            const msg = "La factura no se creo";
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: msg,
            });

        } else {
            const msg = "La factura se creo exitosamente";
            Swal.fire({
                icon: 'success',
                title: 'Confirmación',
                text: msg,
            });

        }
        setFactura({
            id: "",
            categoria: "",
            id_cliente: "",
            cantidad: "",
            valor_unitario: "",
            valor_total: ""
        });
    };

    useEffect(() => {
        document.getElementById("id").focus();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        crearFactura();
    };

    return (
        <div className="wrapper">
            <Narbar></Narbar>
            <SidebarContainer></SidebarContainer>

            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Agregar Facturas"}
                    breadCrumb1={"Listado"}
                    breadCrumb2={"Agregar"}
                    ruta={"/factura"}

                />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Agregar Factura</h3>
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
                                                    placeholder="Id"
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
                                                    placeholder="ponga la categoria de su producto"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="txtid_cliente">Cliente</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="id_cliente"
                                                    name="id_cliente"
                                                    value={id_cliente}
                                                    onChange={onChange}
                                                    placeholder="el id del cliente"
                                                    required
                                                />
                                            </div>

                                            <div className="row">
                                                <div className="form-group">
                                                    <label htmlFor="txtcantidad">Cantidad</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="cantidad"
                                                        name="cantidad"
                                                        value={cantidad}
                                                        onChange={onChange}
                                                        placeholder="la cantidad de productos"
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group col-md-3">
                                                    <label htmlFor="txtvalor_unitario">Valor Unitario</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="valor_unitario"
                                                        name="valor_unitario"
                                                        value={valor_unitario}
                                                        onChange={onChange}
                                                        placeholder="Valor individual"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group col-md-3">
                                                    <label htmlFor="txtvalor_unitario">Valor Total</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="valor_total"
                                                        name="valor_total"
                                                        value={valor_total}
                                                        onChange={onChange}
                                                        placeholder="Valor total"
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
                                                <Link to={"/factura"} className="btn btn-sm btn-secondary">Regresar</Link>
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
export default FormularioFactura;