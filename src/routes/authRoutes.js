const express = require('express');
const router = express.Router();

const {login, registrarUsuario} = require('../controllers/authController')
const {listarUsuarios, me} = require('../controllers/usuariosController')
const autenticar = require('../middlewares/autenticar')
const admin = require('../middlewares/admin')

router.get('/usuarios', autenticar, admin, listarUsuarios);
router.get('/me', autenticar, me);
router.post('/login', login);
router.post('/registrar', registrarUsuario);

module.exports = router