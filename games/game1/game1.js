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
