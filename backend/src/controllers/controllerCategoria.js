
const Categoria = require('../models/Categoria');

exports.categoriaAgregar = async (req, res) => {
  const nuevactegoria = new Categoria({
      codigo: req.body.codigo,
      nombre: req.body.nombre,
      estado: req.body.estado
  })
  nuevactegoria.save()
    res.json({nuevactegoria});
}

exports.categoriaListar = async (req, res) => {
  try {
    const categoria = await Categoria.find();
    res.json({categoria})
  } catch (error) {
        res.status(400).send("Hubo un error");
  }
}

exports.listarCategoriaId = async (req, res) => {
  try {
    const categoria = await Categoria.find({_id:req.params.id});
  res.json({categoria})
  } catch (error) {
    res.status(400).send("Hubo un error");
  }
}


exports.categoriaEditar = async (req, res) => {
   await Categoria.findOneAndUpdate(
      {_id:req.params.id}
      ,{
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        estado: req.body.estado
      })
      res.json({msg: "actualizar el registro"})
}

exports.categoriaEliminar = async (req, res) => {
    await Categoria.findOneAndDelete(
      {_id:req.params.id})
      res.json({msg: "producto eliminado "})
}