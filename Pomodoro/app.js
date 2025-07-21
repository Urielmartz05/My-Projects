// Variables for each section
const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const selectButtons = document.getElementsByClassName('select--button')

//Variables for select buttons
const pomodoro = document.getElementById('pomodoro-timer')
const shortbreak  = document.getElementById('short-timer');
const longBreak = document.getElementById('long-timer');

//Working Variables
let time = 25*60;

let timerWork = false;
let timerOn = null;

let pomodoroRestart = false;
let shortRestart = false;
let longRestart = false

pomodoro.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';

// Function for timer
function TimerUpdater(){

    timerWork = true;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    startButton.textContent = 'Pause';
    restartButton.style.display = 'inline-block'

    if (time > 0) {
        time--;
        timerOn = setTimeout(TimerUpdater, 1000)
    }

}

//Select Pomodoro
pomodoro.addEventListener('click', () => {
    clearTimeout(timerOn);
    time = 25*60;
    document.body.style.backgroundColor = 'red';
    timerDisplay.textContent = "25:00";
    startButton.style.color = 'red';
    startButton.textContent = 'Start';
    restartButton.style.display = 'none';
    
    for (let btn of selectButtons) {
        btn.style.backgroundColor = 'transparent';
    }
    pomodoro.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    pomodoroRestart = true;
    shortRestart = false;
    longRestart = false;
})

// Select ShortBreak
shortbreak.addEventListener('click', () => {
    clearTimeout(timerOn);
    document.body.style.backgroundColor = '#32a88d';
    time = 5 * 60;
    timerDisplay.textContent = "05:00";
    startButton.style.color = '#32a88d';
    startButton.textContent = 'Start';
    restartButton.style.display = 'none';

    for (let btn of selectButtons) {
        btn.style.backgroundColor = 'transparent';
    }
    shortbreak.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    
    pomodoroRestart = false;
    shortRestart = true;
    longRestart = false;
})

//Select LongBreak
longBreak.addEventListener('click', () => {
    clearTimeout(timerOn);
    document.body.style.backgroundColor = '#3273a8';
    time = 10 * 60;
    timerDisplay.textContent = "10:00";
    startButton.style.color = '#3273a8';
    startButton.textContent = 'Start';
    restartButton.style.display = 'none';

    for (let btn of selectButtons) {
        btn.style.backgroundColor = 'transparent';
    }
    longBreak.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';


    pomodoroRestart = false;
    shortRestart = false;
    longRestart = true;
})

//Start timer button
startButton.addEventListener('click', () => {
    if (!timerWork) {
        TimerUpdater();
    }
    else{
        timerWork = false;
        clearTimeout(timerOn);
    }
})

//Restart timer button
restartButton.addEventListener('click', () => {
    
    if (pomodoroRestart) {
        timerDisplay.textContent = '25:00';
        time = 25*60
        clearTimeout(timerOn);
        
    }

    else if (shortRestart) {
        timerDisplay.textContent = '05:00';
        time = 5*60
        clearTimeout(timerOn);
    }

    else if (longRestart) {
        timerDisplay.textContent = '10:00';
        time = 10*60
        clearTimeout(timerOn);
    }

    startButton.textContent = 'Start';
    restartButton.style.display = 'none';
    timerWork = false;

})