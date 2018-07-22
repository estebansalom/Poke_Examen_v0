'use strict';
const pokemonModel = require('./pokemons.model');

module.exports.registrar_pokemon = function (req, res) {
    let nuevoPokemon = new pokemonModel({
        foto_pokemon: req.body.foto_pokemon,
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

module.exports.listar_pokemones = function (req, res)
{
    pokemonModel.find().sort({ nombre_pokemon: 'asc' }).then(
        function (Pokemons)
        {
            res.send(Pokemons);
        }
    );
};