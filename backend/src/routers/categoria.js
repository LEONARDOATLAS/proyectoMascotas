const express = require('express')
const router = express.Router()
const categoriaController = require("../controllers/controllerCategoria")

router.get("/listar", categoriaController.categoriaListar);
router.post("/save", categoriaController.categoriaAgregar)
router.get("/listar/:id", categoriaController.listarCategoriaId)
router.put("/editar/:id", categoriaController.categoriaEditar)
router.delete("/eliminar/:id", categoriaController.categoriaEliminar)


module.exports = router