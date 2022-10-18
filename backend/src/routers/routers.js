const express = require('express');
const router = express.Router();

const routerProductos = require("./productos")

router.use("/productos", routerProductos)


module.exports = router