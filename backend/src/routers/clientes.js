const express = require('express')
const router = express.Router()
const clientController = require("../controllers/ControllerCliente")
const auth = require("../middleware/auth")

router.get("/listar", auth, clientController.clienteListar);
router.post("/save", clientController.clienteAgregar)
router.get("/listar/:id", clientController.listarClienteId)
router.post("/editar/:id", clientController.clienteEditar)
router.delete("/eliminar/:id", clientController.clienteEliminar)


//consulta sin autenticacion 
router.get("/listarHome", clientController.clienteListar);

module.exports = router