const express = require('express');
const router = express.Router();

const {
    listarUsuarios,
    criarUsuario
} = require('../controllers/usuariosController');

router.get('/usuarios',
    listarUsuarios
);

router.post('/usuarios',
    criarUsuario
);

module.exports = router;