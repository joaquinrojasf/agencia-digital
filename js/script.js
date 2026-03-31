const contador = document.getElementById("contador");
const btnContador = document.getElementById("btnContador");
let totalProyectos = 0;

btnContador.addEventListener("click", function () {
  totalProyectos++;
  contador.textContent = totalProyectos;
});

const formulario = document.getElementById("formularioContacto");
const respuestaFormulario = document.getElementById("respuestaFormulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    respuestaFormulario.textContent = "Por favor, completa todos los campos del formulario.";
    respuestaFormulario.style.color = "crimson";
    return;
  }

  const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formatoCorreo.test(correo)) {
    respuestaFormulario.textContent = "Ingresa un correo electrónico válido.";
    respuestaFormulario.style.color = "crimson";
    return;
  }

  respuestaFormulario.textContent = "Formulario enviado correctamente. Pronto te contactaremos.";
  respuestaFormulario.style.color = "green";
  formulario.reset();
});