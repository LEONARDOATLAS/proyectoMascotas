const mongoose = require("mongoose");

const ClienteSchema = mongoose.Schema({
    id: {type: Number, require: true, unique: true},
    nombre: {type: String, require: true},
    direccion: {type: String, require: true},
    telefono: {type: Number, require: true},
    correo: {type: String, require: true}
});

module.exports = mongoose.model("clientes", ClienteSchema)