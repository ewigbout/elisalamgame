function callNumber() {
    if (window.dial_number === "") {
        return;
    }
    hideEverything();
    document.getElementById("call-number").style.display = "none";
    document.getElementById("drop-the-call").style.display = "block";
    document.getElementById("phone-call").style.display = "block";
    document.getElementById("calling-person-name").innerHTML = window.dial_number;
    document.getElementById("calling-person-img").src = "assets/phone/unknown_caller.png";
}

function showDialingScreen() {
    hideEverything();
    document.getElementById("call-number").style.display = "block";
    document.getElementById("drop-the-call").style.display = "none";
    window.dial_number = "";
    document.getElementById("dial-number").innerHTML = window.dial_number;
    document.getElementById("dialing-screen").style.display = "block";
}

function pressNumberButton(n) {
    window.dial_number = window.dial_number + n;
    document.getElementById("dial-number").innerHTML = window.dial_number;
}