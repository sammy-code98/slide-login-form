const signUpButton =document.getElementById('signUp');
const signInButton =document.getElementById('signIn');
const container =document.getElementById('container');
//ADD EVENT LISTENERS
signUpButton.addEventListener('click',() => container.classList.add('right-panel-active'));


signInButton.addEventListener('click',() => container.classList.remove('right-panel-active'));