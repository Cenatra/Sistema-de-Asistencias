const scriptURL = "https://script.google.com/macros/s/AKfycbxVILtgPHuNoCTYXl4eWTCjd8YdzYqIexets92Emve6hz8_qGsc9svBDTIPJQABCLRc/exec";

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ usuario, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "success") {
            localStorage.setItem("usuario", usuario);
            localStorage.setItem("rol", data.rol);
            window.location.href = "dashboard.js";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    })
    .catch(() => alert("Error de conexión"));
});
