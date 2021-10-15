const express = require('express');
const router = express.Router();
const usuarioRouter = require('./usuario');
const perfilRouter = require('./perfil')

router.use('/usuario', usuarioRouter);
router.use('/perfil', perfilRouter);

module.exports = router;