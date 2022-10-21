const express = require('express')
const router = express.Router()
const pedidoController = require("../controllers/controllerPedidos")

router.get("/listar", pedidoController.pedidoListar);
router.post("/save", pedidoController.pedidoAgregar)
router.get("/listar/:id", pedidoController.listarPedidoId)
router.post("/editar/:id", pedidoController.pedidoEditar)
router.post("/eliminar/:id", pedidoController.pedidoEliminar)


module.exports = router