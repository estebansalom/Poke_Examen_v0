'use strict'

let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);

let inputNombre = document.querySelector('#txtNombre');
let inputCodigo = document.querySelector('#txtCodigo');
let inputEdad = document.querySelector('#numEdad');
let inputSexo = document.querySelector('#txtSexo');

let regexSoloLetras = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
let regexCodigo = /^[0-999]{1,3}$/;
let regexEdad = /^[15-85]+$/;

let sNombre = "";
let sCodigo = "";
let nEdad = 0;
let sSexo = ""


function obtenerDatos() {
    let infoEntrenador = [];

    sNombre = inputNombre.value;
    sCodigo = inputCodigo.value;
    nEdad = inputEdad.value;
    sSexo = inputSexo.value;

    let bError = false;
    bError = validar();

    if (bError) {
        swal({
            title: 'Registro incorrecto',
            text: 'No se pudo registrar el Entrenador, verifique que completó correctamente la información que se le solicita',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });
    } else {
        swal({
            title: 'Registro correcto',
            text: 'El Entrenador se registró correctamente',
            type: 'success',
            confirmButtonText: 'Entendido'
        });
        console.log(imagenUrl)
        infoEntrenador.push(imagenUrl, sNombre, sCodigo, nEdad, sSexo);
        registrarEntrenador(infoEntrenador)
        $('.swal2-confirm').click(function () {
            window.location.href = '../html/index.html';
        });
        limpiarFormulario();
    }
};

function validar() {
    let bError = false;
    sNombre = inputNombre.value;
    sCodigo = inputCodigo.value;
    nEdad = inputEdad.value;
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

    // Validacion para la edad
    if (regexEdad.test(nEdad) == false) {
        bError = true;
        inputEdad.classList.add('errorInput');
    } else {
        inputEdad.classList.remove('errorInput');
    };

    return bError;
};

function limpiarFormulario() {
    inputNombre.value = "";
    inputCodigo.value = "";
    inputEdad.value = "";
    inputSexo.value = "";
};