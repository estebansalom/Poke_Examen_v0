'use strict';

function registrarEntrenador(paInfoEntrenador) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_entrenador',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            foto_entrenador: paInfoEntrenador[0],
            nombre_entrenador: paInfoEntrenador[1],
            codigo_entrenador: paInfoEntrenador[2],
            edad_entrenador: paInfoEntrenador[3],
            sexo_entrenador: paInfoEntrenador[4]
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;
};


