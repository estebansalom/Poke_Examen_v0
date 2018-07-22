'use strict';
const tipoModel = require('./tipos.model');

module.exports.registrar_tipo = function (req, res) {
    let nuevoTipo = new tipoModel({
        nombre_tipo: req.body.nombre_tipo,
        foto_tipo: req.body.foto_tipo,
    });
    nuevoTipo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: 'El tipo no pudo ser registrado: ' + error
            });
        } else {
            res.json({
                success: true,
                msg: 'El tipo ha sido registrado correctamente ' + error
            });
        }
    });
};