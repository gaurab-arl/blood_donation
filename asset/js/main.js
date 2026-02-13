import { loginregbtn, loginregsection, regloginbuttons, imagecontainer } from "./data.js";
import { register } from "./register.js";

const pageimage = document.querySelector('.page-image');
const forgetbtn = document.querySelector('.forget-btn')

function showPage(page = 'home') {
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
    loginPage.style.display = 'block';
    pageimage.style.display = 'block';
    // Hide the Join Us button and show the reg/login buttons section
    if (loginregbtn) loginregbtn.style.display = 'none';
    if (regloginbuttons) regloginbuttons.style.display = 'flex';
  } 
  else if (page === 'home' && homePage) {
    homePage.style.display = 'block';
    // Show Join Us button and hide the dynamic buttons
    if (loginregbtn) loginregbtn.style.display = 'block';
    if (regloginbuttons) {
      regloginbuttons.style.display = 'none';
      // Clear any existing dynamic buttons
      regloginbuttons.innerHTML = '';
    }
    // Also hide the loginregsection's dynamically added buttons
    const dynButtons = document.querySelectorAll('.loginreg-dyn');
    dynButtons.forEach(btn => btn.remove());
  } 
  else if (page === 'register' && registerPage) {
    registerPage.style.display = 'block';
    // Hide Join Us button and show the reg/login buttons
    if (loginregbtn) loginregbtn.style.display = 'none';
    if (regloginbuttons) regloginbuttons.style.display = 'flex';
  } 
  else if (page === 'forget' && forgetPageElement) {
    forgetPageElement.style.display = 'block';
  }
}

function showforget() {
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

// Make sure forgetbtn exists before adding event listener
if (forgetbtn) {
  forgetbtn.addEventListener('click', () => {
    const email = document.querySelector('#forget-email')?.value;
    const password = document.querySelector('#forget-password')?.value;
    const confirmPassword = document.querySelector('#forget-confirm-password')?.value;
    const otp = document.querySelector('#forget-otp')?.value;

    if (!email || !password || !confirmPassword || !otp) {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = { email, password, otp };
    console.log("Password reset request:", userData);
    alert("Password reset submitted! (Check console for data)");

    // Hide forget page
    const forgetPageElement = document.querySelector('#forget-page');
    if (forgetPageElement) {
      forgetPageElement.style.display = 'none';
      if (pageimage) pageimage.style.display = 'block';
    }

    showPage('login');
  });
}

// Make functions globally accessible for inline event handlers
window.showPage = showPage;
window.showforget = showforget;
window.register = register;

// Initialize home page
if (document.querySelector('.home-page-switching')) {
  showPage('home');
}

if (loginregbtn) {
  loginregbtn.addEventListener('click', () => {
    // Remove any existing dynamic buttons first
    const existingBtns = document.querySelectorAll('.loginreg-dyn');
    existingBtns.forEach(btn => btn.remove());
    
    const registerbtn = document.createElement('button')
    const loginbtn = document.createElement('button')

    registerbtn.textContent = 'Register';
    loginbtn.textContent = 'Login';

    registerbtn.classList.add('register', 'loginreg-dyn');
    loginbtn.classList.add('register', 'loginreg-dyn');

    // Add them to the regloginbuttons section instead of loginregsection
    if (regloginbuttons) {
      regloginbuttons.appendChild(registerbtn);
      regloginbuttons.appendChild(loginbtn);
      regloginbuttons.style.display = 'flex';
    }

    // Hide the Join Us button
    loginregbtn.style.display = 'none';

    registerbtn.addEventListener('click', () => showPage('register'));
    loginbtn.addEventListener('click', () => showPage('login'));
  });
}