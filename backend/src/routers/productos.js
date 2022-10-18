const express = require('express')
const router = express.Router()
const productos_controller = require('../controllers/ControllerProducto')

router.post('/save', productos_controller.saveProducto)
router.get('/buscar/:id', productos_controller.buscarProducto)
router.get('/listar/:id?', productos_controller.listarProductos)
router.put('/update/:id', productos_controller.updateProductos)
router.delete('/delete/:id', productos_controller.deleteProductos)

module.exports = router