const express = require('express')
const router = express.Router()
const productController = require("../controllers/ControllerProducto")

router.get("/listar", productController.productoListar);
router.post("/save", productController.productoAgregar)
router.get("/:id", productController.listarProductoId)
router.post("/editar/:id", productController.productoEditar)
router.post("/eliminar/:id", productController.productoEliminar)


module.exports = router