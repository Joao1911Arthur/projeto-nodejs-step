const express = require('express');

const usuarioRoutes = require(
    './routes/produtoRoutes'
);

const app = express();

app.use(express.json());

app.use(usuarioRoutes);

module.exports = app;