const express = require('express');
const router = express.Router();

const {
    listarProdutos,
    criarProduto
} = require('../controllers/produtoController');
const autenticar = require('../middlewares/autenticar')

router.get('/produtos',
    listarProdutos
);

router.post('/produtos',
    autenticar,
    criarProduto
);

module.exports = router;