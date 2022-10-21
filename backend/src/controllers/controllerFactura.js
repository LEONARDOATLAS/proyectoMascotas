const Factura = require('../models/Factura');

exports.facturaAgregar = async (req, res) => {
    const nuevaFactura = new Factura ({
        id: req.body.id,
        categoria: req.body.codigo,
        id_cliente:req.body.id_cliente,
        cantidad:req.body.cantidad,
        valor_unitario:req.body.valor_unitario,
        valor_total:req.body.valor_total
    })
    nuevaFactura.save()
    res.json({nuevaFactura});
}

exports.facturaListar = async (req, res) =>{
    try{
        const factura = await Factura.find();
        res.json({factura})
    } catch (error){
        res.status(400).send("hubo un error");
    }
}

exports.listarFacturaId = async (req, res) => {
    try {
      const factura = await Factura.find({id:req.params.id});
    res.json({factura})
    } catch (error) {
      res.status(400).send("Hubo un error");
    }
  }

exports.facturaEditar = async (req, res) => {
    await Factura.findOneAndUpdate(
        {id: req.params.id},
        {
            id: req.body.id,
            categoria: req.body.codigo,
            id_cliente:req.body.id_cliente,
            cantidad:req.body.cantidad,
            valor_unitario:req.body.valor_unitario,
            valor_total:req.body.valor_total
        })
        res.json({msg:"actualizar el registro"})
}

exports.facturaEliminar = async (req, res) => {
    await Factura.findOneAndDelete(
      {id:req.params.id})
      res.json({msg: "factura eliminada"})
}