import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import ContentHeader from "../../components/ContentHeard";
import Footer from "../../components/Footer";
import Narbar from "../../components/Narvar";
import SidebarContainer from "../../components/SidebarContainer";

import APIInvoke from "../../utils/APIInvoke";
import Swal from 'sweetalert2'

const EditarFactura = () => {
    const navigate = useNavigate();
    const { idfactura } = useParams();
    let modificar = idfactura.split("@");
    const lacategoria = modificar[1];
    const laid_cliente = modificar[2];
    const lacantidad = modificar[3];
    const lavalor_unitario = modificar[4];
    const lavalor_total = modificar[5]
    const [factura, setFactura] = useState({
        categoria: lacategoria,
        id_cliente: laid_cliente,
        cantidad: lacantidad,
        valor_unitario: lavalor_unitario,
        valor_total: lavalor_total
    });
    const { categoria, id_cliente, cantidad, valor_unitario, valor_total } =
        factura;
    const onChange = (e) => {
        setFactura({
            ...factura,
            [e.target.name]: e.target.value,
        });
    };
    const editarFactura = async () => {
        let modificar = idfactura.split("@");
        const idFactura = modificar[0];

        const data = {
            categoria: factura.categoria,
            id_cliente: factura.id_cliente,
            cantidad: factura.cantidad,
            valor_unitario: factura.valor_unitario,
            valor_total: factura.valor_unitario
        };
        const respond = await APIInvoke.invokePUT(`/api/factura/editar/${idFactura}`, data);
        const idfact = respond.msg;//este es el mensaje que pusimos en el controller en este caso el de factura y es en donde dice res.json()

        if (idfact !== "La factura se actualizo correctamente") {
            const msg = "La factura no se pudo crear";
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: msg,
            });
        } else {
            const msg = "La factura se creo exitosamente";
            Swal.fire({
                icon: 'error',
                title: 'Confirmacion',
                text: msg,
            });
            navigate("/factura")
        }
    };
    useEffect(() => {
        document.getElementById("categoria").focus();
    }, []);
    const onSubmit = (e) => {
        e.preventDefault();
        editarFactura();
    };
    return (
        <div className="wrapper">
            <Narbar></Narbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Modificar Facturas"}
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
                                        <h3 className="card-tittle">Modificar Facturas</h3>
                                    </div>
                                    <form onSubmit={onSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="categoria">Categoria:</label>
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
                                                <label htmlFor="txtid_cliente">Cliente</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="id_cliente"
                                                    name="id_cliente"
                                                    value={id_cliente}
                                                    onChange={onChange}
                                                    placeholder="Cliente"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="txtcantidad">Cantidad</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cantidad"
                                                    name="cantidad"
                                                    value={cantidad}
                                                    onChange={onChange}
                                                    placeholder="Cantidad"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="txtvalor_unitario">Valor Unitario</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="valor_unitario"
                                                    name="valor_unitario"
                                                    value={valor_unitario}
                                                    onChange={onChange}
                                                    placeholder="valor_unitario"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="txtvalor_total">Total</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="valor_total"
                                                    name="valor_total"
                                                    value={valor_total}
                                                    onChange={onChange}
                                                    placeholder="valor_total"
                                                    required
                                                />
                                            </div>
                                            <div className="card-footer">
                                                <div className="row">
                                                    <button type="submit">Guardar</button>
                                                    &nbsp;&nbsp;
                                                    <Link to={"/factura"} className="btn btn-sm btn-secondary">Regresar</Link>
                                                </div>
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
export default EditarFactura;