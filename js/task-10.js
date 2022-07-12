
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');

const setBoxes = () => {
  const amount = Number(input.value);
   createBoxes(amount);
};

const removeBoxes = () => {
divBoxes.innerHTML = '';
};

createBtn.addEventListener('click',setBoxes);
destroyBtn.addEventListener('click', removeBoxes);

function createBoxes(amount) {
  const firstSize = 30;
  for (let i= 0; i<=amount; i +=1) {
    const size = firstSize+i*10;
   divBoxes.insertAdjacentHTML('beforeend',
    `<div style='width: ${size};
   height: ${size};
   background-color: ${getRandomHexColor()};'></div`);
  }
}

