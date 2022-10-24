const express = require('express');
const router = express.Router();
const productController = require("../controllers/ControllerProducto");

router.get("/listar", productController.productoListar);
router.post("/save", productController.productoAgregar)
router.get("/listar/:id", productController.listarProductoId)
router.post("/editar/:id", productController.productoEditar)
router.post("/eliminar/:id", productController.productoEliminar)


// rutas de consultas 
const con_categorias_productos = require("../controllers/consultas/controllerProductosCategoria")
router.get("/productoscategorias", con_categorias_productos)
router.get("/productoscategorias/:id", con_categorias_productos)


module.exports = router