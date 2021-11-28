const loginForm = document.querySelector("#loginForm");
const greeting = document.querySelector("#greeting");
const loginFormInput = document.querySelector("#loginForm input");
const HIDDEN_CLASS = "hidden";
const NAME_KEY = "username";

function loginClick(event) {
    event.preventDefault();
    const username = loginFormInput.value;
    localStorage.setItem(NAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASS);
    greetDraw(username); 
}

function greetDraw(username) {
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerHTML = `Hello ${username}`;
}

const localName = localStorage.getItem(NAME_KEY);

if(localName === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener('submit',loginClick);
}else{
    greetDraw(localName);
}