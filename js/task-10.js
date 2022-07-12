

/// я не змогла зробити((
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');

const setBoxes = () => {
  amount = Number(input.value);
  createBoxes()
};

const removeBoxes = () => {
divBoxes.innerHTML = '';
};

createBtn.addEventListener('click',setBoxes);
destroyBtn.addEventListener('click', removeBoxes);

function createBoxes(amount) {
  const firstSize = 30;
  for (let i= 0; i<=amount; i +=1) {
   divBoxes.insertAdjacentHTML('beforeend',
    `<div style='width: ${firstSize+i*10};
   height: ${firstSize + i*10};
   background-color: ${getRandomHexColor()};'></div`);
  }
}

