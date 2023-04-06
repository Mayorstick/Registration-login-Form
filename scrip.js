// form validation
const myform=document.getElementById('myform')
const firstName=document.getElementById('firstName')
const lastName=document.getElementById('lastName')
const email=document.getElementById('email')
const password=document.getElementById('password')
const output=document.getElementById('output')


myform.addEventListener('submit',(e)=>{
    e.preventDefault()


    const details={
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        password:password.value
    }

    console.log(details);


    localStorage.setItem("key", JSON.stringify(details))
    


    if(firstName.value.length ===0){
        output.innerHTML='<div class="alert alert-danger" role="alert"> Pls enter ur first Name </div>'
    }
    else if(lastName.value.length ===0){
        output.innerHTML='<div class="alert alert-danger" role="alert"> Pls enter ur Last Name </div>'

    }
    else if(email.value.length===0){
        output.innerHTML='<div class="alert alert-danger" role="alert"> Pls enter ur email </div>'

    }
    else if(password.value.length===0){
        output.innerHTML='<div class="alert alert-danger" role="alert"> Pls enter ur password </div>'
    }

    else{
        output.innerHTML='<div class="alert alert-success" role="alert"> registration Complete </div>'
        window.location.href="login.html"
    }
} )





