function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const divEl = document.querySelector('.widget')
const spanEl = document.querySelector('.color')
const btnEl = document.querySelector('.change-color')
// console.dir(divEl)

btnEl.addEventListener('click', onClickChangeColor)

function onClickChangeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanEl.textContent = color;
}

