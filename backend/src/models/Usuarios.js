const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
    
    nombre: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    creado: { type: Date, default: Date.now() },
});

const Usuarios = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuarios;
