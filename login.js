const myform=document.getElementById('myform')
const email=document.getElementById('email')
const password=document.getElementById('password')
const output=document.getElementById('output')


myform.addEventListener('submit', (e)=>{
    e.preventDefault()

    console.log(email.value);

    
    if(JSON.parse(localStorage.getItem("key"))){
        let userMe=JSON.parse(localStorage.getItem("key"))

        if(userMe.email===email.value && userMe.password===password.value){
            output.innerHTML='<div class="alert alert-success" role="alert"> login successfully </div>'
            alert('welcome'+" "+userMe.firstName)
        }
        else{
            output.innerHTML='<div class="alert alert-danger" role="alert"> invalid email/password </div>'
           
        }
    }

   
})