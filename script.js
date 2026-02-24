const URL = "https://script.google.com/macros/s/AKfycbwc9GSK96zhCbgk1_TD3HFZA8bdwRRV3hMuO1CyXHyIF2mXauQfMosMKtS4PR2_PRZ5/exec";

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        usuario: usuario,
        password: password
      })
    })
    .then(response => response.text())
    .then(text => {

      console.log("Respuesta cruda:", text);

      const data = JSON.parse(text);

      if (data.success) {

        localStorage.setItem("usuario", data.nombre);
        localStorage.setItem("rol", data.rol);

        console.log("Guardado:", localStorage.getItem("usuario"));

        window.location.href = "test.html";

      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error("ERROR REAL:", error);
      alert("Error de conexión o CORS");
    });

  });

});
