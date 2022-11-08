const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    id: {type: Number, require: true, unique: true },
    codigo: {type: String,require: true},
    nombre: {type: String, requiere: true},
    id_categoria: {type: Number,requiere: true},
    descripcion: {type: String, requiere: true},
    urlimagen: {type: String},
    valor: {type: Number,requiere: true},
    stock: {type: Number, requiere: true},
    iva: {type: Number},
    estado: {type: Number}
}, {
    versionKey: false
});

const Productos = mongoose.model('productos', ProductoSchema);

module.exports = Productos;