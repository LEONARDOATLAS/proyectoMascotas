const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/tiendaMascotas")

const myConnection = mongoose.connection;

myConnection.on('connected', () => {
    console.log('Conexión exitosa a la db!')
});

myConnection.on('error', () => {
    console.log('Error en la conexión con MongoDB')
});

module.exports = mongoose