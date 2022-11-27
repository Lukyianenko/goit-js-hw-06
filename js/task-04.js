const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
}

console.log(counter.value);
const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementtEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

btnDecrementEl.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.value;
}
    );
btnIncrementtEl.addEventListener('click', function () {
    counter.increment()
    valueEl.textContent = counter.value;
});


