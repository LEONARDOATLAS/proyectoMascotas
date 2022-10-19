const express = require('express')
const router = express.Router()
const categoriaController = require("../controllers/controllerCategoria")

router.get("/listar", categoriaController.categoriaListar);
router.post("/save", categoriaController.categoriaAgregar)
router.get("/:id", categoriaController.listarCategoriaId)
router.post("/editar/:id", categoriaController.categoriaEditar)
router.post("/eliminar/:id", categoriaController.categoriaEliminar)


module.exports = router