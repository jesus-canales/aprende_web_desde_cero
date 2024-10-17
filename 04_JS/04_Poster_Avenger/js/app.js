
// Definir una constante que represente la etiqueta de listado de imágenes
const listaPeliculasAvengers = document.getElementById('listaPeliculasAvengers');

// Definir las acciones: incrementa tamaño del póster al pasar el mouse - restaura tamaño de póster al quitar el mouse
listaPeliculasAvengers.addEventListener('mouseover', accionSobrePoster);
listaPeliculasAvengers.addEventListener('mouseout', accionFueraPoster);

// Construir la función para incrementar tamaño de poster al pasar el mouse
function accionSobrePoster ( evento ) {
    const target = evento.target;
    if( target.tagName !== 'IMG' ) return;

    const image = target;
    image.classList.toggle('hover');
}


// Construir la función para disminuir tamaño de poster al quitar el mouse
function accionFueraPoster ( evento )  {
    const target = evento.target;
    if( target.tagName !== 'IMG' ) return;

    const image = target;
    image.classList.remove('hover');
}
