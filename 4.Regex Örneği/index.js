let signupForm = document.querySelector('.signupForm');
let username = document.querySelector('#username');
const pattern = /^[a-z]{6,10}$/;
signupForm.addEventListener('submit',e=>{
    e.preventDefault();
    let sonuc = pattern.test(signupForm.username.value);
    if(sonuc){
        alert('Başarılı');
    }else{
        alert('Başarısız');
    }
})

