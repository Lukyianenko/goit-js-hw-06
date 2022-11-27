const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsEl = document.querySelector('ul');
console.log(ingridientsEl);

const elements = ingredients.map((named) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = named;
  itemEl.classList.add('item');

  return itemEl;
  });

  ingridientsEl.append(...elements);
