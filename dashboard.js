document.addEventListener("DOMContentLoaded", function () {

    const usuario = localStorage.getItem("usuario");
    const rol = localStorage.getItem("rol");

    if (!usuario || !rol) {
        window.location.href = "index.html";
        return;
    }

    document.getElementById("rolUsuario").textContent = rol;
    document.getElementById("nombreUsuario").textContent = usuario;

    function actualizarReloj() {
        const ahora = new Date();
        document.getElementById("reloj").textContent =
            ahora.toLocaleTimeString();
    }

    setInterval(actualizarReloj, 1000);
    actualizarReloj();

    document.getElementById("fecha").textContent =
        new Date().toLocaleDateString('es-MX', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

});

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
