// calendar
function timer() {
    window.PLAYER.currentRealTime = Date.now();
    let diffMillis = window.PLAYER.currentRealTime - window.PLAYER.STARTTIME;
    window.PLAYER.timeInGame = Math.floor(diffMillis / 1000);
    window.ELISA.currentTime = new Date(window.ELISA.STARTTIME + diffMillis);
    window.PHONE.displayTime = window.ELISA.currentTime;
    window.PHONE.battery = window.PHONE.battery - window.PHONE.batteryDegradationVelocity;
    window.ELISA.timeLeft = Math.floor((new Date(window.ELISA.ENDTIME) - new Date(window.ELISA.currentTime)) / 60000);
    updateDebug();
}

function formatDate(dateObj) {
    return dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();
}