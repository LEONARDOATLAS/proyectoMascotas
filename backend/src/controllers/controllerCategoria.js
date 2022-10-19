
const Categoria = require('../models/Categoria');

exports.categoriaAgregar = async (req, res) => {

  try {
 
      const nuevactegoria = new Categoria({
        id: req.body.id, 
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        estado: req.body.estado
    })
    nuevactegoria.save()
    res.json({nuevactegoria});  

  } catch (error) {
    console.log(error)
    res.status(400).send("Hubo un error con los datos");    
  }
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
    const categoria = await Categoria.find({id:req.params.id});
  res.json({categoria})
  } catch (error) {
    res.status(400).send("Hubo un error");
  }
}


exports.categoriaEditar = async (req, res) => {
   await Categoria.findOneAndUpdate(
      {id:req.params.id}
      ,{
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        estado: req.body.estado
      })
      res.json({msg: "actualizar el registro"})
}
exports.categoriaEliminar = async (req, res) => {
    await Categoria.findOneAndDelete(
      {id:req.params.id})
      res.json({msg: "producto eliminado "})
}