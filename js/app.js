let points = 0;
let counter = 0;

const counterElement = document.getElementById('clicks');
counterElement.textContent = points;

const resultElement = document.getElementById('result');
resultElement.textContent = points;

const btnReset = document.getElementById("resetBtn");
btnReset.addEventListener('click', reset)

function reset() {
  window.location.reload();
}