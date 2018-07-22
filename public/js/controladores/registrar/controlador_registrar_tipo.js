'use strict'
let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);

let inputNombre = document.querySelector('#txtNombre');

let sNombre = "";

function obtenerDatos(){
    let infoTipo = [];

    sNombre = inputNombre.value;

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
        infoTipo.push(sNombre, imagenUrl);
        registrarTipo(infoTipo);
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

    return bError;
};

function limpiarFormulario ()
{
    inputNombre.value = "";
};