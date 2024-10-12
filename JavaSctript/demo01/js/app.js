
const formularioregistro = document.getElementById("formulario-registro");
const mensajeserror = document.getElementById("mensajeserror");

formularioregistro.addEventListener("submit", function(event){

    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    mensajeserror.innerHTML = "";

    if ( !usuario.trim() ) {
        mostrarError("El nombre de usuario es obligatorio");
        return;
    }

    if ( !correo.trim() ) {
        mostrarError("El correo es requrerido");
        return;
    }

    if ( !contrasena.trim()) {
        mostrarError("La contraseña es requerida");
        return;
    }

})

function mostrarError ( mensaje ) {
    const mensajeerror = document.createElement("div");
    mensajeerror.className = "error";
    mensajeerror.textContent = mensaje;
    mensajeserror.appendChild(mensajeerror);
}
