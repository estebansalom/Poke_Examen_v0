'use strict'
let mongoose = require('mongoose');

let entrenadorSchema = new mongoose.Schema({
    foto_entrenador: { type: String, required: true},
    nombre_entrenador: { type: String, unique: true, required: true },
    codigo_entrenador: { type: String, unique: true, required: true },
    edad_entrenador: {type: String, required: true },
    sexo_entrenador: {type: String, required: true }
});


module.exports = mongoose.model('Entrenadores', entrenadorSchema);