//Numbers
let numberA = 0;
let numberB = 0;

//Main variables
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.action-buttons');

//Action and operations buttons
const resetButton = document.getElementById('reset-button');
const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const divitionButton = document.getElementById('divition-button')
const timesButton = document.getElementById('times-button')
const equalButton = document.getElementById('equal-button');

//Boolean variables
let plus = false;
let minus = false;
let divition = false;
let times = false;

//Set display value in zero
display.textContent = "0";

//Function for verify text length in display
function Textlength(display, button){

    if(display.textContent == "0"){
        display.textContent = button.textContent;
    }
    
    else if(display.textContent.length == 12){
        return;
    }
    else {
        display.textContent += button.textContent
    }
}

//Addition function
function Addition(numberA, numberB){
    return numberA + numberB
}

//Minus function
function Minus(numberA, numberB){
    return numberA - numberB
}

//Times function
function Times(numberA, numberB){
    return numberA * numberB
}

//Divition function
function Divition(numberA, numberB){
    try {
        if(numberB === 0){
            throw new Error("Can't divide by zero")
        }
        const result = numberA / numberB
        return result
    } catch (error) {
        display.textContent = "Can't divide by zero";
        return "Can't divide by zero"
    }

}

//Set value of each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!isNaN(button.textContent) || button.textContent === ".") {
            Textlength(display, button);
        }

    });
});

//Operations buttons
resetButton.addEventListener('click', () => {
    display.textContent = "0";
    numberA = 0;
    numberB = 0;

    plus = false;
    minus = false;
    divition = false;
    times = false;
})

plusButton.addEventListener('click', () => {
    plus = false;
    if (!isNaN(display.textContent)) {
        numberA = Number(display.textContent);
        display.textContent = "0";
        plus = true;

    }
})

minusButton.addEventListener('click', () => {
    minus = false;
    if (!isNaN(display.textContent)) {
        numberA = Number(display.textContent);
        display.textContent = "0";
        minus = true;
    }
})

timesButton.addEventListener('click', () => {
    times = false;
    if (!isNaN(display.textContent)) {
        numberA = Number(display.textContent);
        display.textContent = "0";
        times = true;
    }

})

divitionButton.addEventListener('click', () => {
    divition = false;
    if (!isNaN(display.textContent)) {
        numberA = Number(display.textContent);
        display.textContent = "0";
        divition = true;
    }

})

equalButton.addEventListener('click', () =>{
    numberB = Number(display.textContent);
    if (plus) {
        display.textContent = Addition(numberA, numberB);
        plus = false;
    }

    else if(minus){
        display.textContent = Minus(numberA, numberB);
        minus = false;
    }

    else if(divition){
        display.textContent = Divition(numberA, numberB);
        divition = false;
    }

    else if(times){
        display.textContent = Times(numberA, numberB);
        times = false;
    }
})