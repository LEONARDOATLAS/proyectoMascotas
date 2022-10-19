const mongoose = require("mongoose");

const CategoriaSchema = mongoose.Schema({
    id: {type: Number, require: true, unique: true},
    codigo: {type: String, require: true},
    nombre: {type: String, require: true},
    estado: {type: Boolean},
    creado: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("categorias", CategoriaSchema)