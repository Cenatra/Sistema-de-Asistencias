document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (usuario === "admin" && password === "1234") {
        alert("Bienvenido Administrador");
        window.location.href = "dashboard.html"; 
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
