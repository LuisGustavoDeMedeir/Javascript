const usuariosModel = require('../models/usuariosModel');

module.exports = {
    listarUsuarios: (req, res) => {
        res.sendFile('usuarios.html', { root: 'views' });
    },
    formulario: (req, res) => {
        res.sendFile('formulario.html', { root: 'views' });
    },
    login: (req, res) => {
        const { login, senha } = req.body;
        const mensagem = usuariosModel.gerarMensagemLogin(login, senha);
        res.send('<h1>${mensagemLogin}</h1>');
    }
};



