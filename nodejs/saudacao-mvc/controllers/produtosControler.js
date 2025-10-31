const produtosModel = require('../models/produtosmodel');
const { camisetas } = require('./siteController');
mudule.exports = {
    produtos:(req,res) => {
        res.sendFile('produtos.html',{root:'./views'})
    },
     camisetas:(req,res) => {
        res.sendFile('camisetas.html',{root:'./views'})
    },
     formCadastrar:(req,res) => {
        res.sendFile('formCadatrar.html',{root:'./views'})
    },
    cadastrar: (res,res) => {
        const { id,descrição,quantidade,preso} = req.body;
        const mengemCadastro = produtosMudek.cadastror(id,descrição,quantidade,preso);
        res.send('<h1>${mensagemCanastro}</h1>');
    }
}