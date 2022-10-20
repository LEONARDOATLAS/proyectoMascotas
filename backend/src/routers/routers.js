const express = require('express');
const router = express.Router();

const routerProductos = require("./productos")
const routerCategoria = require("./categoria")
const routerClientes = require("./clientes")

router.use("/productos", routerProductos);
router.use("/categoria", routerCategoria);
router.use("/clientes", routerClientes);


module.exports = router