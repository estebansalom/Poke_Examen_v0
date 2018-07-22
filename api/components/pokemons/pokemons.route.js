'use strict';
const express = require('express');
const router = express.Router();
const pokemonsApi = require('./pokemons.api');

router.route('/registrar_pokemon')
    .post(function (req, res) {
        pokemonsApi.registrar_pokemon(req, res);
    });

router.route('/listar_pokemon')
    .get(function (req, res) {
        carrerasApi.listar_pokemones(req, res);
    });
module.exports = router;