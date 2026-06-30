const express = require('express');
const controller = require('../controllers/usuariosController');

const router = express.Router();

router.post('/usuarios', controller.create);
router.get('/usuarios', controller.read);
router.get('/usuarios/:id', controller.readById);
router.put('/usuarios/:id', controller.update);
router.delete('/usuarios/:id', controller.delete);

module.exports = router;
