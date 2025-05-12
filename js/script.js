

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registro-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = form.elements["nombre"].value.trim();
      const correo = form.elements["correo"].value.trim();
      const interes = form.elements["interes"].value.trim();

      alert(`¡Gracias por registrarte!\n\nNombre: ${nombre}\nCorreo: ${correo}\nInterés: ${interes}`);
      
      // Aquí podrías enviar los datos a un backend o Google Forms
      form.reset();
    });
  }
});