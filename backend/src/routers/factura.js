const express = require('express')
const router = express.Router()
const facturaController = require("../controllers/ControllerFactura")

router.get("/listar",facturaController.facturaListar);
router.post("/save", facturaController.facturaAgregar);
router.get("/listar/:id", facturaController.listarFacturaId);
router.put("/editar/:id", facturaController.facturaEditar);
router.delete("/eliminar/:id", facturaController.facturaEliminar);

module.exports= router