// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  // capturar el nombre del amigo
  let input = document.getElementById("amigo");
  let nombreAmigo = input.value;
  console.log(`Nombre del amigo es ${nombreAmigo}`);

  //Verificar campo no esté vacio
  if (nombreAmigo.length === 0) {
    alert("Por favor, inserte un nombre.");
  } else {
    //Comprobar nombre válido
    const regex = /^[a-zA-Z\u00C0-\u017F]{2,}(?: [a-zA-Z\u00C0-\u017F]+)*$/;
    let nombreEsValido = regex.test(nombreAmigo);
    if (nombreEsValido === false) {
      alert("Por favor inserta un nombre válido.");
      document.getElementById("amigo").value = "";
    } else {
      //Agregar amigo al array
      amigos.push(nombreAmigo);
      console.log("AMIGOS", amigos);
      //Limpiar el imput después de una entrada
      input.value = "";
    }
    actualizarListaDeAmigos();
  }
}

function actualizarListaDeAmigos() {
  //Borro la lista  si había una anterior
  document.getElementById("resultado").innerHTML = "";
  //Traer la lista y borrarla si contenia nombres
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  //Recorrer para agregar los nombres a la lista
  for (let i = 0; i < amigos.length; i++) {
    //crear elemento que conforma lña lista
    let li = document.createElement("li");
    li.innerHTML = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert(
      "No hay una lista de amigos para jugar, por favor agrega nombres para realizar el juego."
    );
  } else if (amigos.length < 2) {
    alert(
      "Solo hay un nobre en la lista. Agrega mínimo dos para poder realizar el juego."
    );
  } else {
    let indice = Math.floor(Math.random() * amigos.length);

    let resultado = document.getElementById("resultado");
    let li = document.createElement("li");
    li.innerHTML = `Tu amigo secreto sorteado es: <strong>${amigos[indice]}</strong>`;
    resultado.appendChild(li);
    document.getElementById("listaAmigos").innerHTML = "";
    setTimeout(() => {
      li.innerHTML = `Si deseas hacer otro sorteo del amigo secreto, agregalos nuevamente.`;
    }, 3000);
    amigos = [];
  }
}
