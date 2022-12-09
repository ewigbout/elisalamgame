window.PHONE = {
    displayDate: "Jan 31, 2013",
    displayTime: undefined,
    battery: 50,
    // TODO: test battery natural degradation
    batteryDegradationVelocity: 1 / 1000, //default natural degradation: 1% per 1 min
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

function showContacts() {
    loadContacts();
    hideEverything();
    document.getElementById("contacts").style.display = "block";
}

function endCall() {
    clearDialog();
    showMainMenu();
}

function showMainMenu() {
    hideEverything();
    document.getElementById("phone-menu").style.display = "block";
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

function call(person) {
    hideEverything();
    document.getElementById("phone-call").style.display = "block";
    document.getElementById("calling-person-name").innerHTML = person.name;
    document.getElementById("calling-person-img").src = person.img;
}

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

function takePhone() {
    document.getElementById("mobile-phone-text-button").style.display = "none";
    document.getElementById("phone").style.display = "block";
    showMainMenu();
}

function hidePhone() {
    document.getElementById("phone").style.display = "none";
    document.getElementById("mobile-phone-text-button").style.display = "block";
}

function loadContacts() {
    let contactsTable = document.getElementById("contacts-table");
    contactsTable.innerHTML = "";
    loadContact(window.CONTACTS.MOM, callMom);
    loadContact(window.CONTACTS.MARK, callMark);
    loadContact(window.CONTACTS.SISTER, callSister);
}

function loadContact(contact, callback) {
    let contactsTable = document.getElementById("contacts-table");
    let contactRow = document.createElement("tr");
    contactRow.className = "contacts-row";

    let contactImage = document.createElement("img");
    contactImage.src = contact.img;
    contactImage.className = "person-icon-small";

    let imgTd = document.createElement("td");
    imgTd.className = "contacts-img";
    imgTd.appendChild(contactImage);

    let nameTd = document.createElement("td");
    nameTd.className = "contacts-name";
    nameTd.innerHTML = contact.name;

    contactRow.appendChild(imgTd);
    contactRow.appendChild(nameTd);
    contactRow.onclick = callback;

    contactsTable.appendChild(contactRow);
}