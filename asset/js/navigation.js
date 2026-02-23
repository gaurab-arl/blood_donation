import { loginregbtn, regloginbuttons, pageimage } from "./data.js";

export function showPage(page = 'home') {
    const loginPage = document.querySelector('#login');
    const homePage = document.querySelector('#home');
    const registerPage = document.querySelector('#register-page');
    const forgetPageElement = document.querySelector('#forget-page');

    // Hide all pages
    if (loginPage) loginPage.style.display = 'none';
    if (homePage) homePage.style.display = 'none';
    if (registerPage) registerPage.style.display = 'none';
    if (forgetPageElement) forgetPageElement.style.display = 'none';

    // Show selected page
    if (page === 'login' && loginPage) {
        if (loginPage) loginPage.style.display = 'block';
        if (pageimage) pageimage.style.display = 'block';
        // Hide the Join Us button and show the reg/login buttons section
        if (loginregbtn) loginregbtn.style.display = 'none';
        if (regloginbuttons) regloginbuttons.style.display = 'flex';
    }
    else if (page === 'home' && homePage) {
        if (homePage) homePage.style.display = 'block';
        // Show Join Us button and hide the dynamic buttons
        if (loginregbtn) loginregbtn.style.display = 'block';
        if (regloginbuttons) {
            regloginbuttons.style.display = 'none';
            regloginbuttons.innerHTML = '';
        }
        // Also hide the loginregsection's dynamically added buttons
        const dynButtons = document.querySelectorAll('.loginreg-dyn');
        dynButtons.forEach(btn => btn.remove());
    }
    else if (page === 'register' && registerPage) {
        if (registerPage) registerPage.style.display = 'block';
        // Hide Join Us button and show the reg/login buttons
        if (loginregbtn) loginregbtn.style.display = 'none';
        if (regloginbuttons) regloginbuttons.style.display = 'flex';
    }
    else if (page === 'forget' && forgetPageElement) {
        if (forgetPageElement) forgetPageElement.style.display = 'block';
    }
}

// Make globally accessible for index.html inline handlers
window.showPage = showPage;
