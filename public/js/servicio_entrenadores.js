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

function obtenerListaEntrenadores() {
    let listaEntrenadores = [];

    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_entrenador',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;

    return listaEntrenadores;

};

function obtener_entrenador_por_id(pid){
    let entrenador = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/buscar_entrenador_id',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            _id : pid
        }
      });
    
      peticion.done(function(response){
        entrenador = response;
      });
    
      peticion.fail(function(response){
       
      });

      return entrenador;
};




