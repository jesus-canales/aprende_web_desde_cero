
const boton = document.querySelector("#boton");
const botonesradio = document.querySelectorAll('input[name="lenguaje"]');
const vermensaje = document.getElementById("vermensaje");

boton.addEventListener("click", () => {
    let lenguajeseleccionado;
    for (const radioButton of botonesradio) {
        if (radioButton.checked) {
            lenguajeseleccionado = radioButton.value;
            break;
        }
    }
    vermensaje.innerText = lenguajeseleccionado
        ? ` Haz seleccionado ${lenguajeseleccionado} `
        : `No ha seleccionado ningún lenguaje`;
})
