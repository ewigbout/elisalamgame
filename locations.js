window.AllLocations = {
    HOMEROOM: {
        name: "homeroom",
        img: window.images.locations.room,
        actions: [{
            name: "drawer",
            img: window.images.actionable.nightstand
        },
            {
                name: "bed",
                img: window.images.actionable.pillow
            },
            {
                name: "sink",
                img: window.images.actionable.sink
            },
            {
                name: "luggage",
                img: window.images.actionable.bag
            },
            {
                name: "window",
                img: window.images.actionable.window
            },
        ],
        nextLocations: [{
            name: "hallway",
            label: "Exit room"
        }]
    },
    HALLWAY: {
        name: "hallway",
        img: window.images.locations.hallway,
        nextLocations: [{
            name: "homeroom",
            label: "Back to your hotel room"
        },
            {
                name: "elevator lobby",
                label: "Go to elevators"
            }
        ],
        actions: []
    },
    ELEVATOR_LOBBY: {
        name: "elevator lobby",
        img: window.images.locations.elevators_lobby,
        nextLocations: [{
            name: "hallway",
            label: "Back to hallway"
        },
            {
                name: "elevator",
                label: "Use elevator"
            },
            {
                name: "stairs",
                label: "Use stairs"
            }
        ],
        actions: []
    },
    ELEVATOR: {
        name: "elevator",
        img: window.images.locations.elevator,
        nextLocations: [
            {
                name: "elevator lobby",
                label: "Back to your floor"
            },
            {
                name: "ground floor lobby",
                label: "Down to ground floor"
            }
        ],
        actions: []
    },
    STAIRS: {
        name: "stairs",
        img: window.images.locations.stairs,
        nextLocations: [{
            name: "elevator lobby",
            label: "Back to your floor"
        },
            {
                name: "ground floor lobby",
                label: "Down to ground floor"
            }
        ],
        actions: []
    },
    GROUND_FLOOR_LOBBY: {
        name: "ground floor lobby",
        img: window.images.locations.ground_floor,
        nextLocations: [
            {
                name: "elevator",
                label: "Use elevator"
            },
            {
                name: "stairs",
                label: "Use stairs"
            }
        ],
        actions: []
    },
};


// TODO: switch - case
function getLocationByName(name) {
    if (name == "homeroom") {
        return window.AllLocations.HOMEROOM;
    }
    if (name == "hallway") {
        return window.AllLocations.HALLWAY;
    }
    if (name == "elevator lobby") {
        return window.AllLocations.ELEVATOR_LOBBY;
    }
    if (name == "elevator") {
        return window.AllLocations.ELEVATOR;
    }
    if (name == "stairs") {
        return window.AllLocations.STAIRS;
    }
    if (name == "ground floor lobby") {
        return window.AllLocations.GROUND_FLOOR_LOBBY;
    }
    // TODO: error handling
    return window.AllLocations.HOMEROOM;

}

function goTo(location) {
    window.PLAYER.location = location;
    document.getElementById("location-actions").innerHTML = "";
    document.getElementById("game-main-img").src = location.img;
    location.actions.forEach((action) => {
        let actionButton = document.createElement("button");
        let actionImage = document.createElement("img");
        actionImage.src = action.img;
        actionImage.className = "location-action-img";
        actionButton.type = "image";
        actionButton.name = action.name;
        actionButton.appendChild(actionImage);
        actionButton.className = "location-action-button";
        document.getElementById("location-actions").appendChild(actionButton);
    });
    document.getElementById("next-locations").innerHTML = "";
    location.nextLocations.forEach((locationOption) => {
        let locationOptionButton = document.createElement("button");
        locationOptionButton.innerHTML = locationOption.label;
        locationOptionButton.addEventListener("click", () => goTo(getLocationByName(locationOption.name)));
        locationOptionButton.className = "location-option-text-button";
        document.getElementById("next-locations").appendChild(locationOptionButton);
    });
}