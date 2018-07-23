'use strict';
mostrarListaPokemones();

let botonBuscar = document.querySelector('#btnBuscar');
let inputBuscar = document.querySelector('#txtBusqueda');

botonBuscar.addEventListener('click', function () {

    let busqueda = inputBuscar.value;
    mostrarListaPokemones(busqueda);
});

inputBuscar.addEventListener('keyup', function () {

    let busqueda = inputBuscar.value;
    mostrarListaPokemones(busqueda);
});





function mostrarListaPokemones(paBuscar) {
    let listaPokemones = obtenerListaPokemones();

    let tbody = document.querySelector('section table tbody');
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

                let imagen = document.createElement('img');
                imagen.src = listaPokemones[i]['foto_pokemon'];
                imagen.classList.add('imageSettings');
                celdaFoto.appendChild(imagen);
                
                celdaNombre.innerHTML = listaPokemones[i]['nombre_pokemon'];
                celdaCodigo.innerHTML = listaPokemones[i]['codigo_pokemon'];
                celdaTipo1.innerHTML = listaPokemones[i]['tipo1_pokemon'];
                celdaTipo2.innerHTML = listaPokemones[i]['tipo2_pokemon'];
            }
        

            if (listaPokemones[i]['tipo1_pokemon'].toLowerCase().includes(paBuscar.toLowerCase())) {
                let fila = tbody.insertRow();

                let celdaFoto = fila.insertCell();
                let celdaNombre = fila.insertCell();
                let celdaCodigo = fila.insertCell();
                let celdaTipo1 = fila.insertCell();
                let celdaTipo2 = fila.insertCell();

                let imagen = document.createElement('img');
                imagen.src = listaPokemones[i]['foto_pokemon'];
                imagen.classList.add('imageSettings');
                celdaFoto.appendChild(imagen);
                
                celdaNombre.innerHTML = listaPokemones[i]['nombre_pokemon'];
                celdaCodigo.innerHTML = listaPokemones[i]['codigo_pokemon'];
                celdaTipo1.innerHTML = listaPokemones[i]['tipo1_pokemon'];
                celdaTipo2.innerHTML = listaPokemones[i]['tipo2_pokemon'];
            }

            if (listaPokemones[i]['tipo2_pokemon'].toLowerCase().includes(paBuscar.toLowerCase())) {
                let fila = tbody.insertRow();

                let celdaFoto = fila.insertCell();
                let celdaNombre = fila.insertCell();
                let celdaCodigo = fila.insertCell();
                let celdaTipo1 = fila.insertCell();
                let celdaTipo2 = fila.insertCell();

                let imagen = document.createElement('img');
                imagen.src = listaPokemones[i]['foto_pokemon'];
                imagen.classList.add('imageSettings');
                celdaFoto.appendChild(imagen);
                
                celdaNombre.innerHTML = listaPokemones[i]['nombre_pokemon'];
                celdaCodigo.innerHTML = listaPokemones[i]['codigo_pokemon'];
                celdaTipo1.innerHTML = listaPokemones[i]['tipo1_pokemon'];
                celdaTipo2.innerHTML = listaPokemones[i]['tipo2_pokemon'];
            }
        }
    }
    else {
        for (let i = 0; i < listaPokemones.length; i++) {
            let fila = tbody.insertRow();

            let celdaFoto = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaCodigo = fila.insertCell();
            let celdaTipo1 = fila.insertCell();
            let celdaTipo2 = fila.insertCell();

            let imagen = document.createElement('img');
            imagen.src = listaPokemones[i]['foto_pokemon'];
            imagen.classList.add('imageSettings');
            celdaFoto.appendChild(imagen);

            celdaNombre.innerHTML = listaPokemones[i]['nombre_pokemon'];
            celdaCodigo.innerHTML = listaPokemones[i]['codigo_pokemon'];
            celdaTipo1.innerHTML = listaPokemones[i]['tipo1_pokemon'];
            celdaTipo2.innerHTML = listaPokemones[i]['tipo2_pokemon'];


        }

    }
};
