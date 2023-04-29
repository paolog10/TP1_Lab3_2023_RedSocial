window.onload=Iniciar; //si usamos defer, no colocar esta linea

function Iniciar() {
  let inputUsuario = document.getElementById("txtUsuario");
  inputUsuario.addEventListener('input', MostrarNombre); //despues eliminar

  let seguirPerfil = document.getElementById('btnSeguir');
  seguirPerfil.addEventListener("click", SeguirPerfil);
}

function MostrarNombre(evento) {
  evento.preventDefault(); // Evita que se recargue la página al enviar el formulario
  alert("funciona") //despues eliminar
}

function SeguirPerfil() {
  evento.preventDefault() // Evita que se recargue la página al enviar el formulario

  let seguirPerfil = document.getElementById('btnSeguir');
  seguirPerfil.addEventListener("click", Estado)
  
  function Estado() {
    if (seguirPerfil.textContent === 'Seguir') {
      seguirPerfil.textContent = 'Siguiendo';
    } else {
      seguirPerfil.textContent = 'Seguir';
    }
  }

}
