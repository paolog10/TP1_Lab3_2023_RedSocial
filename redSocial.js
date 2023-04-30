window.onload=Iniciar; //si usamos defer, no colocar esta linea

function Iniciar() {
  //let inputUsuario = document.getElementById("txtUsuario");
  //inputUsuario.addEventListener('input', MostrarNombre); //despues eliminar

  let seguirPerfil = document.getElementById('btnSeguir');
  seguirPerfil.addEventListener("click", SeguirPerfil);

  let agregarComentarios = document.getElementById('agregarComentario');
  agregarComentarios.addEventListener("click", GenerarComentarios);

  let botonlike = document.getElementById('btnLike');
  botonlike.addEventListener("click", DarLike);
}
/*
function MostrarNombre(evento) {
  evento.preventDefault(); // Evita que se recargue la página al enviar el formulario
  //alert("funciona") //despues eliminar
}
*/
function SeguirPerfil() {
  //evento.preventDefault() // Evita que se recargue la página al enviar el formulario

  let seguirPerfil = document.getElementById('btnSeguir');
  seguirPerfil.addEventListener("click", Estado)
  
  function Estado() {
    if (seguirPerfil.textContent === 'Seguir') {
      seguirPerfil.textContent = 'Dejar de seguir'; //La propiedad textContent para establecer el texto del párrafo
    } else {
      seguirPerfil.textContent = 'Seguir';
    }
  }
}

function DarLike(evento) {
  evento.preventDefault() // Evita que se recargue la página al enviar el formulario
  
  let likes = document.getElementById('mostrarCantidadLikes');
  let cantidadLikes = 200;
  cantidadLikes++;
  likes.innerHTML = `${cantidadLikes}`;

};

function GenerarComentarios(evento) {
  evento.preventDefault();
  
  let inputUsuario = document.getElementById('txtUsuario').value;
  let inputComentario = document.getElementById('inputComentario').value;
  let listaComentarios = document.getElementById('ulMostrarComentarios');

  //validación básica /*/^\s+$/.test(inputUsuario) no haya solamente espacios*/
  if (inputUsuario === "" || inputUsuario == null || inputUsuario.length == 0  || /^\s+$/.test(inputUsuario) ) {
    alert("Campo usuario inválido. Verifique");
    return false; //se retorna false y el formulario no se envía.
  }

  if (inputComentario === "") {
    alert("Campo comentario inválido. Verifique");
    return false; 
  }

  //Si cumple requisitos, sigue adelante
  //creo elemento 'li'
  let nuevoComentario = document.createElement("p");

  //imprimo el comentario
  var contenido = document.createTextNode(`${inputUsuario}: ${inputComentario}`);
  
  listaComentarios.appendChild(nuevoComentario);
  nuevoComentario.appendChild(contenido);

  document.getElementById('txtUsuario').value = "";
  document.getElementById('inputComentario').value = "";
}
/*
TODO
-revisar Seguir uso textContent
*/

