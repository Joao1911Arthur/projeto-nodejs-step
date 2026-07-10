const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    idade:{
        type: Number
    },
    senha:{
        type: String,
        required: true
    }
});

const Usuarios = mongoose.model(
    "Usuarios",
    usuariosSchema
);

module.exports = Usuarios;