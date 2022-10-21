const mongoose = require('mongoose');
const { Schema } = mongoose;

const PedidoSchema = new Schema({
    id: { type: Number, require: true, unique: true },
    idUsuario: { type: Number, require: true },
    productos: { type: Number, require: true },
    cantidadProductos: { type: Number, require: true, unique: true },
    total: { type: Number, require: true },
    estado: { type: String, require: true }
})

const Pedidos = mongoose.model('pedidos', PedidoSchema);

module.exports = Pedidos