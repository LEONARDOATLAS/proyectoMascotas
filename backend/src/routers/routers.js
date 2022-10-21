const express = require('express');
const router = express.Router();

const routerProductos = require("./productos")
const routerCategoria = require("./categoria")
const routerClientes = require("./clientes")
const routerPedidos = require("./pedidos")


router.use("/productos", routerProductos);
router.use("/categoria", routerCategoria);
router.use("/clientes", routerClientes);;
router.use("/pedidos", routerPedidos);

module.exports = router