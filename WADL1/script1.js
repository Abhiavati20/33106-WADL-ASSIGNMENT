const labels =document.querySelectorAll('.form-control label');
labels.forEach(label=>{
    label.innerHTML=label.innerText
        .split('')
        .map((letter,index)=>`<span style="transition-delay:${index*90}ms">${letter}</span>`)
        .join('')
})

function register(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let pw = document.getElementById('pw');
    let pw1 = document.getElementById('pw1');
    if(pw.value !== pw1.value)
    {
        alert('Passwords not matching');
    }
    else{
        localStorage.setItem('email', email.value);
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

function login(){
    let email = document.getElementById('email');
    let pw = document.getElementById('pw');
    let localEmail = localStorage.getItem('email');
    let localPw = localStorage.getItem('pw');
    console.log(pw,localPw,pw===localPw)
    console.log(email,localEmail,email===localEmail)
    if(email===localEmail && pw === localPw){
        alert('Your account has been created');
    }else{
        alert('Invalid credentials');
    }

}