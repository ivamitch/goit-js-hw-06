const inputName = document.getElementById('name-input');
const spanName = document.getElementById('name-output');

inputName.addEventListener('input', (event) => {
    const name = event.target.value.trim();

    if (name === '') {
        spanName.textContent = 'Anonymous';
      } else {
        spanName.textContent = name;
      }  
})
