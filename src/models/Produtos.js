const mongoose = require('mongoose');

const ProdutosSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    estoque: {
        type: Number
    },
    descrição: {
        type: String
    }

});

const Produtos = mongoose.model(
    "Produtos",
    ProdutosSchema
)

module.exports = Produtos;