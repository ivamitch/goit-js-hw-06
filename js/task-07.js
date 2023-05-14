const input = document.getElementById('font-size-control');
const text = document.getElementById('text')
// console.log(text)

input.addEventListener('input', onInputChange)

function onInputChange() {
    text.style.fontSize = `${input.value}px`
    console.log(input.value)
}


// function onInputChange () {
//     const fontSize = input.value + 'px';
//     text.style.fontSize = fontSize;
// }