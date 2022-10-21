//const mongoose = require('mongoose');

const Productos = require('../models/Productos');

exports.productoAgregar = async (req, res) => {
  const nuevoProducto = new Productos({
    id: req.body.id,
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    categoria: req.body.categoria,
    descripcion: req.body.descripcion,
    valor: req.body.valor,
    stock: req.body.stock,
    iva: req.body.iva,
    estado: req.body.estado
  })
  nuevoProducto.save()
  res.json({ nuevoProducto });
}

exports.productoListar = async (req, res) => {
  try {
    const productos = await Productos.find();
    res.json({ productos })
  } catch (error) {
    res.status(400).send("Hubo un error");
  }
}

exports.listarProductoId = async (req, res) => {
  try {
    const productos = await Productos.find({ id: req.params.id });
    res.json({ productos })
  } catch (error) {
    res.status(400).send("Hubo un error");
  }
}


exports.productoEditar = async (req, res) => {
  await Productos.findOneAndUpdate(
    { id: req.params.id }
    , {
      codigo: req.body.codigo,
      nombre: req.body.nombre,
      categoria: req.body.categoria,
      descripcion: req.body.descripcion,
      valor: req.body.valor,
      stock: req.body.stock,
      iva: req.body.iva,
      estado: req.body.estado
    })
  res.json({ msg: "actualizar el registro" })
}

exports.productoEliminar = async (req, res) => {
  await Productos.findOneAndDelete(
    { id: req.params.id })
  res.json({ msg: "producto eliminado " })
}