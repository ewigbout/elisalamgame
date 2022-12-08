function loadLocationAction(action) {
    let actionButton = document.createElement("button");
    let actionImage = document.createElement("img");
    actionImage.src = action.img;
    actionImage.className = "location-action-img";
    actionButton.type = "image";
    actionButton.name = action.name;
    actionButton.appendChild(actionImage);
    actionButton.className = "location-action-button";
    document.getElementById("location-actions").appendChild(actionButton);
}