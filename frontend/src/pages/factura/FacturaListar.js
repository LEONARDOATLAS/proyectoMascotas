import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import ContentHeader from '../../components/ContentHeard';
import Footer from '../../components/Footer';
import Narbar from '../../components/Narvar';
import SidebarContainer from '../../components/SidebarContainer';

import APIInvoke from "../../utils/APIInvoke";

const FacturaListar = () => {

    const [dataFactura, setdataFactura] = useState([]);

    const listaFacturali = async () => {
        const response = await APIInvoke.invokeGET(`/api/factura/listar`);
        setdataFactura(response.factura);
    };

    const eliminarFactura = async (e, idFactura) => {
        e.preventDefault();

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Esta seguro de eliminar esta factura',
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
                    'Se ha eliminado la factura seleccionada.',
                    'exitoso'
                )
                APIInvoke.invokeDELETE(`/api/factura/eliminar/${idFactura}`);
                listaFacturali()
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'No se elimino la factura'
                )
            }
        })
    };
    //Refrescar la pagina 
    useEffect(() => {
        listaFacturali();
    }, []);

    return (
        <div className="wrapper">
            <Narbar></Narbar>
            <SidebarContainer></SidebarContainer>

            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Lista de facturas"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Agregar"}
                    ruta={"/"}
                />


                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <Link
                                    to={"/facturaagregar"}
                                    type="button"
                                    className="btn btn-block btn-primary btn-sm"
                                >
                                    Agregar Nueva
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
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ width: "2%" }}>#</th>
                                        <th style={{ width: "4%" }}>Id</th>
                                        <th style={{ width: "15%" }}>Categoria</th>
                                        <th style={{ width: "25%" }}>Cliente</th>
                                        <th style={{ width: "25%" }}>Cantidad</th>
                                        <th style={{ width: "6%" }}>Valor Individual</th>
                                        <th style={{ width: "15%" }}>Valor Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataFactura.map((item, index) => (
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.categoria}</td>
                                            <td>{item.id_cliente}</td>
                                            <td>{item.cantidad}</td>
                                            <td>{item.valor_unitario}</td>
                                            <td>{item.valor_total}</td>
                                            <td>
                                                <Link
                                                    to={`/facturaeditar/${item.id}@${item.categoria}@${item.id_cliente}@${item.cantidad}@${item.valor_unitario}@${item.valor_total}`}
                                                    className="btn btn-sm btn-primary"
                                                >
                                                    Editar
                                                </Link>
                                                &nbsp;&nbsp;
                                                <button
                                                    onClick={(e) => eliminarFactura(e, item.id)}
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

export default FacturaListar;