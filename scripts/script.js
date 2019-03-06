const titleInput = document.getElementById('title');
const textColorInput = document.getElementById('text-color');
const backgroundColorInput = document.getElementById('bkg-color');
const borderRadiusInput = document.getElementById('border-radius');
const borderColorInput = document.getElementById('border-color');
const borderWidthInput = document.getElementById('border-width');
const hoverTextColorInput = document.getElementById('text-color-hover');

const btnRounded = document.getElementById('btn-rounded');
const btnSquare = document.getElementById('btn-square');
const btnEmpty = document.getElementById('btn-empty');
const generatedHtmlCont = document.getElementById('generatedHtml');
const generatedCssCont = document.getElementById('generatedCss');
const button = document.getElementById('button');


document.addEventListener('DOMContentLoaded', function () {
    generateCss();
    generateHtml('Button');

    btnRounded.addEventListener('click', () => {
        borderRadiusInput.value = 7;
        button.style.borderRadius = borderRadiusInput.value + 'px';
        generateCss();
    })

    btnSquare.addEventListener('click', () => {
        borderRadiusInput.value = 0;
        button.style.borderRadius = borderRadiusInput.value + 'px';
        generateCss();
    })

    btnEmpty.addEventListener('click', () => {
        borderRadiusInput.value = 0;
        button.style.borderRadius = borderRadiusInput.value + 'px';
        textColorInput.value = '#37b349';
        button.style.color = textColorInput.value;
        backgroundColorInput.value = '#ffffff';
        button.style.backgroundColor = backgroundColorInput.value;
        borderColorInput.value = '#37b349';
        button.style.borderColor = borderColorInput.value;
        borderWidthInput.value = 2;
        button.style.borderWidth = borderWidthInput.value + 'px';
        button.style.borderStyle = 'solid';
        generateCss();
    })

    titleInput.addEventListener('input', () => {
        button.innerText = titleInput.value;
        console.log(button);
        generateHtml(titleInput.value);
    });

    textColorInput.addEventListener('input', () => {
        button.style.color = textColorInput.value;
        generateCss();
    });

    backgroundColorInput.addEventListener('input', () => {
        button.style.backgroundColor = backgroundColorInput.value;
        generateCss();
    });

    borderRadiusInput.addEventListener('input', () => {
        button.style.borderRadius = borderRadiusInput.value + 'px';
        generateCss();
    });

    borderColorInput.addEventListener('input', () => {
        button.style.borderColor = borderColorInput.value;
        generateCss();
    })

    borderWidthInput.addEventListener('input', () => {
        button.style.borderWidth = borderWidthInput.value + 'px';
        button.style.borderStyle = 'solid';
        generateCss();
    })

    function generateHtml(text) {
        let generatedHtml = '<button class="myButton">' + text + '</button>';
        generatedHtmlCont.innerText = generatedHtml;
    }

    function generateCss() {
        let generatedCss = '.myButton {\n' +
            'padding: 8px 30px;\n' +
            'font-size: 1.8rem;\n' +
            'color: ' + textColorInput.value + ';\n' +
            'background-color: ' + backgroundColorInput.value + ';\n' +
            'border-radius: ' + borderRadiusInput.value + 'px;\n' +
            'border-color: ' + borderColorInput.value + ';\n' +
            'border-width: ' + borderWidthInput.value + 'px;\n' +
            'border-style: solid;\n}';
        generatedCssCont.innerText = generatedCss;
    }
})