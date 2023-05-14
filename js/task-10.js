function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const divBoxes = document.getElementById('boxes')
console.log(divBoxes)

createBtn.addEventListener('click', function() {
  var input = document.querySelector('input[type="number"]');
  var amount = Number(input.value);

  createBoxes(amount);
})

destroyBtn.addEventListener('click', function() {
  divBoxes.innerHTML = '';
})

function createBoxes(amount) {
  var initialSize = 30;

  for (var i = 0; i < amount; i++) {
    var size = initialSize + i * 10;
    var color = getRandomHexColor();
    var box = document.createElement('div');

    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = color;

    divBoxes.appendChild(box);
  }
}



