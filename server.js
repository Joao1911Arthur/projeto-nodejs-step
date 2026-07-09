require('dotenv').config();

const app = require('./app')

const conectarBanco = require('./src/database/database')

conectarBanco()

app.listen(process.env.PORT, () =>{
    console.log("Server Rodando");
})