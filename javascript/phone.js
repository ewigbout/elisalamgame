window.PHONE = {
    displayDate: "Jan 31, 2013",
    displayTime: undefined,
    battery: 50,
    // TODO: test battery natural degradation
    batteryDegradationVelocity: 1 / 1000, //default natural degradation: 1% per 1 min
};

window.CONTACTS = [
    {
        name: "Mark",
        img: "assets/phone/unknown_caller.png"
    },
    {
        name: "Mom",
        img: "assets/phone/mom.png"
    },
    {
        name: "Sister",
        img: "assets/phone/unknown_caller.png"
    },
    {
        name: "hotel front desk",
        img: "assets/phone/unknown_caller.png"
    },
    {
        name: "911",
        img: "assets/phone/unknown_caller.png"
    },
]

function takePhone() {
    loadContacts();
    document.getElementById("mobile-phone-text-button").style.display = "none";
    document.getElementById("phone").style.display = "block";
}

function hidePhone() {
    document.getElementById("phone").style.display = "none";
    document.getElementById("mobile-phone-text-button").style.display = "block";
}

function loadContacts() {
    let contactsTable = document.getElementById("contacts-table");
    contactsTable.innerHTML="";

    window.CONTACTS.forEach((contact) => {
        let contactRow = document.createElement("tr");
        contactRow.className = "contacts-row";

        let contactImage = document.createElement("img");
        contactImage.src=contact.img;
        contactImage.className = "person-icon-small";

        let imgTd = document.createElement("td");
        imgTd.className = "contacts-img";
        imgTd.appendChild(contactImage);

        let nameTd = document.createElement("td");
        nameTd.className = "contacts-name";
        nameTd.innerHTML = contact.name;

        contactRow.appendChild(imgTd);
        contactRow.appendChild(nameTd);

        contactsTable.appendChild(contactRow);
    })

}