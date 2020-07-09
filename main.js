// User Login

let passwords = {
    seragelgamal: 'elephant candy',
    bob2005: 'password123',
    theman: "I'm the man",
}

// HTML Element
let loginBtnEl = document.getElementById('login-btn');
let signUpButton = document.getElementById('signup-btn');
let usernameInputEl = document.getElementById('username-in');
let passwordInputEl = document.getElementById('password-in');
let feedbackEl = document.getElementById('feedback');

// Event Listener
loginBtnEl.addEventListener('click', login);
signUpButton.addEventListener('click', signUp);

// Event Function
function login() {
    // Get User Login Input
    if (passwords[usernameInputEl.value] == undefined) {
        feedbackEl.innerHTML = 'Invalid Username';
    } else if (passwords[usernameInputEl.value] == passwordInputEl.value) {
        feedbackEl.innerHTML = 'Login Successful';
    } else {
        feedbackEl.innerHTML = 'Invalid Password';
    }
}

function signUp() {
    if (passwords[usernameInputEl.value] == undefined) {
        passwords[usernameInputEl.value] = passwordInputEl.value;
        feedbackEl.innerHTML = 'Signup Successful';
    } else {
        feedbackEl.innerHTML = 'Username Taken';
    }

}