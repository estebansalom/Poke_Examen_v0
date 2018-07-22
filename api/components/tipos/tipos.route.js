'use strict';
const express = require('express');
const router = express.Router();
const tiposApi = require('./tipos.api');
 
router.route('/registrar_tipo')
    .post(function (req, res) {
        tiposApi.registrar_tipo(req, res);
    });
