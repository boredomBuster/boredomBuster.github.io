let enteredCode = "";
// const correctCode = Math.floor(Math.random() * 1001);
const correctCode = "1234";

function pressKey(num) {
    if (enteredCode.length < 4) {
        enteredCode += num;
        document.getElementById("screen").innerText = enteredCode;
    }
}

function clearCode() {
    enteredCode = "";
    document.getElementById("screen").innerText = "Enter Code";
}

function submitCode() {
    if (enteredCode === correctCode) {
        document.getElementById("screen").innerText = "Unlocked!";
    } else {
        document.getElementById("screen").innerText = "Try Again";
        enteredCode = "";
    }
}

// Countdown starting time in seconds (60 seconds)
let totalTime = 60; // 1 minute = 60 seconds
// let timerElement = document.getElementById("timer");
document.getElementById("timer").innerText = "no more";

// // Function to update the timer display
// function updateTimerDisplay() {
//     timerElement.textContent = 'TotalTime';
// }

// // Function to start the countdown timer
// function startCountdown() {
//     const countdownInterval = setInterval(function () {
//         if (totalTime <= 0) {
//             clearInterval(countdownInterval); // Stop the countdown when it reaches 0
//             timerElement.textContent = "00:00"; // Display 00:00 when finished
//             alert("Time's up!"); // Optionally alert when the countdown reaches zero
//         } else {
//             totalTime--;
//             updateTimerDisplay();
//         }
//     }, 1000);
// }

// // Start the countdown when the page loads
// startCountdown();
