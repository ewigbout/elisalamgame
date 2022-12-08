let isStatic = true;
window.images = {
    locations: {
        room: "assets/locations/room.png",
        hallway: "assets/locations/hallway.png",
        elevators_lobby: "assets/locations/elevators_lobby.png",
        elevator: "assets/locations/elevator.png",
        stairs: "assets/locations/room.png",
        ground_floor: "assets/locations/ground_floor.png"
    },
    actionable: {
        nightstand: "assets/actionable/nightstand.png",
        bag: "assets/actionable/bag.png",
        pillow: "assets/actionable/pillow.png",
        sink: "assets/actionable/sink.png",
        window: "assets/actionable/window.png"
    },
    phone: {
        calls: "",
        mom: ""
    }
}

// images from google drive
if (isStatic == false) {
    let base_url = "https://drive.google.com/uc?export=view&id=";
    window.images.locations = {
        room: base_url + "assets/locations/room.png",
        hallway: base_url + "assets/locations/hallway.png",
        elevators_lobby: base_url + "assets/locations/elevators_lobby.png",
        elevator: base_url + "assets/locations/elevator.png",
        stairs: base_url + "assets/locations/room.png",
        ground_floor: base_url + "assets/locations/ground_floor.png",
    }
}