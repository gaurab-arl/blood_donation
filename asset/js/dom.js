import { imagecontainer, pageimage } from "./data.js";
import { showPage } from "./navigation.js";

export function showforget() {
    const loginPage = document.querySelector('#login');
    const forgetPageElement = document.querySelector('#forget-page');

    // Make sure login page is visible
    showPage('login');

    // Append forget page inside image container
    if (imagecontainer && forgetPageElement) {
        imagecontainer.appendChild(forgetPageElement);

        // Show forget page
        forgetPageElement.style.display = 'block';
        if (pageimage) pageimage.style.display = 'none';
    }
}