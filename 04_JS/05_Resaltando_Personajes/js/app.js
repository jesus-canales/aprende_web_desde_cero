// 01 Asignando un evento click sobre el subtítulo

const miSubtitulo = document.getElementById('subtitulo');

miSubtitulo.addEventListener('click', function(){
    console.log('Haz hecho click');
});

// 02 Ahora vamos a establecer que cuando hago click sobre un elemento cambie a color rojo y fondo amarillo
const heroesAvengers = document.querySelectorAll('.listAvenger');
for(let i = 0; i < heroesAvengers.length; i++){
    heroesAvengers[i].addEventListener('click', colorRojo);
};

// Utilizamos el estilo red
function colorRojo(){
    console.log(this);
    let avengerSeleccionado = this.classList.toggle("red");
};

// RETO: establecer que cuando se haga click aparezca la imagen respectiva del Avenger seleccionado

