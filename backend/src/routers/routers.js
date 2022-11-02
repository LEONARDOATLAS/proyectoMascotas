const express = require('express');
const router = express.Router();

const routerAuth = require("./auth");
const routerUsuarios = require("./usuario")
const routerProductos = require("./productos")
const routerCategoria = require("./categoria")
const routerClientes = require("./clientes")
const routerPedidos = require("./pedidos")
const routerFactura =require("./factura")

router.use("/auth", routerAuth);
router.use("/usuarios", routerUsuarios)
router.use("/productos", routerProductos);
router.use("/categoria", routerCategoria);
router.use("/clientes", routerClientes);
router.use("/pedidos", routerPedidos);
router.use("/factura", routerFactura);


module.exports = router