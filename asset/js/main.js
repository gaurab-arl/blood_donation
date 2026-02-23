import { loginregbtn, loginregsection, regloginbuttons, imagecontainer, pageimage } from "./data.js";
import { register } from "./register.js";
import { renderIndex } from "./event.js";
import { showforget } from "./dom.js";
import { showPage } from "./navigation.js";

renderIndex();

const forgetbtn = document.querySelector('.forget-btn');


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

    const registerbtn = document.createElement('button');
    const loginbtn = document.createElement('button');

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
