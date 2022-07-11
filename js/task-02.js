const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul");

const elements = ingredients.map((ingredient) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList.add("item");
  ingredientsItem.textContent = ingredient;
  
  return ingredientsItem;
});

ingredientsList.append(...elements);
