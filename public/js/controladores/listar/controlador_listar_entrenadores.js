'use strict';
mostrarListaEntrenadores();

let botonBuscar = document.querySelector('#btnBuscar');
let inputBuscar = document.querySelector('#txtBusqueda');
const elementoImagen = document.querySelector('#txtImagen');
const inputId = document.querySelector('#txtId');

botonBuscar.addEventListener('click', function () {

    let busqueda = inputBuscar.value;
    mostrarListaEntrenadores(busqueda);
});

inputBuscar.addEventListener('keyup', function () {

    let busqueda = inputBuscar.value;
    mostrarListaEntrenadores(busqueda);
});




function mostrarListaEntrenadores(paBuscar) {
    let listaEntrenadores = obtenerListaEntrenadores();

    let tbody = document.querySelector('section table tbody');
    tbody.innerHTML = '';
    if (paBuscar != undefined) {
        for (let i = 0; i < listaEntrenadores.length; i++) {
            if (listaEntrenadores[i]['nombre_entrenador'].toLowerCase().includes(paBuscar.toLowerCase())) {
                let fila = tbody.insertRow();

                let celdaFoto = fila.insertCell();
                let celdaNombre = fila.insertCell();
                let celdaCodigo = fila.insertCell();
                let celdaEdad = fila.insertCell();
                let celdaSexo = fila.insertCell();
                let celdaOpciones = fila.insertCell();

                let imagen = document.createElement('img');
                imagen.src = listaEntrenadores[i]['foto_entrenador'];
                imagen.classList.add('imageSettings');
                celdaFoto.appendChild(imagen);

                celdaNombre.innerHTML = listaEntrenadores[i]['nombre_entrenador'];
                celdaCodigo.innerHTML = listaEntrenadores[i]['codigo_entrenador'];
                celdaEdad.innerHTML = listaEntrenadores[i]['edad_entrenador'];
                celdaSexo.innerHTML = listaEntrenadores[i]['sexo_entrenador'];


                let VerPokemones = document.createElement('a');
            VerPokemones.classList.add('fas');
            VerPokemones.classList.add('fa-plus');

            VerPokemones.dataset._id = listaEntrenadores[i]['_id'];

            VerPokemones.addEventListener('click', buscar_por_id);

            celdaOpciones.appendChild(VerPokemones);

            }
        }
    }
    else {

        for (let i = 0; i < listaEntrenadores.length; i++) {
            let fila = tbody.insertRow();

            let celdaFoto = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaCodigo = fila.insertCell();
            let celdaEdad = fila.insertCell();
            let celdaSexo = fila.insertCell();
            let celdaOpciones = fila.insertCell();

            let imagen = document.createElement('img');
            imagen.src = listaEntrenadores[i]['foto_entrenador'];
            imagen.classList.add('imageSettings');
            celdaFoto.appendChild(imagen);

            celdaNombre.innerHTML = listaEntrenadores[i]['nombre_entrenador'];
            celdaCodigo.innerHTML = listaEntrenadores[i]['codigo_entrenador'];
            celdaEdad.innerHTML = listaEntrenadores[i]['edad_entrenador'];
            celdaSexo.innerHTML = listaEntrenadores[i]['sexo_entrenador'];

            let VerPokemones = document.createElement('a');
            VerPokemones.classList.add('fas');
            VerPokemones.classList.add('fa-plus');

            VerPokemones.dataset._id = listaEntrenadores[i]['_id'];

            VerPokemones.addEventListener('click', buscar_por_id);

            celdaOpciones.appendChild(VerPokemones);


        }
    }
};

function buscar_por_id(){
    //Binding
    let _id = this.dataset._id;
    let entrenador = obtener_entrenador_por_id(_id);


    inputNombre.value = entrenador['nombre_entrenador'];    
    inputCodigo.value = entrenador['codigo_entrenador'];
    inputEdad.value = entrenador['edad_entrenador'];
    inputSexo.value = entrenador['sexo_entrenador'];
    elementoImagen.src = entrenador['foto_entrenador'];
    inputId.value = entrenador['_id'];
};