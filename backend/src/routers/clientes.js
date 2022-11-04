const express = require('express')
const router = express.Router()
const clientController = require("../controllers/ControllerCliente")

router.get("/listar", clientController.clienteListar);
router.post("/save", clientController.clienteAgregar)
router.get("/listar/:id", clientController.listarClienteId)
router.post("/editar/:id", clientController.clienteEditar)
router.delete("/eliminar/:id", clientController.clienteEliminar)


module.exports = router