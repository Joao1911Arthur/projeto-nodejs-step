const express = require('express');
const router = express.Router();

const {
    listarProdutos,
    criarProduto
} = require('../controllers/produtoController');
const autenticar = require('../middlewares/autenticar')
const admin = require('../middlewares/admin')

router.get('/produtos',
    autenticar,
    admin,
    listarProdutos
);

router.post('/produtos',
    autenticar,
    criarProduto
);

module.exports = router;