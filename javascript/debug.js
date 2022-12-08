function updateDebug() {
    document.getElementById("debug-player-location").innerHTML = window.PLAYER.location.name;
    document.getElementById("debug-player-currentdate").innerHTML = window.PLAYER.timeInGame + " sec in game (" +
        formatDate(new Date(window.PLAYER.currentRealTime)) + ")";
    document.getElementById("debug-elisa-currentdate").innerHTML = formatDate(window.ELISA.currentTime) + " (" + window.ELISA.timeLeft + " min left)";
    document.getElementById("debug-phone-currentdate").innerHTML = window.PHONE.displayDate + "&nbsp&nbsp" + formatDate(window.PHONE.displayTime);
    document.getElementById("debug-phone-battery").innerHTML = Math.floor(window.PHONE.battery) + "% battery";
}