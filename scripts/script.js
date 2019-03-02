const titleInput = document.getElementById('title');
const textColorInput = document.getElementById('text-color');
const button = document.getElementById('button');


titleInput.addEventListener('input', () => {
    button.innerText = titleInput.value;
});

textColorInput.addEventListener('input', () => {
    button.style.color = textColorInput.value;
});