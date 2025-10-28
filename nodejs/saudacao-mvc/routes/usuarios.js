const express = require('express');
const router = express.Router();
const usuariosControler = require('../controllers/usuariosControler');

router.get("/", usuariosControler.formCadastro);
router.post("/cadastrar", usuariosControler.cadastrarUsuario);

module.exports = router;