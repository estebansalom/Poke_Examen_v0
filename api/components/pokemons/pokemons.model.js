'use strict'
let mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
    foto_pokemon: { type: String, required: true},
    nombre_pokemon: { type: String, unique: true, required: true },
    codigo_pokemon: { type: String, unique: true, required: true },
});


module.exports = mongoose.model('Pokemons', pokemonSchema);