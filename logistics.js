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
         alert('login successful')
            window.location.replace("login.html");
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


document.getElementById("userLogin").addEventListener('submit', userLogin);
            
            function userLogin(e){
                e.preventDefault();
                let username = document.getElementById('username').value;   
                
                let password = document.getElementById('password').value;
            
            fetch("https://nbtms.pythonanywhere.com/api/staff/login/",{
                method:'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type' : 'application/json',
                    
                },
                body:JSON.stringify({username:username,password:password})
                
             } )

 .then((res) => {
    
     if(res.status === 200){
 


    sessionStorage.setItem ('token' , res.token);
    sessionStorage.setItem ("username", res.user);
    sessionStorage.setItem ("email", res.email);
    sessionStorage.setItem ("phone", res.phone);
    sessionStorage.setItem ("user_id", res.user_id);

    if (username == "passyswatz" && password =="Pius?eze?10"){
        alert('login successful')
        window.location = "dashboard.html";
       
    }
       
        
     else {
        document.getElementById("demo").innerHTML = 'wrong crendentials';
        
}

} })}


       
        
    
   