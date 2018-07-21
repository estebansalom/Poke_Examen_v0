'use strict'
let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);

let inputNombre = document.querySelector('#txtNombre');
let inputCodigo = document.querySelector('#numCodigo');

let sNombre = '';
let nCodigo = 0;

function obtenerDatos(){
    let infoPokemon = [];
    sNombre = inputNombre.value;
    nCodigo = inputCodigo.value
}