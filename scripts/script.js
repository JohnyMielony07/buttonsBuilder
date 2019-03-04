const titleInput = document.getElementById('title');
const textColorInput = document.getElementById('text-color');
const backgroundColorInput = document.getElementById('bkg-color');
const borderRadiusInput = document.getElementById('border-radius');
const borderColorInput = document.getElementById('border-color');
const borderWidthInput = document.getElementById('border-width');
const hoverTextColorInput = document.getElementById('text-color-hover');

const generatedHtml = document.getElementById('generatedHtml');
const button = document.getElementById('button');

titleInput.addEventListener('input', () => {
    button.innerText = titleInput.value;
    console.log(button);    
    generatedHtml.innerText = generateHtml(titleInput.value);
});

textColorInput.addEventListener('input', () => {
    button.style.color = textColorInput.value;
});

backgroundColorInput.addEventListener('input', () => {
    button.style.backgroundColor = backgroundColorInput.value;
});

borderRadiusInput.addEventListener('input', () => {
    button.style.borderRadius = borderRadiusInput.value + 'px';
});

borderColorInput.addEventListener('input', () => {
    button.style.borderColor = borderColorInput.value;
})

borderWidthInput.addEventListener('input', () => {
    button.style.borderWidth = borderWidthInput.value + 'px';
    button.style.borderStyle = 'solid';
})

let generateHtml = (text) => {
    let generatedHtml = '<button class="myButton">' + text + '</button>';
    return generatedHtml;
}
