// script.js
const numeroInput = document.getElementById("numero");
const verificarButton = document.getElementById("verificar");
const resultadoDiv = document.getElementById("resultado");

verificarButton.addEventListener("click", verificarCapicua);

function verificarCapicua() {
  const numero = numeroInput.value;
  const numeroStr = numero.toString();

  if (numeroStr.length <= 2) {
    resultadoDiv.innerHTML = "El número debe tener más de 2 dígitos";
    return;
  }

  const reverso = numeroStr.split("").reverse().join("");

  if (numeroStr === reverso) {
    resultadoDiv.innerHTML = `El número ${numero} es capicúa :)`;
    resultadoDiv.className = "happy face";
  } else {
    resultadoDiv.innerHTML = `El número ${numero} no es capicúa :( `;
    resultadoDiv.className = "sad face";
  }
}