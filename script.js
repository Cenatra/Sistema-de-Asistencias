const URL = "https://script.google.com/macros/s/AKfycbwc9GSK96zhCbgk1_TD3HFZA8bdwRRV3hMuO1CyXHyIF2mXauQfMosMKtS4PR2_PRZ5/exec";

document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("loginForm");

  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({
        usuario: usuario,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {

      console.log("Respuesta servidor:", data);

      if (data.success) {

        localStorage.setItem("usuario", data.nombre);
        localStorage.setItem("rol", data.rol);

        console.log("Guardado en localStorage:", localStorage.getItem("usuario"));

        window.location.href = "./dashboard.html";

      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error("Error real:", error);
      alert("Error de conexión");
    });

  });

});
