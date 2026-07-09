const express = require('express');
const usuarioRouter = require('./src/routes/usuariosRoutes');
const produtoRouter = require('./src/routes/produtoRoutes');

const app = express();

app.use(express.json());

app.use(usuarioRouter);
app.use(produtoRouter);

module.exports = app;