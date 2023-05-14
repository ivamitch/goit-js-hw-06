let counterValue = 0;

const valueSpan = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    counterValue--;
    valueSpan.innerHTML = counterValue;
})

incrementBtn.addEventListener('click', () => {
    counterValue++;
    valueSpan.innerHTML = counterValue;
  });

  


  