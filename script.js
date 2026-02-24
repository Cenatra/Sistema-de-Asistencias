const scriptURL = "PEGA_AQUI_TU_URL";

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
            window.location.href = "dashboard.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    })
    .catch(() => alert("Error de conexión"));
});
