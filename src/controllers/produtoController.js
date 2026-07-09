const Produto = require('../models/Produtos');

const listarProdutos = async (req, res) => {

  const produtos = await Usuario.find();

  res.json(produtos);
};

const criarProduto = async (req, res) =>{

    const produto = await Usuario.creat(
        req.body
    )

    res.status(201).jsaon(produto)

}

module.exports = {
    listarProdutos,
    criarProduto
}