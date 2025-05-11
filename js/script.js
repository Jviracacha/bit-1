"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contacto");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const mensaje = document.getElementById("mensaje").value;
      alert(Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje});
    });
  }
});