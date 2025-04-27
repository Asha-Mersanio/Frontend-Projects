var ed;
function login1(){
     var email=document.getElementById('eid').value;
     var password=document.getElementById('pwd').value;
     var output=document.getElementById('demo').value;
     var w=" Entered  The  Required  Field  ";
     var email_regex=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
     var password_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     if((password!="") && (!password.match(password_regex)))
     {  
        ed="Password does not match"
        document.getElementById('pwd').style.borderColor="red";
        document.getElementById('demo').innerHTML=ed;
     }
      if(!email.match(email_regex)){
         ed="Email does not match"
         document.getElementById('eid').style.borderColor="red";
         document.getElementById('demo').innerHTML=ed;

         
     }
     if((email=="") && (password==""))
     {  
        document.getElementById('eid').style.borderColor="red";
        document.getElementById('pwd').style.borderColor="red";
        document.getElementById('demo').innerHTML=w;

     }
     else if(email.match(email_regex) && (password.match(password_regex)))
     { 
	     var e=document.getElementById('eid').value;
	     var p=document.getElementById('pwd').value;
    	const array={"email":e,"password":p};
    	const output=JSON.stringify(array);
    	const xhr=new XMLHttpRequest();
    	xhr.open("POST","login.php",true);
    	xhr.setRequestHeader('content-type', 'application/json; charset=UTF-8');
    	xhr.send(output);
    	  xhr.onreadystatechange = function () 
                {
    		    if(xhr.status === 200 && xhr.readyState == 4) 
                {        
                
                      console.log(xhr.responseText);
                      if(xhr.responseText=="password is correct" )
                      {
                      	  ed="Login Successfully";
                          document.getElementById('demo').innerHTML=ed;
                      	  window.location.href = "user.php";
                      }
                      else{
                            ed="Not able to login";
                            document.getElementById('pwd').style.borderColor="red";
                            document.getElementById('eid').style.borderColor="red";
                            document.getElementById("demo").innerHTML=ed;

                      }
                      var e=document.getElementById('eid').value;
                      var p=document.getElementById('pwd').value;
                      if(xhr.responseText=="This mail does not exist" && xhr.responseText!="This mail does not exist")
                      {
                      	document.getElementById('eid').style.borderColor="black";
                      } 
                     
            }      
                  
            }
        }
    }
    
  
    
function email(){
        var e=document.getElementById('eid').value;
        if ( document.getElementById('eid').style.borderColor=="red") {
            document.getElementById('eid').style.borderColor="black";
            // document.getElementById('pwd').value="";
        }
    }
function Password(){
      var p=document.getElementById('pwd').value;
        if ( document.getElementById('pwd').style.borderColor=="red") {
            document.getElementById('pwd').style.borderColor="black";

}
}


