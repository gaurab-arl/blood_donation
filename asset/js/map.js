import { mapframe, locationInput, bloodTypeSelect } from "./data.js";

export function updateMap() {
    const location = locationInput.value;
    const bloodType = bloodTypeSelect.value;
    const searchQuery = 'blood bank near' + location + bloodType;

    if (location === "" || bloodType === "") {
        alert("Please enter location and blood type");
        return;
    }
    mapframe.src = "https://maps.google.com/maps?q=" + encodeURIComponent(searchQuery) + "&output=embed";

}