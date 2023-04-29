window.onload=Iniciar; //si usamos defer, no colocar esta linea

function Iniciar() {
  let inputUsuario = document.getElementById("txtUsuario");
  inputUsuario.addEventListener('input', MostrarNombre); //despues eliminar

  let seguirPerfil = document.getElementById('btnSeguir');
  seguirPerfil.addEventListener("click", SeguirPerfil);

  let agregarComentarios = document.getElementById('agregarComentario');
  agregarComentarios.addEventListener("click", GenerarComentarios);
}

function MostrarNombre(evento) {
  evento.preventDefault(); // Evita que se recargue la página al enviar el formulario
  //alert("funciona") //despues eliminar
}

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
  
  let btnLike = document.getElementById('btnLike');
  btnLike.addEventListener("click", SumarLike);
  let contarLike = document.getElementById('contarLike');
  let numerosLike = 200;

  function SumarLike() {
    numerosLike++;
    contarLike.textContent = numerosLike; //La propiedad textContent para establecer el texto del párrafo
  }
};

function GenerarComentarios(evento) {
  evento.preventDefault();
  
  let inputUsuario = document.getElementById('txtUsuario').value;
  let inputComentario = document.getElementById('inputComentario').value;
  let listaComentarios = document.getElementById('ulMostrarComentarios');

  //creo elemento 'li'
  let nuevoComentario = document.createElement("li");

  //imprimo el comentario
  var contenido = document.createTextNode(inputUsuario + ': ' + inputComentario);
  
  listaComentarios.appendChild(nuevoComentario);
  nuevoComentario.appendChild(contenido);

}
/*
TODO
-revisar Me gusta uso textContent
-revisar Seguir uso textContent
*/

