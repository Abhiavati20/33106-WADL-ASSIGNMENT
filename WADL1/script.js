const labels =document.querySelectorAll('.form-control label');
labels.forEach(label=>{
    label.innerHTML=label.innerText
        .split('')
        .map((letter,index)=>`<span style="transition-delay:${index*90}ms">${letter}</span>`)
        .join('')
})
function login(){
    let email = document.getElementById('email');
    let pw = document.getElementById('pw');
    let localEmail = localStorage.getItem('email');
    let localPw = localStorage.getItem('pw');
    if(email.value===localEmail && pw.value === localPw){
        alert('Your account has been logged in');
    }else{
        alert('Invalid credentials');
    }

}