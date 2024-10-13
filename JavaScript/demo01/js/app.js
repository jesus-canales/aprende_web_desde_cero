
const formularioregistro = document.getElementById("formulario-registro");
const mensajeserror = document.getElementById("mensajeserror");

formularioregistro.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    mensajeserror.innerHTML = "";

    if ( !usuario.trim() ) {
        mostrarError("El nombre de usuario es obligatorio.");
        return;
    }

    if ( !correo.trim() || !esCorreoValido(correo) ) {
        mostrarError("El correo es obligatorio.");
        return;
    }

    if ( !contrasena.trim() ) {
        mostrarError("Definir la contraseña es obligatorio.");
        return;
    }

    alert("El registro es satisfactorio.");
    formularioregistro.reset();

})

function mostrarError( mensaje ){
    const mensajeerror = document.createElement("div");
    mensajeerror.className = "error";
    mensajeerror.textContent = mensaje;
    mensajeserror.appendChild(mensajeerror);
}

function esCorreoValido( email ) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}