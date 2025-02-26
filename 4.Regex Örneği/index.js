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

signupForm.username.addEventListener('keyup',e=>{
    // console.log(e.target.value);

    if(pattern.test(e.target.value)){
        
        signupForm.username.setAttribute('class','success');

    }else{
        signupForm.username.setAttribute('class','error');
    }

});