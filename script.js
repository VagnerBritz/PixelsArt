// Criação tabela de pixels

const pixelBoard = document.querySelector('#pixel-board');

for (let index = 1; index <= 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}

const black = document.querySelector('.black');
const purple = document.querySelector('.purple');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');

const colorPalette = [black, purple, blue, yellow];

function removeSelectclass() {
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].classList.remove('selected');
  }
}
// Funções para selecionar as cores
function selectBlack() {
  removeSelectclass();
  black.classList.add('selected');
}
function selectPurple() {
  removeSelectclass();
  purple.classList.add('selected');
}
function selectBlue() {
  removeSelectclass();
  blue.classList.add('selected');
}
function selectYellow() {
  removeSelectclass();
  yellow.classList.add('selected');
}

// Eventos para selecionar cor
black.addEventListener('click', selectBlack);
purple.addEventListener('click', selectPurple);
blue.addEventListener('click', selectBlue);
yellow.addEventListener('click', selectYellow);

//* * Este bloco precisei consultar um trabalho de colega (Jovane Castro) para conseguir fazer funcionar.
//* * Source:https://github.com/tryber/sd-018-a-project-pixels-art/pull/136/files#submit-review
document.addEventListener(
  'click',
  (event) => {
    if (event.target.classList.contains('pixel')) {
      const color = document.querySelector('.selected').classList[1];
      event.target.style.backgroundColor = color;
    }
  },
  false,
);

document.querySelector('#clear-board').addEventListener('click', clearBoard);

function clearBoard() {
  const clear = document.querySelectorAll('.pixel');
  for (const iterator of clear) {
    iterator.style.backgroundColor = 'white';
  }
}
// Seleciona a cor preta como default ao iniciar
selectBlack();
