'use strict'

/*function cargarTipo1() {
    let tipo1_pokemon = ['Fuego', 'Agua', 'Planta', 'Insecto', 'Dragón', 'Fantasma', 'Eléctrico', 'Lucha', 'Hada', 
    'Volador', 'Hielo', 'Roca', 'Normal', 'Hierro', 'Tierra', 'Veneno', 'Psiquico', 'Siniestro'];
    let select = document.querySelector('#txtTipo1'); //Seleccionamos el select
    
    for(let i=0; i < tipo1_pokemon.length; i++){ 
        let option = document.createElement('option'); //Creamos la opcion
        option.innerHTML = tipo1_pokemon[i]; //Metemos el texto en la opción
        option.value = tipo1_pokemon[i];
        select.appendChild(option); //Metemos la opción en el select
    }
};


function cargarTipo2() {
    let tipo1_pokemon = ['Fuego', 'Agua', 'Planta', 'Insecto', 'Dragón', 'Fantasma', 'Eléctrico', 'Lucha', 'Hada', 
    'Volador', 'Hielo', 'Roca', 'Normal', 'Hierro', 'Tierra', 'Veneno', 'Psiquico', 'Siniestro'];
    let select = document.querySelector('#txtTipo2'); //Seleccionamos el select
    
    for(let i=0; i < tipo2_pokemon.length; i++){ 
        let option = document.createElement('option'); //Creamos la opcion
        option.innerHTML = tipo2_pokemon[i]; //Metemos el texto en la opción
        option.value = tipo1_pokemon[i];
        select.appendChild(option); //Metemos la opción en el select
    }
};*/

let botonRegistrar = document.querySelector('#btnRegistrar');
botonRegistrar.addEventListener('click', obtenerDatos);

let inputNombre = document.querySelector('#txtNombre');
let inputCodigo = document.querySelector('#txtCodigo');
let inputTipo1 = document.querySelector('#txtTipo1');
let inputTipo2 = document.querySelector('#txtTipo2');

let regexSoloLetras = /^[a-zA-Z0-9]+$/;
let regexCodigo = /^[0-999]{1,3}$/;

let sNombre = "";
let sCodigo = "";
let sTipo1 = "";
let sTipo2 = ""


function obtenerDatos(){
    let infoPokemon = [];

    sNombre = inputNombre.value;
    sCodigo = inputCodigo.value;
    sTipo1 = inputTipo1.value;
    sTipo2 = inputTipo2.value;

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
        console.log(imagenUrl)
        infoPokemon.push(imagenUrl, sNombre, sCodigo, sTipo1, sTipo2);
        registrarPokemon(infoPokemon)
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
    inputTipo1.value = "";
    inputTipo2.value = "";
};