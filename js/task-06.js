const input = document.getElementById('validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener('blur', onImputBlurCheck)

function onImputBlurCheck() {
    const inputValue = input.value.trim()

    if (inputValue.length >= dataLength) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}

// function onImputBlurCheck(e) {
//     const inputValue = input.value.trim();
//     const bool = inputValue.length === dataLength;
//     e.target.classList.toggle('valid', bool);
//     e.target.classList.toggle('invalid', !bool);
// }