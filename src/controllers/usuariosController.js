const Usuario = require('../models/Usuarios');

const listarUsuarios = async (req, res) => {

    const usuarios = await Usuario.find();
    res.json(usuarios);

};

const criarUsuario = async (req, res) => {

    const usuario = await Usuario.create(req.body)
    res(201).json(usuario)

};

module.exports = {
    listarUsuarios,
    criarUsuario
};