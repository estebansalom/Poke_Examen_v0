'use strict';
mostrarListaEntrenadores();

let botonBuscar = document.querySelector('#btnBuscar');
let inputBuscar = document.querySelector('#txtBusqueda');

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
                let celdasexo = fila.insertCell();

                let imagen = document.createElement('img');
                imagen.src = listaEntrenadores[i]['foto_entrenador'];
                imagen.classList.add('imageSettings');
                celdaFoto.appendChild(imagen);

                celdaNombre.innerHTML = listaEntrenadores[i]['nombre_entrenador'];
                celdaCodigo.innerHTML = listaEntrenadores[i]['codigo_entrenador'];
                celdaEdad.innerHTML = listaEntrenadores[i]['edad_entrenador'];
                celdaSexo.innerHTML = listaEntrenadores[i]['sexo_entrenador'];


            }else {
                for (let i = 0; i < listaEntrenadores.length; i++) {
                    let fila = tbody.insertRow();

                    let celdaFoto = fila.insertCell();
                    let celdaNombre = fila.insertCell();
                    let celdaCodigo = fila.insertCell();
                    let celdaEdad = fila.insertCell();
                    let celdaSexo = fila.insertCell();

                    let imagen = document.createElement('img');
                    imagen.src = listaEntrenadores[i]['foto_entrenador'];
                    imagen.classList.add('imageSettings');
                    celdaFoto.appendChild(imagen);

                    celdaNombre.innerHTML = listaEntrenadores[i]['nombre_entrenador'];
                    celdaCodigo.innerHTML = listaEntrenadores[i]['codigo_entrenador'];
                    celdaEdad.innerHTML = listaEntrenadores[i]['edad_entrenador'];
                    celdaSexo.innerHTML = listaEntrenadores[i]['sexo_entrenador'];


                }

            }
        };
    }
}
