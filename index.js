const express = require("express");

const app = express();
app.use(express.json());

let usuarios = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" },
    { id: 3, nome: "Pedro", email: "pedro@email.com" }
];

app.get("/", (req, res) =>{
    res.send("API Funcionando");
});

app.get("/usuarios", (req, res) =>{
    res.json(usuarios);
});

app.post("/usuarios", (req, res) =>{
    let novoUsuario = req.body;
    usuarios.push(novoUsuario);
    if (!novoUsuario.id || !novoUsuario.nome || !novoUsuario.email) {
        return res.status(400).json({ error: "ID, nome e email são obrigatórios" });
    }
    res.status(201).json({
        message: "Usuário criado com sucesso",
        usuario: novoUsuario
    });
});

app.delete("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id);
    usuarios = usuarios.filter(usuario => usuario.id !== id);
    res.status(204).json({ message: "Usuário deletado com sucesso" });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});