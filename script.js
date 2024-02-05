let counterValueEl = document.getElementById("counterValue");
let clickCount = localStorage.getItem("clickCount");
if (clickCount === null) {
    counterValueEl.textContent = 0;
} else {
    counterValueEl.textContent = clickCount;
}

function clickme() {
    let prevousCounterVal = counterValueEl.textContent;
    let updatedCounterVal = parseInt(prevousCounterVal) + 1;
    localStorage.setItem("clickCount", updatedCounterVal);
    counterValueEl.textContent = updatedCounterVal;
}