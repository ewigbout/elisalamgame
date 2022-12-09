window.MARK = {
    callsCount: 0,
    elisaSaidHello: false,
    ignoreElisaCallsThreshold: 4,
    mental_state: "friendly"
}

//VERY_FIRST_CALL, FRIENDLY, CONFUSED, IGNORE
function markStrategy() {
    if (window.MARK.callsCount === 1) {
        return "VERY_FIRST_CALL";
    }
    if (window.MARK.callsCount >= window.MARK.ignoreElisaCallsThreshold) {
        return "IGNORE";
    }
    if (window.MARK.elisaSaidHello === false) {
        return "CONFUSED";
    } else {
        return "FRIENDLY";
    }
}