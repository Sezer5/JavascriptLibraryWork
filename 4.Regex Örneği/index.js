let signupForm = document.querySelector('.signupForm');
let username = document.querySelector('#username');
let message = document.querySelector('.message');
const pattern = /^[a-z]{6,10}$/;
signupForm.addEventListener('submit',e=>{
    e.preventDefault();
    let sonuc = pattern.test(signupForm.username.value);
    if(sonuc){
        message.textContent='Başarılı';
    }else{
        message.textContent='Başarısız';
    }
})

