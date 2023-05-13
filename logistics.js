  document.getElementById("userRegister").addEventListener('submit', userRegister);
    function userRegister(e){
    e.preventDefault();
                 
    let username = document.getElementById('username').value;   
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phoneNumber').value;
    let address = document.getElementById('address').value;
    let state = document.getElementById('state').value;
    let password = document.getElementById('password').value;
    let ComfirmPassword = document.getElementById('ComfirmPassword').value;
    fetch("https://nbtms.pythonanywhere.com/api/staff/register/",{
        method:'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type' : 'application/json'
        },
        body:JSON.stringify({username:username,email:email,phone:phone,address:address,state:state,password:password,ComfirmPassword:ComfirmPassword})
        } )
            
     .then((res) => res.json())
    .then((result) => {
     document.getElementById("res").innerHTML = ("username" , result.username);
    document.getElementById("pes").innerHTML = ("Email already exists, please login");
     // document.getElementById("des").innerHTML = ("password", result.password);
    console.log(result);
     })
    .catch(error => console.log('error', error));  
        
            }
   