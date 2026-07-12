const express = require('express');

const produtoRouter = require('./src/routes/produtoRoutes');
const authRouter = require('./src/routes/authRoutes');


const app = express();

app.get("/", (req, res) => {
    res.json({
        mensagem: "API do Projeto Final funcionando!",
        versao: "1.0.0",
        endpoints: {
            produtos: {
                listar: "GET /produtos",
                obter: "GET /produtos/:id",
                criar: "POST /produtos",
                atualizar: "PUT /produtos/:id",
                deletar: "DELETE /produtos/:id",
            },
            autenticacao: {
                registrar: "POST /registrar",
                login: "POST /login",
                perfil: "GET /me",
            },
        },
    });
});

app.use(express.json());

app.use(produtoRouter);
app.use(authRouter);

module.exports = app;