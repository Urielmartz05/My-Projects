//Slider Variables

const redSlider = document.getElementById('red-slider');
const greenSlider = document.getElementById('green-slider');
const blueSlider = document.getElementById('blue-slider');

//Color sliders functions

function red(val){
    return val.value
}

function green(val){
    return val.value
}

function blue(val){
     return val.value
}

let colorSelected = ``;

//Inputs eventListeners

redSlider.addEventListener('input', function(){
   red(redSlider)
})

greenSlider.addEventListener('input', function(){
    green(greenSlider)
})

blueSlider.addEventListener('input', function(){
    blue(blueSlider)
})

document.body.style.backgroundColor = colorSelected