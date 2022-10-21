//const mongoose = require('mongoose');

const Pedidos = require('../models/Pedidos');

exports.pedidoAgregar = async (req, res) => {
    const nuevoPedido = new Pedidos({
        id: req.body.id,
        idUsuario: req.body.idUsuario,
        productos: req.body.productos,
        cantidadProductos: req.body.cantidadProductos,
        total: req.body.total,
        estado: req.params.estado
    })
    nuevoPedido.save()
    res.json({ nuevoPedido });
}

exports.pedidoListar = async (req, res) => {
    try {
        const pedidos = await Pedidos.find();
        res.json({ pedidos })
    } catch (error) {
        res.status(400).send("Hubo un error");
    }
}

exports.listarPedidoId = async (req, res) => {
    try {
        const pedidos = await Pedidos.find({ id: req.params.id });
        res.json({ pedidos })
    } catch (error) {
        res.status(400).send("Hubo un error");
    }
}


exports.pedidoEditar = async (req, res) => {
    await Pedidos.findOneAndUpdate(
        { id: req.params.id }
        , {
            codigo: req.body.codigo,
            nombre: req.body.nombre,
            categoria: req.body.categoria,
            descripcion: req.body.descripcion,
            valor: req.body.valor,
            iva: req.body.iva,
            estado: req.body.estado
        })
    res.json({ msg: "actualizar el registro" })
}

exports.pedidoEliminar = async (req, res) => {
    await Pedidos.findOneAndDelete(
        { id: req.params.id })
    res.json({ msg: "Pedido eliminado " })
}