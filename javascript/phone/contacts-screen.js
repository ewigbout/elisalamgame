function loadContacts() {
    let contactsTable = document.getElementById("contacts-table");
    contactsTable.innerHTML = "";
    loadContact(window.CONTACTS.MOM, () => outgoingCall(window.CONTACTS.MOM));
    loadContact(window.CONTACTS.MARK, () => callMark());
    loadContact(window.CONTACTS.SISTER, () => outgoingCall(window.CONTACTS.SISTER));
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

function showContacts() {
    loadContacts();
    hideEverything();
    document.getElementById("contacts").style.display = "block";
}