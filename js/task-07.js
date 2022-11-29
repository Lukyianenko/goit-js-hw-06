const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const addEl = document.querySelector('.add');

inputEl.addEventListener('change', onChangeTextSize)

function onChangeTextSize(event) {
    const sizesNum = event.currentTarget.value;
    
    textEl.style.fontSize = sizesNum + "px";
    console.log(sizesNum);
}

