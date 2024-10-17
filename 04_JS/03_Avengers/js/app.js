
// Definir las constantes que identificaran a nuestras etiquetas html
const nuevoElemento = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('botonAgregar');
const elementoLista = document.getElementById('elementoLista');

// Establecemos la conexion entre el evento () y la acción
botonAgregar.addEventListener('click', agregarNuevoElemento);

// Creamos la función agregarNuevoElemento
function agregarNuevoElemento () {
    const nuevoElementoTexto = nuevoElemento.value.trim();
    if ( !nuevoElementoTexto ) return;

    const nuevaListaElemento = document.createElement('li');
    nuevaListaElemento.textContent = nuevoElementoTexto;
    elementoLista.appendChild(nuevaListaElemento);
    nuevoElemento.value = '';
}
