const express = require('express')
const app = express()

const connection = require('./db/connection')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

//Se añaden los endpoints
const router = require('./routers/routers')
app.use('/api', router)

app.listen(5000, function () {
    console.log('Prueba - Servidor OK!')
})

app.get("/", (request, res) => {
    res.send("<h1>Prueba Servidor OK!!!")
})