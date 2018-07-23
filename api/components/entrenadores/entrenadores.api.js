'use strict';
const entrenadorModel = require('./entrenadores.model');

module.exports.registrar_entrenador = function (req, res) {
    let nuevoEntrenador = new entrenadorModel({
        foto_entrenador: req.body.foto_entrenador,
        nombre_entrenador: req.body.nombre_entrenador,
        codigo_entrenador: req.body.codigo_entrenador,
        edad_entrenador: req.body.edad_entrenador,
        sexo_entrenador: req.body.sexo_entrenador
    });
    nuevoEntrenador.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: 'El entrenador no pudo ser registrado: ' + error
            });
        } else {
            res.json({
                success: true,
                msg: 'El entrenador ha sido registrado correctamente ' + error
            });
        }
    });
};

module.exports.listar_entrenador = function (req, res)
{
    entrenadorModel.find().sort({ nombre_entrenador: 'asc' }).then(
        function (entrenadores)
        {
            res.send(entrenadores);
        }
    );
};