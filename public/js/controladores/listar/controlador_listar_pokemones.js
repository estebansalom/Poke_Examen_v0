'use strict';
mostrarListaPokemones();

let botonBuscar = document.querySelector('#btnSearch');
let inputBuscar = document.querySelector('#txtBusqueda');

botonBuscar.addEventListener('click', function () {

    let busqueda = inputBuscar.value;
    mostrarListaPokemones(busqueda);
});



function mostrarListaPokemones(paBuscar) {
    let listaPokemones = obtenerListaPokemones();

    let tbody = document.querySelector('section div table tbody');
    tbody.innerHTML = '';
    if (paBuscar != undefined) {
        for (let i = 0; i < listaPokemones.length; i++) {
            if (listaPokemones[i]['nombre_pokemon'].toLowerCase().includes(paBuscar.toLowerCase())) {
                let fila = tbody.insertRow();

                let celdaFoto = fila.insertCell();
                let celdaNombre = fila.insertCell();
                let celdaCodigo = fila.insertCell();
                let celdaTipo1 = fila.insertCell();
                let celdaTipo2 = fila.insertCell();
                let celdaOpciones = fila.insertCell();

                celdaFoto.innerHTML = listaPokemones[i]['foto_pokemon'];
                celdaNombre.innerHTML = listaPokemones[i]['nombre_pokemon'];
                celdaCodigo.innerHTML = listaPokemones[i]['codigo_pokemon'];
                celdaTipo1.innerHTML = listaPokemones[i]['tipo1_pokemon']
                celdaTipo2.innerHTML = listaPokemones[i]['tipo2_pokemon'];
        

                // Este es el boton de editar
                let botonEditar = document.createElement('a');
                botonEditar.href = '#'//En este espacio va el path del html de editar pokemon
                botonEditar.classList.add('fas');
                botonEditar.classList.add('fa-cogs');

                celdaOpciones.appendChild(botonEditar);

                // Este es el boton de eliminar
                let botonEliminar = document.createElement('a');
                botonEliminar.href = '#'//Este espacio va el evento de eliminar pokemon
                botonEliminar.classList.add('fas');
                botonEliminar.classList.add('fa-trash-alt');

                celdaOpciones.appendChild(botonEliminar);

                // Icono de editar: <i class="fas fa-cogs"></i>
                // Icono de eliminar: <i class="fas fa-trash-alt"></i>
            }
        }
    }
    else {
        for (let i = 0; i < listaPokemones.length; i++) {
            let fila = tbody.insertRow();

            let celdaFoto = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaCodigo = fila.insertCell();
            let celdaCreditos = fila.insertCell();
            let celdaFechaCreacion = fila.insertCell();
            let celdaSede = fila.insertCell();
            let celdaPeriodo = fila.insertCell();
            let celdaEstado = fila.insertCell();
            let celdaOpciones = fila.insertCell();

            celdaFoto.innerHTML = listaPokemones[i]['foto_pokemon'];
            celdaNombre.innerHTML = listaPokemones[i]['nombre_pokemon'];
            celdaCodigo.innerHTML = listaPokemones[i]['codigo_pokemon'];
            celdaTipo1.innerHTML = listaPokemones[i]['tipo1_pokemon'];
            celdaTipo2.innerHTML = listaPokemones[i]['tipo2_pokemon'];
    
            // Este es el boton de editar
            let botonEditar = document.createElement('a');
            botonEditar.href = '#'//En este espacio va el path del html de editar pokemon
            botonEditar.classList.add('fas');
            botonEditar.classList.add('fa-cogs');

            celdaOpciones.appendChild(botonEditar);

            // Este es el boton de eliminar
            let botonEliminar = document.createElement('a');
            botonEliminar.href = '#'//Este espacio va el evento de eliminar pokemon
            botonEliminar.classList.add('fas');
            botonEliminar.classList.add('fa-trash-alt');

            celdaOpciones.appendChild(botonEliminar);
        }

    }
};
