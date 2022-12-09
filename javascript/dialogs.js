window.dialog = {
    history: [],
    options: []
}

function refreshDialogHistoryDisplay() {
    window.dialog.history.forEach((d) => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = "<b>" + d.name + " : </b>" + d.words;
        document.getElementById("dialogs-table").appendChild(tr);
    })
}

function refreshDialogOptions() {
    window.dialog.options.forEach((dialogOption) => {
        let btn = document.createElement("button");
        btn.innerHTML = dialogOption;
        btn.className = "dialog-option-button";
        btn.onclick = () => answer(dialogOption);
        document.getElementById("dialogs-options").appendChild(btn);
    });

}
function answer(dialogOption) {
    window.dialog.history.push({
        name: window.ELISA.name,
        words: dialogOption
    });
    refreshDialog();
}
function refreshDialog() {
    document.getElementById("dialogs-table").innerHTML = "";
    document.getElementById("dialogs-options").innerHTML = "";
    refreshDialogHistoryDisplay();
    refreshDialogOptions();
}

function clearDialog() {
    document.getElementById("dialogs-table").innerHTML = "";
    document.getElementById("dialogs-options").innerHTML = "";
}

function loadMomDialog(id) {
    clearDialog();
    window.dialog.history = window.DIALOGS_HISTORY.MOM.find((thread) => {
        return thread.id === id;
    }).history;
    refreshDialog();
}