let focusButton = document.getElementById("button-focus");
let shortBreakButton = document.getElementById("button-shortbreak");
let longBreakButton = document.getElementById("button-longbreak");
let startButton = document.getElementById("button-start");
let pauseButton = document.getElementById("button-pause");
let resetButton = document.getElementById("button-reset");

let timerDisplay = document.getElementById("timer");

let timer;
let timeLeft = 1500;
let isPaused = true;
let countdown;

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
}

function startTimer() {
  if (isPaused) {
    isPaused = false;
    countdown = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      }
    }, 1000);
  }
}

function pauseTimer() {
  isPaused = true;
  clearInterval(countdown);
}

function resetTimer() {
  pauseTimer();
  timeLeft = 1500;
  updateDisplay();
}

focusButton.addEventListener("click", () => {
  resetTimer();
  timeLeft = 1500;
  updateDisplay();
});

shortBreakButton.addEventListener("click", () => {
  resetTimer();
  timeLeft = 300;
  updateDisplay();
});

longBreakButton.addEventListener("click", () => {
  resetTimer();
  timeLeft = 900;
  updateDisplay();
});

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

updateDisplay();
