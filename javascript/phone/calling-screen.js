function callInProgress(person) {
    stopBeep();
    displayContactCalling(person);
    document.getElementById("calling-status").innerHTML = "Connected";
    document.getElementById("calling-timer").style.display = "block";
    hideGreenButton();
    window.PHONE.callConnected = true;
}

function incomingCall(person) {
    displayContactCalling(person);
    document.getElementById("calling-status").innerHTML = "Incoming call";
    document.getElementById("calling-timer").style.display = "none";
    showGreenButton(() => callInProgress(person));
    showRedButton();
    window.PHONE.callConnected = false;
}

function outgoingCall(person) {
    displayContactCalling(person);
    document.getElementById("calling-status").innerHTML = "Outgoing call";
    showRedButton();
    hideGreenButton();
    waitForAnswer(person, 3);
    window.PHONE.callConnected = false;
}

function waitForAnswer(person, waitSeconds) {
    playBeep();
    setInterval(() => {
        callInProgress(person)
    }, waitSeconds * 1000);
}

function showGreenButton(callback) {
    document.getElementById("pick-up-the_call-contacts").style.display = "block";
    document.getElementById("pick-up-the_call-contacts").onclick = callback;
}

function hideGreenButton() {
    document.getElementById("pick-up-the_call-contacts").style.display = "none";
}

function showRedButton() {
    document.getElementById("drop-the-call-contacts").style.display = "block";
    document.getElementById("drop-the-call-contacts").onclick = endCall;
}

function displayContactCalling(person) {
    hideEverything();
    document.getElementById("phone-call").style.display = "block";
    document.getElementById("calling-person-name").innerHTML = person.name;
    document.getElementById("calling-person-img").src = person.img;
}

function endCall() {
    playBeep();
    clearDialog();
    PHONE.callConnected = false;
    showMainMenu();
}

function initPhoneSoundsFromSettings() {
    let audio = document.getElementById("beep");
    audio.src = window.sounds.phone.beep;
}

function playBeep() {
    let audio = document.getElementById("beep");
    audio.play();
}

function stopBeep() {
    let audio = document.getElementById("beep");
    audio.pause();
}