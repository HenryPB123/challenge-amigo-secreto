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
    } else {
      //Agregar amigo al array
      amigos.push(nombreAmigo);
      console.log("AMIGOS", amigos);
      //Limpiar el imput después de una entrada
      input.value = "";
    }
  }
}
