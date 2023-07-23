// Selecionar un elemento H1 en el HTML

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#pResult');

button.addEventListener('click', btnOnClick);

function btnOnClick() {
  let sumaInputs = input1.value + input2.value;
  pResult.innerHTML = "Resultado: " + sumaInputs;
}

