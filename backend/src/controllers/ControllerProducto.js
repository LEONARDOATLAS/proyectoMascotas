const mongoose = require('mongoose');

const Productos = require('../models/Productos');

function saveProducto(req, res) {
  const myProducto = new Productos(req.body);
  myProducto.save((err, result) => {
    if (err) {
      res.status(500).send({
        message: "Error al momento de ejecutar la solicitud"
      })
    } else {
      res.status(200).send({
        message: "Producto guardado con éxito!",
        result
      });
    }
  });
}


function buscarProducto(req, res) {
  const idproducto = req.params.id;
  Productos.findById(idproducto).exec((err, result) => {
    if (err) {
      if (!result) {
        res.status(404).send({
          message: "El registro a buscar no se encuentra disponible",
          err
        });
      } else {
        res.status(500).send({
          message: "Error al momento de ejecutar la solicitud"
        });
      }
    } else {
      res.status(200).send({
        result
      });
    }
  });
}


function listarProductos(req, res) {
  const idProductos = req.params.id;
  let result;
  if (!idProductos) {
    result = Productos.find({}).sort("categoria");
  } else {
    result = Productos.find({
      _id: idProductos
    }).sort("categoria");
  }
  result.exec(function (err, result) {
    if (err) {
      if (!result) {
        res.status(404).send({
          message: "El registro a buscar no se encuentra disponible"
        });
      } else {
        res.status(500).send({
          message: "Error al momento de ejecutar la solicitud"
        });
      }
    } else {
      res.status(200).send(result);
    }
  });
}

function updateProductos(req, res) {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    Productos.findOneAndUpdate({
        _id: id
      }, req.body, {
        new: true
      },
      function (err, producto) {
        if (!producto) {
          res.status(404).send({
            message: "El id del producto no existe"
          })
        } else if (err) {
          res.status(500).send({
            message: "Error al actualizar producto",
            error: err.message
          })
        } else {
          res.status(200).send({
            message: "Producto actualizado con éxito",
            producto
          });
        }
      })
  } catch (err) {
    res.status(500).send({
      message: "Error al actualizar producto",
      error: err.message
    })
  }
}

function deleteProductos(req, res) {
  const idProductos = req.params.id;
  Productos.findByIdAndRemove(idProductos, function (err, producto) {
    if (!producto) {
      return res.status(404).json({
        message: "No existe el producto",
      });
    }
    if (err) {
      return res.status(500).json({
        message: "Error al eliminar el producto"
      });
    }
    return res.status(200).json({
      message: "Producto eliminado con éxito!",
      producto
    });
  });
}

module.exports = {
  saveProducto,
  buscarProducto,
  listarProductos,
  updateProductos,
  deleteProductos,
}