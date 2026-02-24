// PROTEGER DASHBOARD
const usuario = localStorage.getItem("usuario");
const rol = localStorage.getItem("rol");

if (!usuario) {
    window.location.href = "index.html";
}

// Mostrar datos usuario
document.getElementById("rolUsuario").textContent = rol;
document.getElementById("nombreUsuario").textContent = usuario;

// Reloj
function actualizarReloj() {
    const ahora = new Date();
    document.getElementById("reloj").textContent =
        ahora.toLocaleTimeString();
}
setInterval(actualizarReloj, 1000);
actualizarReloj();

// Fecha
document.getElementById("fecha").textContent =
    new Date().toLocaleDateString('es-MX', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

// Logout
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
