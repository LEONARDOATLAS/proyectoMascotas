const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController")
const { check } = require("express-validator");

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("email", "AGrega el correo valido").isEmail(),
        check("password", "el passwoed deber ser minimo de 6 caracteres ").isLength({min:6,}),
    ],
    usuarioController.crearUsuario
    );

module.exports = router;