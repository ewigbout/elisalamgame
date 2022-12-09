function loadLocationAction(action) {
    let actionButton = document.createElement("button");
    let actionImage = document.createElement("img");
    actionImage.src = action.img;
    actionImage.className = "location-action-img";
    actionButton.type = "image";
    actionButton.name = action.name;
    actionButton.onclick = () => {
        window.AllLocations.INTERACT.img = action.img;
        window.AllLocations.INTERACT.nextLocations = [{
            name: window.PLAYER.location,
            label: "<<"
        }];
        goTo(window.AllLocations.INTERACT);
        document.getElementById("location-actions").innerHTML = action.text;
        action.callback();
    }
    actionButton.appendChild(actionImage);
    actionButton.className = "location-action-button";
    document.getElementById("location-actions").appendChild(actionButton);
}