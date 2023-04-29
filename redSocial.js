window.onload=Iniciar; //si usamos defer, no colocar esta linea

function Iniciar() {
  let inputUsuario = document.getElementById("txtUsuario");
  inputUsuario.addEventListener('input', MostrarNombre); //despues eliminar
}

function MostrarNombre(evento) {
  evento.preventDefault(); // Evita que se recargue la página al enviar el formulario
  alert("funciona") //despues eliminar
}