let signupForm = document.querySelector('.signupForm');
let username = document.querySelector('#username');

signupForm.addEventListener('submit',e=>{
    e.preventDefault();
    alert(signupForm.username.value);
})
