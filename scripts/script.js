const titleInput = document.getElementById('title');
const buttonTitle = document.getElementById('button');

var buttonTitleChange = () => {    
    titleValue = titleInput.value;
    console.log(titleValue);
    buttonTitle.innerText = titleValue;
}

titleInput.addEventListener('input', () => {
    buttonTitleChange();
});