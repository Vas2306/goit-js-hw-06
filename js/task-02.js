const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const makeListIngredients = itemIngredients => {
  return itemIngredients.map(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    itemEl.classList.add('item');
    
    return itemEl;
  });
};

const elements = makeListIngredients(ingredients);
console.log(elements);

listIngredients.append(...elements);
  