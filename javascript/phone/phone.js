window.PHONE = {
    displayDate: "Jan 31, 2013",
    displayTime: undefined,
    battery: 50,
    // TODO: test battery natural degradation
    batteryDegradationVelocity: 1 / 1, //default passive degradation: 1% per 1 sec
    outgoingCall: false,
    callConnected: false,
    dialingTimer: 0,
    callTimer: 0
};

// TODO: MOM = {} etc
window.CONTACTS = {
    MARK: {
        name: "Mark",
        img: "assets/phone/unknown_caller.png",
    },
    MOM: {
        name: "Mom",
        img: "assets/phone/mom.png",
    },
    SISTER:
        {
            name: "Sister",
            img: "assets/phone/unknown_caller.png"
        }
}

window.dial_number = "";

function hideEverything() {
    document.getElementById("phone-menu").style.display = "none";
    document.getElementById("dialing-screen").style.display = "none";
    document.getElementById("phone-call").style.display = "none";
    document.getElementById("contacts").style.display = "none";
}

function showMainMenu() {
    hideEverything();
    document.getElementById("phone-menu").style.display = "block";
}

function takePhone() {
    if (window.PHONE.battery > 1) {
        document.getElementById("mobile-phone-text-button").style.display = "none";
        document.getElementById("phone").style.display = "block";
        showMainMenu();
    }
}

function hidePhone() {
    document.getElementById("phone").style.display = "none";
    document.getElementById("mobile-phone-text-button").style.display = "block";
}


function updatePhoneHeader() {
    document.getElementById("phone-current-date").innerHTML = window.PHONE.displayDate + "&nbsp&nbsp" + formatDate(window.PHONE.displayTime);
    document.getElementById("phone-battery").innerHTML = Math.floor(window.PHONE.battery) + "% battery";
}