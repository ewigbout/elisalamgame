// window.DIALOGS_HISTORY = {
//     MOM:
//         [
//             {
//                 id: 0,
//                 history: [
//                     {
//                         name: window.ELISA.name,
//                         words: "I wasn't sure I was able to carry my books on my own, but Mark... You know, the guy from the bookstore who loves Palahniuk?... Anyway, he delivered them to me after his shift! Can you believe that? So nice of him..",
//                     },
//                     {
//                         name: "Mom",
//                         words: "...(unclear)"
//                     },
//                     {
//                         name: window.ELISA.name,
//                         words: "No, he didn't come upstairs. He texted me and we met at the lobby"
//                     },
//                     {
//                         name: "Mom",
//                         words: "...(unclear)"
//                     },
//                     {
//                         name: window.ELISA.name,
//                         words: "TBD"
//                     },
//                     {
//                         name: "Mom",
//                         words: "...(unclear)"
//                     },
//                     {
//                         name: window.ELISA.name,
//                         words: "Sure, I'll call you! Bye!"
//                     },
//                     {
//                         name: "Mom",
//                         words: "...(unclear)"
//                     },
//                     {
//                         name: window.ELISA.name,
//                         words: "Don't worry, mom! I won't forget to take my pills."
//                     },
//                 ]
//             }
//         ],
//     MARK: [
//     ]
//
// }

// function saveToMarkDialogHistory(dialog) {
//     window.DIALOGS_HISTORY.MARK.push(dialog);
// }

function callMark() {
    call(window.CONTACTS.MARK);
    window.MARK.callsCount++;
    if (markStrategy() === "IGNORE") {
        endCall();
        return;
    }

    let markAnswer = "Hi, Elisa!"
    switch (markStrategy()) {
        case "VERY_FIRST_CALL":
            markDialogIteration("Hello", [{
                label: "Hello",
                text: "Hi! It's Elisa from the bookstore.",
                answerCallback: () => {
                    window.MARK.elisaSaidHello = true;
                }
            }]);
            break;
        case "CONFUSED":
            if (window.MARK.callsCount > 4) {
                window.MARK.ignoreElisaCalls = true;
            }
            markDialogIteration("Hello?", [{
                label: "Hello",
                text: "Hi! It's Elisa from the bookstore.",
                answerCallback: () => {
                    window.MARK.elisaSaidHello = true;
                }
            }]);
            break;
        case "FRIENDLY":
            markDialogIteration("Yes, Elisa?", [{
                label: "Hello",
                text: "Hi Mark!",
                answerCallback: () => {
                    window.MARK.elisaSaidHello = true;
                }
            }]);
            break;
    }
}

function markDialogIteration(mark, elisaOptions) {
    let dialogItem = {
        name: "Mark",
        words: mark
    }
    window.dialog.history.push(dialogItem);
    refreshDialogHistoryDisplay();
    window.dialog.options = elisaOptions;
    refreshDialogOptions();
}

function callMom() {
    call(window.CONTACTS.MARK);
}

function callSister() {
    call(window.CONTACTS.MARK);
}

