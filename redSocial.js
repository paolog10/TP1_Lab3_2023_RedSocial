window.onload=Iniciar; //si usamos defer, no colocar esta linea

function Iniciar() {
  let seguirPerfil = document.getElementById('btnSeguir');
  seguirPerfil.addEventListener("click", SeguirPerfil);

  let agregarComentarios = document.getElementById('agregarComentario');
  agregarComentarios.addEventListener("click", GenerarComentarios);

  let botonlike = document.getElementById('btnLike');
  botonlike.addEventListener("click", DarLike);
}

function SeguirPerfil(evento) {
  evento.preventDefault(); // Evita que se recargue la página al enviar el formulario

  let seguirPerfil = document.getElementById('btnSeguir');
  if (seguirPerfil.textContent === 'Seguir') {
    seguirPerfil.textContent = 'Dejar de seguir'; //La propiedad textContent para establecer el texto del párrafo. representa el contenido de texto del nodo y sus descendientes
    return;
  } else {
    seguirPerfil.textContent = 'Seguir';
    return;
  }
}

function DarLike(evento) {
  evento.preventDefault(); 
  
  let likes = document.getElementById('mostrarCantidadLikes');
  let cantidadLikes = 200;
  cantidadLikes++;
  likes.innerHTML = `${cantidadLikes} Likes`;
  likes.disabled = true; //deshabilito el botón
  return;
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

  if (inputComentario === "" || inputComentario == null || inputComentario.length == 0 || inputComentario > 1500) {
    alert("Campo comentario inválido. Verifique");
    return false; 
  }
  
  let strong = document.createElement("strong");
  let nuevoComentario = document.createElement("p");
  
  //imprimo el comentario
  var textoStrong = document.createTextNode(`${inputUsuario} `);
  var contenido = document.createTextNode(`${inputComentario}`);
  
  //appendeo
  strong.appendChild(textoStrong);
  nuevoComentario.appendChild(strong);
  nuevoComentario.appendChild(contenido);
  listaComentarios.appendChild(nuevoComentario);

  //dejo vacío los campos
  document.getElementById('txtUsuario').value = "";
  document.getElementById('inputComentario').value = "";
  return;
}


