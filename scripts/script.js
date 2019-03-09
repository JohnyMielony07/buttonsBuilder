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
const generateButton = document.getElementById('generate-button');

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

    generateButton.addEventListener('click', () => {
        // generate text color   
        generateTextColor();
        generateBkgColor();
        generateBorderRadius();
        generateCss();
    })
})

const generateTextColor = () => {
    const colors = generateRgbColor();     
    button.style.color = 'rgb(' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + ')';
    textColorInput.value = rgbToHex(colors[0], colors[1], colors[2]);
}

const generateBkgColor = () => {
    const colors = generateRgbColor();     
    button.style.backgroundColor = 'rgb(' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + ')';
    backgroundColorInput.value = rgbToHex(colors[0], colors[1], colors[2]);
    button.style.borderColor = 'rgb(' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + ')';
    borderColorInput.value = rgbToHex(colors[0], colors[1], colors[2]);
}

const generateBorderRadius = () => {
    const randomNumber = Math.floor((Math.random() * 8));
    button.style.borderRadius = randomNumber + 'px';
    borderRadiusInput.value = randomNumber;
}

const generateRgbColor = () => {
    const red = Math.floor((Math.random() * 255));
    const green = Math.floor((Math.random() * 255));
    const blue = Math.floor((Math.random() * 255));
    return [red, green, blue];    
}

const rgbToHex = (r, g, b) => {
    colorsHex = [r, g, b].map(color => {
        const hex = color.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      });
    return '#' + colorsHex.join('');
}

