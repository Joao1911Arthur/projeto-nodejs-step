const Usuarios = require('../models/Usuarios');

const listarUsuarios = async (req, res) => {

    const usuarios = await Usuarios.find();
    res.json(usuarios);

};

const me = async (req, res) => {

    const id = req.usuario.id;
    console.log("1",id)

    const usuario = await Usuarios.findById({_id: id});
    console.log(usuario)

    res.status(201).json(usuario);

};

module.exports = {
    listarUsuarios,
    me
};