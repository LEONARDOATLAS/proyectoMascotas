const mongoose = require('mongoose');
const modeloCategoria = require('../models/Categoria')
const modeloProducto = require('../models/Productos')
const conexion = require('../db/connection');

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
    .then((result)=>{console.log(result)})
    .catch((error)=>{console.log(error)})
