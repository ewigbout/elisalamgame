// calendar
function timer() {
    window.PLAYER.currentRealTime = Date.now();
    let diffMillis = window.PLAYER.currentRealTime - window.PLAYER.STARTTIME;
    window.PLAYER.timeInGame = Math.floor(diffMillis / 1000);
    window.ELISA.currentTime = new Date(window.ELISA.start_time + diffMillis);
    window.PHONE.displayTime = window.ELISA.currentTime;
    window.PHONE.battery = window.PHONE.battery - window.PHONE.batteryDegradationVelocity;
    window.ELISA.timeLeft = Math.floor((new Date(window.ELISA.end_time) - new Date(window.ELISA.currentTime)) / 60000);
    if (window.PHONE.outgoingCall === true && window.PHONE.callConnected === false) {
        window.PHONE.dialingTimer ++;
    } else {
        window.PHONE.dialingTimer = 0;
    }
    if (window.PHONE.callConnected) {
        window.PHONE.callTimer = window.PHONE.callTimer + 1;
    } else {
        window.PHONE.callTimer  = 0;
    }
    updateDebug();
    document.getElementById("calling-timer").innerHTML =  window.PHONE.callTimer;
    updatePhoneHeader();
    if (window.PHONE.battery < 1) {
        endCall();
        hidePhone();
    }
}

