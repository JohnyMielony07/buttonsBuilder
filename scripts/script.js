const titleInput = document.getElementById('title');
const textColorInput = document.getElementById('text-color');
const backgroundColorInput = document.getElementById('bkg-color');
const borderRadiusInput = document.getElementById('border-radius');

const button = document.getElementById('button');

titleInput.addEventListener('input', () => {
    button.innerText = titleInput.value;
});

textColorInput.addEventListener('input', () => {
    button.style.color = textColorInput.value;
});

backgroundColorInput.addEventListener('input', () => {
    button.style.backgroundColor = backgroundColorInput.value;
})

borderRadiusInput.addEventListener('input', () => {
    button.style.borderRadius = borderRadiusInput.value + 'px';
})