//const mongoose = require('mongoose');

const Clientes = require('../models/Clientes');

exports.clienteAgregar = async (req, res) => {
  const nuevoCliente = new Clientes({
    id: req.body.id,
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    correo: req.body.correo
  })
  nuevoCliente.save()
  res.json({ nuevoCliente });
}

exports.clienteListar = async (req, res) => {
  try {
    const clientes = await Clientes.find();
    res.json({ clientes })
  } catch (error) {
    res.status(400).send("Hubo un error");
  }
}

exports.listarClienteId = async (req, res) => {
  try {
    const clientes = await Clientes.find({ id: req.params.id });
    res.json({ clientes })
  } catch (error) {
    res.status(400).send("Hubo un error");
  }
}


exports.clienteEditar = async (req, res) => {
  await Clientes.findOneAndUpdate(
    { id: req.params.id }
    , {
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
      correo: req.body.correo
    })
  res.json({ msg: "actualizar el registro" })
}

exports.clienteEliminar = async (req, res) => {
  await Clientes.findOneAndDelete(
    { id: req.params.id })
  res.json({ msg: "cliente eliminado " })
}