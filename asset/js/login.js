// Removed invalid react import


const emailInput = document.querySelector('#loginUser');
const passwordInput = document.querySelector('#loginPass');
const loginBtn = document.querySelector('#loginBtn');

const remember = document.querySelector('#remember');
const forgetPassword = document.querySelector('#forgetPassword');
const pagecontainer = document.querySelector('.page-image-container');

export function checkLoginCrenditals() {

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;
        if (email === '' || password === '') {
            alert(' please fill the emalil and password seciton')
            return;
        }
        /* for back end seciotn for storing the data */

    });
}


const forgetcontainer = document.createElement('div')

forgetcontainer.className = 'forget-container'
forgetcontainer.classList.add('page-image-container')

const forget_title = document.createElement('span')
forget_title.textContent = 'Forget Password'

const label_password = document.createElement('span')
const label_password_input = document.createElement('input')
label_password.textContent = 'Password'
label_password_input.type = 'password'
label_password_input.placeholder = 'Enter Password'


const label_conpassword = document.createElement('span')
const label_conpassword_input = document.createElement('input')
label_conpassword.textContent = 'Confirm Password'
label_conpassword_input.type = 'password'
label_conpassword_input.placeholder = 'Enter Confirm Password'

const forget_button = document.createElement('button')
forget_button.textContent = 'Reset Password'

const otp = document.createElement('input')
otp.type = 'number'
otp.placeholder = 'Enter OTP'



const pageWrapper = document.querySelector('.page-wrapper');
if (pageWrapper) {
    pageWrapper.appendChild(forgetcontainer);
}

forgetcontainer.appendChild(forget_title)
forgetcontainer.appendChild(label_password)
forgetcontainer.appendChild(label_password_input)
forgetcontainer.appendChild(label_conpassword)
forgetcontainer.appendChild(label_conpassword_input)
forgetcontainer.appendChild(forget_button)
forgetcontainer.appendChild(otp)

const forgetcontain = document.createElement('div')
forgetcontain.appendChild(forgetcontainer)

//  minimal css for forgetcontain , padding for it 

pageconatianer.appendChild(forgetconatin)

// Hide forget container by default
forgetcontainer.style.display = 'none';

forget_button.addEventListener('click', (e) => {
    e.preventDefault();
    const password = label_password_input.value;
    const conpassword = label_conpassword_input.value;
    if (password === '' || conpassword === '') {
        alert(' please fill the password and confirm password seciton')
        return;
    }
    /* for back end section for storing the data */

    // Switch back to login after "submit" (mocking success)
    pagecontainer.style.display = ''
    forgetcontainer.style.display = 'block'
});



forgetPassword.addEventListener('click', (e) => {
    e.preventDefault();
    pagecontainer.style.display = 'none'
    forgetcontainer.style.display = 'block'
});

