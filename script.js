const clock = document.getElementById("clock");

function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", second: "2-digit" });
    clock.textContent = time;
}

setInterval(updateClock, 1000);