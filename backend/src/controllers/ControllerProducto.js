//const mongoose = require('mongoose');

const Productos = require('../models/Productos');

exports.productoAgregar = async (req, res) => {
  const nuevoProducto = new Productos({
    id: req.body.id,
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    id_categoria: req.body.id_categoria,
    descripcion: req.body.descripcion,
    urlimagen: req.body.urlimagen,
    valor: req.body.valor,
    stock: req.body.stock,
    iva: req.body.iva,
    estado: req.body.estado
  })
  nuevoProducto.save()
  res.json({ msg: "El producto fue guardado exitosamente" });
}

exports.productoListar = async (req, res) => {
  try {
    const productos = await Productos.find().sort({id_categoria: 1});
    res.json({ productos })
  } catch (error) {
    res.status(400).send("Hubo un error");
  }
}

exports.listarProductoId = async (req, res) => {
  try {
    const productos = await Productos.find({ id: req.params.id });
    res.json(productos)
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
      id_categoria: req.body.id_categoria,
      descripcion: req.body.descripcion,
      urlimagen: req.body.urlimagen,
      valor: req.body.valor,
      stock: req.body.stock,
      iva: req.body.iva,
      estado: req.body.estado
    })
  res.json({ msg: "El producto se actualizo correctamente" })
}

exports.productoEliminar = async (req, res) => {
  await Productos.findOneAndDelete(
    { id: req.params.id })
  res.json({ msg: "producto eliminado " })
}