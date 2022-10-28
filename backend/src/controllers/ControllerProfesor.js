const express = require('express');
const router = express.Router();

const Productos = require('../models/Productos');

router.get('/listardos', (req, res) => {
    Productos.find({}, function(docs, err)
    {
        if(!err)
        {
            res.send(docs)
        }
        else
        {
            res.send(err)
        }
    })
})


module.exports = router