const categoriesElement = document.querySelectorAll(".item");
const numberCategoriesElement = categoriesElement.length;

console.log("Number of categories:", numberCategoriesElement);

categoriesElement.forEach(function (element) {
  const nameOfCategory = element.querySelector("h2");
  const numberOfElements = element.querySelectorAll("li");
  
  console.log(`Category: ${nameOfCategory.textContent}`);
  console.log(`Elements: ${numberOfElements.length}`);
});
