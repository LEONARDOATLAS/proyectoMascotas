const mongoose = require("mongoose");
const FacturaSchema = mongoose.Schema({
    id: {type: Number, require: true},
    categoria:{type: String},
    id_cliente:{type:Number, require: true},
    cantidad:{type:Number, require: true},
    valor_unitario:{type:Number},
    valor_total:{type:Number}
})

module.exports = mongoose.model("facturas", FacturaSchema)