const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Usuarios = require('../models/Usuarios');

const JWT_SECRET = process.env.JWT_SECRET || "segredo";

const registrarUsuario = async (req, res) => {

    const { nome, email, idade, senha, cargo } = await req.body;

    const existe = await Usuarios.findOne({email});

    if (existe) {
        return res.status(400).json({ erro: "Email já cadastrado", })
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const usuario = await Usuarios.create({
        nome,
        email,
        idade,
        cargo,
        senha: senhaHash,
    });

    const token = await jwt.sign(
        { id: usuario._id, email: usuario.email, cargo: usuario.cargo },
        JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.status(201).json({ mensagem: 'Usuario resgistrado', token, });

}

const login = async (req, res) => {

    const { email, senha } = await req.body;

    const usuario = await Usuarios.findOne({ email });

    if (!usuario) {
        return res.status(401).json({
            erro: "Email ou senha inválidos",
        });
    }

    const senhaValida = await bcrypt.compare(
        senha,
        usuario.senha
    );

    if (!senhaValida) {
        res.status(401).json({ error: "senha incorreta" });
    }

    const token = await jwt.sign({ id: usuario._id, email: usuario.email, cargo: usuario.cargo }, JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({ mensagem: "Logado com sucesso", token});

}

module.exports = {
    registrarUsuario,
    login
};

