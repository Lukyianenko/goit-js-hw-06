function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());

const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', onChangeColorBg);

function onChangeColorBg() {
  const colorNum = getRandomHexColor();
  bodyEl.style.backgroundColor = colorNum;
  spanEl.textContent = colorNum;
}
