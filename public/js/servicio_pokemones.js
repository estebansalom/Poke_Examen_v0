'use strict';

function registrarPokemon(paInfoPokemon) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_pokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            foto_pokemon: paInfoPokemon[0],
            nombre_pokemon: paInfoPokemon[1],
            codigo_pokemon: paInfoPokemon[2],
            tipo1_pokemon: paInfoPokemon[3],
            tipo2_pokemon: paInfoPokemon[4]
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;
};

function obtenerListaPokemones() {
    let listaPokemones = [];

    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_pokemon',
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

    return listaPokemones;

};

