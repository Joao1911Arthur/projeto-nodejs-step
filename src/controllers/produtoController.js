const Produto = require('../models/Produtos');

const listarProdutos = async (req, res) => {

    const produtos = await Produto.find();

    res.json(produtos);
};

const procurarProduto = async (req, res) => {

    const id = await req.params.id;
    console.log(id)

    try {
        const produto = await Produto.findById({ _id: id });
        console.log(produto);

        res.status(201).json(produto);
    } catch {
        res.status(404).json({ mensagem: "produto não encotrado" });
    }
}

const atualizarProduto = async (req, res) => {

    const id = await req.params.id;
    const dados = await req.body;

    try {
        const produto = await Produto.findByIdAndUpdate(
            id,
            dados,
            { new: true }
        );
        res.status(201).json({ mensagem: "produto atualizado" }, produto);
    } catch {
        res.status(404).json({ erro: "produto não encontrado" });
    }
}

const deletarProduto = async (req, res) =>{

    const id = await req.params.id;
    
    try{
        const produto = await Produto.findByIdAndDelete(id);
        res.json({mensagem: "produto removido com sucesso"});
    } catch{
        res.status(404).json({erro: "produto não encontrado"});
    }
}

const criarProduto = async (req, res) => {

    const produto = await Produto.create(
        req.body
    )
    res.status(201).json(produto)
}

module.exports = {
    listarProdutos,
    criarProduto,
    procurarProduto,
    atualizarProduto,
    deletarProduto
}