function updateDebug() {
    document.getElementById("debug-player-location").innerHTML = window.PLAYER.location.name;
    document.getElementById("debug-player-current-date").innerHTML = window.PLAYER.timeInGame + " sec in game (" +
        formatDate(new Date(window.PLAYER.currentRealTime)) + ")";
    document.getElementById("debug-elisa-current-date").innerHTML = formatDate(window.ELISA.currentTime) + " (" + window.ELISA.timeLeft + " min left)";
    document.getElementById("debug-phone-current-date").innerHTML = window.PHONE.displayDate + "&nbsp&nbsp" + formatDate(window.PHONE.displayTime);
    document.getElementById("debug-phone-battery").innerHTML = Math.floor(window.PHONE.battery) + "% battery";
}

function formatDate(dateObj) {
    return dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();
}