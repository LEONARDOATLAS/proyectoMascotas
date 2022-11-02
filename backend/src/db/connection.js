const mongoose = require('mongoose')
require("dotenv").config({path: "variables.env"});

const conectarBD = async() => {
    try { await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Base de datos Conectada....")
    } catch (error) {
        console.log(error)
        process.exit(1);  
    }
};

module.exports = conectarBD;
