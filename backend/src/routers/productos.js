const express = require('express');
const router = express.Router();
const productController = require("../controllers/ControllerProducto");
const auth = require("../middleware/auth")


const controllerprofesor = require('../controllers/ControllerProfesor');
router.get("/listardos", controllerprofesor)

router.get("/listar", auth, productController.productoListar);
router.post("/save", productController.productoAgregar)
router.get("/listar/:id", productController.listarProductoId)
router.put("/editar/:id", productController.productoEditar)
router.delete("/delete/:id", productController.productoEliminar)


// rutas de consultas 
const con_categorias_productos = require("../controllers/consultas/controllerProductosCategoria")
router.get("/productoscategorias", con_categorias_productos)
router.get("/productoscategorias/:id", con_categorias_productos)

module.exports = router