window.DIALOGS_HISTORY = {
    MOM:
        [
            {
                id: 0,
                history: [
                    {
                        name: window.ELISA.name,
                        words: "I wasn't sure I was able to carry my books on my own, but Mark... You know, the guy from the bookstore who loves Palahniuk?... Anyway, he delivered them to me after his shift! Can you believe that? So nice of him..",
                    },
                    {
                        name: "Mom",
                        words: "...(unclear)"
                    },
                    {
                        name: window.ELISA.name,
                        words: "No, he didn't come upstairs. He texted me and we met at the lobby"
                    },
                    {
                        name: "Mom",
                        words: "...(unclear)"
                    },
                    {
                        name: window.ELISA.name,
                        words: "TBD"
                    },
                    {
                        name: "Mom",
                        words: "...(unclear)"
                    },
                    {
                        name: window.ELISA.name,
                        words: "Sure, I'll call you! Bye!"
                    },
                    {
                        name: "Mom",
                        words: "...(unclear)"
                    },
                    {
                        name: window.ELISA.name,
                        words: "Don't worry, mom! I won't forget to take my pills."
                    },
                ]
            }
        ],
    MARK: [
    ]

}

function saveToMarkDialogHistory(dialog) {
    window.DIALOGS_HISTORY.MARK.push(dialog);
}

function callMark() {
    call(window.CONTACTS.MARK);
    let newId = window.DIALOGS_HISTORY.MARK.length;
    let dialog = {
        id: newId,
        history: [
        ]
    }
    let startDialogItem = {
        name: "Mark",
        words: "Hello"
    }
    window.dialog.history = [startDialogItem];
    window.dialog.options = ["Hello"];
    saveToMarkDialogHistory(dialog);
    refreshDialog();
}

function callMom() {
    call(window.CONTACTS.MARK);
}

function callSister() {
    call(window.CONTACTS.MARK);
}

