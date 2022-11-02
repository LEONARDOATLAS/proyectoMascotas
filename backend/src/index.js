const express = require('express')
const app = express()

const conectarBD = require('./db/connection')
conectarBD()

var cors = require('cors');
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))


const PORT = process.env.PORT || 5000;

//Se añaden los endpoints
const router = require('./routers/routers')
app.use('/api', router)


app.listen(PORT, () => {
    console.log(`El servidor esta Funcionando en el ${PORT}`);
});

app.get("/", (request, res) => {
    res.send("<h1>Prueba Servidor OK!!!")
})