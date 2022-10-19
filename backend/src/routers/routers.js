const express = require('express');
const router = express.Router();

const routerProductos = require("./productos")
const routerCategoria = require("./categoria")

router.use("/productos", routerProductos);
router.use("/categoria", routerCategoria)


module.exports = router