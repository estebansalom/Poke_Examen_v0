'use strict';
const express = require('express');
const router = express.Router();
const entrenadoresApi = require('./entrenadores.api');

router.route('/registrar_entrenador')
    .post(function (req, res) {
        entrenadoresApi.registrar_entrenador(req, res);
    });
    
router.route('/listar_entrenador')
    .get(function (req, res) {
        entrenadoresApi.listar_entrenador(req, res);
    });
module.exports = router;