const express = require('express');
const router = express.Router();

const {
    listarUsuarios,
    criarUsuario,
    atualizarUsuario,
    excluirUsuario
} = require('../controllers/userController');

router.get('/', listarUsuarios);
router.post('/', criarUsuario);
router.put('/:id', atualizarUsuario);
router.delete('/:id', excluirUsuario);

module.exports = router;