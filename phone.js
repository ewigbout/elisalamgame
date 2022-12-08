window.PHONE = {
    displayDate: "Jan 31, 2013",
    displayTime: undefined,
    battery: 50,
    // TODO: test battery natural degradation
    batteryDegradationVelocity: 1 / 1000, //default natural degradation: 1% per 1 min
};

function takePhone() {
    document.getElementById("game-body").style.display = "none";
    document.getElementById("location-actions").style.display = "none";
    document.getElementById("phone").style.display = "block";
}

function hidePhone() {
    document.getElementById("game-body").style.display = "block";
    document.getElementById("location-actions").style.display = "block";
    document.getElementById("phone").style.display = "none";
}