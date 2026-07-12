const express = require('express');
const router = express.Router();

const {listarProdutos, criarProduto, procurarProduto, atualizarProduto, deletarProduto} = require('../controllers/produtoController');
const autenticar = require('../middlewares/autenticar')
const admin = require('../middlewares/admin')


router.get('/produtos',listarProdutos);
router.get('/produtos/:id', procurarProduto);
router.put('/produtos/:id', autenticar, admin, atualizarProduto);
router.delete('/produtos/:id', autenticar, admin, deletarProduto);
router.post('/produtos', autenticar, admin, criarProduto);

module.exports = router;