const digits = "123456789ABCDEF";
let hexColor = "#";

function colorSelector(){
    for (let i = 0; i < 6; i++) {
        let colorDigits = Math.floor(Math.random() * 16);
        hexColor += digits[colorDigits];
    }

    return hexColor
}

const buttonChanger = document.getElementById('color-changer');
buttonChanger.addEventListener('click', colorSelector)

let hexText = document.getElementById('color-text');
hexText.innerText = buttonChanger();