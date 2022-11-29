function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector('#boxes');

buttonCreateEl.addEventListener('click', numAmount);

const boxesArray = [];

function numAmount() {
  const amount = inputEl.value; 
  console.log(amount); 

  for (let i = 0; i < amount; i += 1) {
    let widthNum = 30; 
    let heightNum = 30;
    widthNum += i * 10;
    heightNum += i * 10;
const divs = `<div style= width: ${widthNum}; height: ${heightNum}; background-color: ${getRandomHexColor()};></div>`;
   boxesArray.push(divs);
 }
}

console.log(boxesArray);
const boxesEachElUnite = boxesArray.join("");
boxEl.insertAdjacentHTML("afterbegin", boxesEachElUnite);