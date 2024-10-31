'use strict';

const currentTime = document.querySelector('.current-time p'); 
const newAlarm = document.querySelector('.new-alarm p');
const setAlarmButton = document.querySelector('.Set-alarm');
const hourInput = document.querySelector('input[placeholder="HH"]');
const minuteInput = document.querySelector('input[placeholder="MM"]');
const alarmSound = new Audio('./assets/audio/alarm-sound.mp3');

newAlarm.textContent = '00:00';

function getTime() {
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false 
    };

    let time = new Date().toLocaleTimeString('en-ca', options);
    return time;
}

function updateClock() {
    const currentTimeValue = getTime();
    currentTime.textContent = currentTimeValue;

    if (currentTimeValue === newAlarm.textContent) {
        playAlarm();
    }
}

function playAlarm() {
    alarmSound.play(); 
    currentTime.style.color = 'red'; 
}

function setAlarmTime() {
    const hours = hourInput.value;
    const minutes = minuteInput.value;

    if (hours && minutes) {
        newAlarm.textContent = `${hours}:${minutes}`;
    }

    hourInput.value = '';
    minuteInput.value = '';
}

function validateHourInput(event) {
    const value = event.target.value; // this will help me capture the current 
    //value of the input field when it is entered
    if (isNaN(value) || value < 0 || value > 24) {
        event.target.value = '';
    }
}

function validateMinuteInput(event) {
    const value = event.target.value;
    if (isNaN(value) || value < 0 || value > 59) {
        event.target.value = '';
    }
}

hourInput.addEventListener('input', validateHourInput);
minuteInput.addEventListener('input', validateMinuteInput);

updateClock();
setInterval(updateClock, 1000);

setAlarmButton.addEventListener('click', setAlarmTime);
