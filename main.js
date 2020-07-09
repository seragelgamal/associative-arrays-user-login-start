// User Login

// HTML Element
let loginBtnEl = document.getElementById('login-btn');
let usernameInputEl = document.getElementById('username-in');
let passwordInputEl = document.getElementById('password-in');
let feedbackEl = document.getElementById('feedback');

// Event Listener
loginBtnEl.addEventListener('click', login);

// Event Function
function login() {
    // Get User Login Input
    let username = usernameInputEl.value;
    let password = passwordInputEl.value;

    // Test User Login Input
    if (username == 'admin' && password == 'password') {
        feedbackEl.innerHTML = 'Login Successful';
    } else {
        feedbackEl.innerHTML = 'Login Unsuccessful';
    }
}