'use strict'
let mongoose = require('mongoose');

let tipoSchema = new mongoose.Schema({
    nombre_tipo: { type: String, unique: true, required: true },
    foto_tipo  : {type : String},
});


module.exports = mongoose.model('Pokemon', tipoSchema);