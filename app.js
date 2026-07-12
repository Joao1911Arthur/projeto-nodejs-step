const express = require('express');

const produtoRouter = require('./src/routes/produtoRoutes');
const authRouter = require('./src/routes/authRoutes');


const app = express();

app.use(express.json());

app.use(produtoRouter);
app.use(authRouter);

module.exports = app;