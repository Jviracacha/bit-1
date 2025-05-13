
// en modo estricto
"use strict";



document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registro-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = form.elements["nombre"].value.trim();
      const correo = form.elements["correo"].value.trim();
      const interes = form.elements["interes"].value.trim();

      // Validaciones de cada uno de los campos
      const errores = [];

      // Validar nombre: al menos 5 caracteres
      if (nombre.length < 5) {
        errores.push("El nombre debe tener al menos 2 caracteres.");
      }

      // Validar correo con expresión regular simple
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoRegex.test(correo)) {
        errores.push("El correo electrónico no es válido.");
      }

      // Validar interés: al menos 10 caracteres
      if (interes.length < 10) {
        errores.push("El campo de interés debe tener al menos 10 caracteres.");
      }

      if (errores.length > 0) {
        alert("Errores en el formulario:\n\n" + errores.join("\n"));
        return; // En esta parte se detiene el envío si hay errores
      }

      // Si todo está bien
      alert(`¡Gracias por registrarte!\n\nNombre: ${nombre}\nCorreo: ${correo}\nInterés: ${interes}`);

    
      form.reset();
    });
  }
});
