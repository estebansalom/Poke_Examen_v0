'use strict'
let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);

let inputNombre = document.querySelector('#txtNombre');
let inputCodigo = document.querySelector('#txtCodigo');

let regexSoloLetras = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
let regexCodigo = /^[0-999]{1,3}$/;

let sNombre = "";
let sCodigo = "";

function obtenerDatos(){
    let infoPokemon = [];

    sNombre = inputNombre.value;
    sCodigo = inputCodigo.value;

    let bError = false;
    bError = validar();

    if (bError) {
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el pokemon, verifique que completó correctamente la información que se le solicita',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
    } else {
        swal({
            title: 'Registro correcto',
            text: 'Ll pokemon se registró correctamente',
            type: 'success',
            confirmButtonText: 'Entendido'
        });
        infoPokemon.push(sNombre, sCodigo);
        registrarPokemon(infoPokemon);
        $('.swal2-confirm').click(function(){
            window.location.href = '../html/listar_pokemones.html';
      });
        limpiarFormulario();
    }
};

function validar ()
{
    let bError = false;
    sNombre = inputNombre.value;
    sCodigo = inputCodigo.value;
    // Validacion contra blancos
    let arregloInputs = document.querySelectorAll('input:required');
    for (let i = 0; i < arregloInputs.length; i++) {
        if (arregloInputs[i].value == '') {
            bError = true;
            arregloInputs[i].classList.add('errorInput');
        } else {
            arregloInputs[i].classList.remove('errorInput');
        }
    };

    // Validacion para el nombre
    if (regexSoloLetras.test(sNombre) == false) {
        bError = true;
        inputNombre.classList.add('errorInput');
    } else {
        inputNombre.classList.remove('errorInput');
    };


    // Validacion para el codigo
    if (regexCodigo.test(sCodigo) == false) {
        bError = true;
        inputCodigo.classList.add('errorInput');
    } else {
        inputCodigo.classList.remove('errorInput');
    };

    return bError;
};

function limpiarFormulario ()
{
    inputNombre.value = "";
    inputCodigo.value = "";
};