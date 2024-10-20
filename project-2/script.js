let timer;
let seconds = 0;
let isRunning = false;

// Selecting elements from the DOM
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapTimes = document.getElementById('lapTimes');

// Start the timer
startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
});

// Pause the timer
pauseButton.addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
});

// Reset the timer
resetButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    display.innerHTML = '00:00:00';
    lapTimes.innerHTML = ''; // Clear the lap times
});

// Record a lap time
lapButton.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = formatTime(seconds);
        const li = document.createElement('li');
        li.innerText = lapTime;
        lapTimes.appendChild(li);
    }
});

// Update the displayed time
function updateTime() {
    seconds++;
    display.innerHTML = formatTime(seconds);
}

// Format time in HH:MM:SS
function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

// Add leading zero if needed
function pad(num) {
    return num < 10 ? '0' + num : num;
}
