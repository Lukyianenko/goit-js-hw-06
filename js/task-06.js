const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onOutFocusSymbol);

function onOutFocusSymbol(event) {
    let symbolLength = event.currentTarget.value.length;
    event.currentTarget.dataset.length = 6;
    const numberN = event.currentTarget.dataset.length;
    if (symbolLength == numberN) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
}     
}