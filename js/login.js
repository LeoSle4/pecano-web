document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        validarCredenciales();
    });

    function validarCredenciales() {
        const correo = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const correoCorrecto = "dleochoque4@gmail.com";
        const passwordCorrecto = "LeoSle4!";

        if (correo === correoCorrecto && password === passwordCorrecto) {
            alert("Credenciales correctas");
            window.location.href = "inicio.html";
        } else {
            alert("Correo o contraseña incorrectos");
        }
    }
});
