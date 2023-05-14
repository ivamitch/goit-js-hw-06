
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item
const navLinksEl =  document.querySelectorAll('.item');
console.log(`Number of categories: ${navLinksEl.length}`)

navLinksEl.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryElements = category.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}\nElements: ${categoryElements}`)
})


