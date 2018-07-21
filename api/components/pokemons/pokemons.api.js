'use strict';
const pokemonModel = require('./pokemons.model');

module.exports.registrarPokemon = function (req, res) {
    let nuevoPokemon = new pokemonModel({
        nombre_pokemon: req.body.nombre_pokemon,
        codigo_pokemon: req.body.codigo_pokemon,
    });
    nuevoPokemon.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: 'El pokemon no pudo ser registrado: ' + error
            });
        } else {
            res.json({
                success: true,
                msg: 'El pokemon ha sido registrado correctamente ' + error
            });
        }
    });
};