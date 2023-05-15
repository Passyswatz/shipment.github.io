  document.getElementById("userRegister").addEventListener('submit', userRegister);
    function userRegister(e){
    e.preventDefault();
                 
    let username = document.getElementById('username').value;   
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let state = document.getElementById('state').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;
    fetch("https://nbtms.pythonanywhere.com/api/staff/register/",{
        method:'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type' : 'application/json'
        },
        body:JSON.stringify({username:username,email:email,phone:phone,address:address,state:state,password:password,password2:password2})
        } )
       .then((res) => {
    
     if(res.status === 201){
         alert('registration successful')
            window.location.replace("index.html");
            res.json().then((result)=>{
                console.log(result);
    
            })
 }
     else
     { 
  alert('invalid user info')
     return;
    }})
}


