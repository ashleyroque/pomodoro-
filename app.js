// Audio and DOM Elements
const bells = new Audio('./sounds/bell.wav');
const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');
let myInterval;
let state = true;

// Timer Function
const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent);

  if (state) {
    state = false;
    let totalSeconds = sessionAmount * 60;

    const updateSeconds = () => {
      const minuteDiv = document.querySelector('.minutes');
      const secondDiv = document.querySelector('.seconds');

      totalSeconds--;

      let minutesLeft = Math.floor(totalSeconds / 60);
      let secondsLeft = totalSeconds % 60;

      // Format seconds to always show two digits
      secondDiv.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
      minuteDiv.textContent = minutesLeft;

      // End of timer
      if (minutesLeft === 0 && secondsLeft === 0) {
        bells.play();
        clearInterval(myInterval);
        state = true; // Reset state to allow restarting the timer
      }
    };

    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert('Session has already started.');
  }
};

// Event Listener
startBtn.addEventListener('click', appTimer);