const express = require('express');
const router = express.Router();

const PerfilController = require('../controllers/PerfilController');

//privado
router.post('/add', PerfilController.add);

module.exports = router;