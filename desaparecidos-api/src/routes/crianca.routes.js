const express = require('express');
const router = express.Router();
const controller = require('../controller/crianca.controller');

// Rota 1 - Listar todas
router.get('/', controller.getTodasCriancas);

// Rota 2 - Buscar uma criança por ID
router.get('/:id', controller.getCriancasPorId);

//Rota 3 - Mostrar estatísticas
router.get ('/estatisticas/info', controller.getEstatistica);

module.exports = router;
