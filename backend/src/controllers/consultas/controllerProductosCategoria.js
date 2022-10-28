const express = require('express');
const router = express.Router();
const modeloCategoria = require('../../models/Categoria');
const modeloProducto = require('../../models/Productos');
const conexion = require('../../db/connection')

router.get('/productoscategorias', (req, res) =>{
    modeloCategoria.aggregate([{ 
        $lookup:
            {
            from: 'productos',
            localField: 'id',
            foreignField: 'id_categoria',
            as: "productoxcategoria",
        },
    }, {$unwind: "$productoxcategoria"}
    ])
        .then((result)=>{res.send(result)})
        .catch((error)=>{res.send(error)});

})


router.get('/productoscategorias/:id', (req, res) => {
    //CONSULTA CON METODOS JAVASCRIPT Y MONGODB FILTRANDO POR ALGUN CAMPO DE LA COLECCION
    var dataCategorias = [];
    //modeloCategoria.find({ nombre: "Comestibles" }).then(data => {
    modeloCategoria.find({id:req.params.id}).then(data => {
            //console.log("Categoria:")
            data.map((d, k) => {dataCategorias.push(d.id);})
            modeloProducto.find({ id_categoria: { $in: dataCategorias } })
                .then(data => {
                    //console.log("Productos de la categoria:")
                    res.send(data);
                })
                .catch(error => {
                    console.log(error); 
                    res.send(error);
                })
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        })
    })


module.exports = router;
