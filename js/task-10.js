function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector('#boxes');

buttonCreateEl.addEventListener('click', numAmount);
buttonDestroyEl.addEventListener('click', onClear);



function numAmount(event) {

const boxesArray = []; 
  const amount = inputEl.value; 
  console.log(amount); 
  

  for (let i = 0; i < amount; i += 1) {
    
    let widthNum = 30; 
    let heightNum = 30;
    widthNum += i * 10;
    heightNum += i * 10;
const divs = document.createElement('div');
divs.classList.add('box1')
 divs.style.width = widthNum +'px';
 divs.style.height = heightNum +'px';
 divs.style.backgroundColor = getRandomHexColor();
 
   boxesArray.push(divs);
 }
 boxEl.append(...boxesArray);
}

function onClear() {
  const boxDel = document.querySelectorAll('.box1');
  console.log(boxDel);
  for (let el of boxDel) {
    el.remove();
  }
}

