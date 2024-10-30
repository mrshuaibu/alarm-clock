'use strict';

const currentTime = document.querySelector('.current-time p'); 
const newAlarm = document.querySelector('.new-alarm p');
const setAlarmButton = document.querySelector('.Set-alarm');
const hourInput = document.querySelector('input[placeholder="HH"]');
const minuteInput = document.querySelector('input[placeholder="MM"]');
const alarmSound = new Audio('path/to/your/alarm-sound.mp3');

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

updateClock();
setInterval(updateClock, 60000);

setAlarmButton.addEventListener('click', setAlarmTime);
