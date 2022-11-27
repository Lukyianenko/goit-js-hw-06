const allCatedories = document.querySelectorAll('.item');
console.log(allCatedories);
console.log("Number of categories", allCatedories.length);

for (const item of allCatedories) {
    const titleEl = item.querySelector('h2');
    const allUnderCategories = item.querySelectorAll('li');

    console.log('Category:', titleEl.textContent);
    console.log('Elements:', allUnderCategories.length);
}


