var ed='';
var em;
var ex;
// console.log(ed);
function Register()
 {      var ed="";
        var name=document.getElementById('name').value;
        var mobile=document.getElementById('mobile').value;
        var email=document.getElementById('email').value;
        var passwod=document.getElementById('pwd').value;
        var confirm_password=document.getElementById('repwd').value;
        var name_regex = /^[A-Za-z]+$/;
        var mobile_regex= /^\d{10}$/;
        var email_regex= /^[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(,|$)/;
        var password_regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        blurFunction();
        if((name=="") && (mobile=="") && (email=="") && (passwod=="") && (confirm_password==""))
        {    
             ed="Enter The Required Field";
             document.getElementById('name').style.borderColor="red";
             document.getElementById('mobile').style.borderColor="red";
             document.getElementById('email').style.borderColor="red";
             document.getElementById('pwd').style.borderColor="red";
             document.getElementById("repwd").style.borderColor="red";
             document.getElementById('demo').innerHTML=ed; 
        }
        else{
                 if(name=="")
                 {
                      ed+="Enter The Name<br>";
                      document.getElementById('name').style.borderColor="red";
                      document.getElementById('demo').innerHTML=ed;    
                 }
        else{
                if((name!="") && (!name.match(name_regex)))
                {   
                    ed+="Invalid Name1<br>";
                    document.getElementById('name').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed;
                }
            }
                if(mobile=="")
               {
                   ed+="Enter The Mobile<br>";
                   document.getElementById('mobile').style.borderColor="red";
                   document.getElementById('demo').innerHTML=ed; 
                }
        else{
                if((mobile!="") && (!mobile.match(mobile_regex)))
                {
                     ed+="Invalid Mobile number<br>";
                     document.getElementById('mobile').style.borderColor="red";
                     document.getElementById('demo').innerHTML=ed; 
                }
            }
                if(email=="")
                {
                    ed+="Enter The  EmailId<br>";
                    document.getElementById('email').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed; 
                }
        else{
                if((email!="") && (!email.match(email_regex)))
                {
                   ed+="Invalid Email<br>";
                    document.getElementById('email').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed; 
                }
            }
                if(passwod=="")
                {
                    ed+="Enter The  Password<br>";
                    document.getElementById('pwd').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed; 
                }
        else{
                if((passwod!="") && (!passwod.match(password_regex)))
                {
                    ed+="Invalid Password<br>";
                    document.getElementById('pwd').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed; 
                }
            }
                if(confirm_password=="") 
                {
                    ed+="Enter The  Retype-password<br>";
                    document.getElementById('repwd').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed;
                }
        
               else if((!confirm_password.match(password_regex)) && (confirm_password!=""))
               {
                    ed+="Invalid confirm password";
                    document.getElementById('repwd').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed;

               }
        
        else{
                if(!name.match(name_regex)) 
                 {
                   
                   document.getElementById('name').style.borderColor="red";
                   document.getElementById('demo').innerHTML="Invalid Name2";
                 }
        else{
                if(mobile=="") 
                {    
                    ed="Entered the Mobile Number";
                    document.getElementById('mobile').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed;
                }
        else{
                if((mobile!="") && (!mobile.match(mobile_regex)))
                {
                    ed="Mobile Number is mismatched";
                    document.getElementById('mobile').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed;
                }
            }     
                if(name=="")
                {
                    ed+="Enter The Name<br>";
                    document.getElementById('name').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed;
                }
        else{      
                if((name!="") && (!name.match(name_regex)))
                {
                    ed+="Name is mismatched";
                    document.getElementById('name').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed;
                }
            }
                if(email=="")
                {
                    ed+="Enter The  EmailId<br>";
                    document.getElementById('email').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed;
                }
        else{
                if((email!="") && (!email.match(email_regex)))
                {
                     ed+="Email is mismatched";
                     document.getElementById('email').style.borderColor="red";
                     document.getElementById('demo').innerHTML=ed; 
                }
            }
                if(passwod=="")
                {
                    ed+="Enter The  Password<br>";
                    document.getElementById('pwd').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed; 
                }              
        else{
                        
                if((passwod!="") && (!passwod.match(password_regex)))
                {
                    ed+="Password is mismatched";
                    document.getElementById('pwd').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed; 
                }       
            }
                if(confirm_password=="")
                {
                    ed+="Enter The  Retype-password<br>";
                    document.getElementById('repwd').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed;
                }
        
               else if((!confirm_password.match(password_regex)) && (confirm_password!=""))
               {
                    ed+="Invalid confirm password";
                    document.getElementById('repwd').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed;

               }

        else{ 
                if(!mobile.match(mobile_regex))
                {
                   
                    document.getElementById('mobile').style.borderColor="red";
                    document.getElementById('demo').innerHTML="Invalid Mobile Number";
                }
        else{
                if(email==" ")
                {   
                     ed+="Entered The Email address";
                     document.getElementById('email').style.borderColor="red";
                     document.getElementById('demo').innerHTML=ed;
                }
        else{
                if((email!="") && (!email.match(email_regex)))
                {  
                     ed+="Invalid Email";
                     document.getElementById('email').style.borderColor="red";
                     document.getElementById('demo').innerHTML=ed;
                }
            }
               if(mobile=="")
                {    
                    ed+="Entered the Mobile Number";
                    document.getElementById('mobile').style.borderColor="red";
                     document.getElementById('demo').innerHTML=ed;
                }
        else{
                 if((mobile!="") && (!mobile.match(mobile_regex)))
                 {
                    ed+="Invalid Mobile";
                    document.getElementById('mobile').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed;
                  }
            }
                if(passwod=="")
                {
                     ed+="Enter The  Password<br>";
                     document.getElementById('pwd').style.borderColor="red";
                     document.getElementById('demo').innerHTML=ed; 

                }
        else{
                 if((passwod!="") && (!passwod.match(password_regex)))
                    {
                         ed+="Invalid Password";
                         document.getElementById('pwd').style.borderColor="red";
                         document.getElementById('demo').innerHTML=ed; 

                    }
            }
                   if(confirm_password=="")
                    {
                         ed+="Enter The  Retype-password<br>";
                         document.getElementById('repwd').style.borderColor="red";
                         document.getElementById('demo').innerHTML=ed;
                    }
        // else{
        //             if((confirm_password!="") && (!confirm_password.match(password_regex))
        //             {
        //                 ed+="Invalid confirm password";
        //                 document.getElementById('repwd').style.borderColor="red";
        //                 document.getElementById('demo').innerHTML=ed;
        //             }
        //     }
                    if(name=="")
                    {
                        ed+="Enter The Name<br>";
                        document.getElementById('name').style.borderColor="red";
                        document.getElementById('demo').innerHTML=ed;
                    }
        else{
                    if((name!="") && (!name.match(name_regex)))
                    {
                        ed+="Invalid Name3";
                        document.getElementById('name').style.borderColor="red";
                        document.getElementById('demo').innerHTML=ed;

                    } 
        else{            
                    if(!email.match(email_regex))
                    {   
                        document.getElementById('email').style.borderColor="red";
                        document.getElementById('demo').innerHTML="Invalid Email address";
                    }
        else{
                    if(passwod=="")
                    {    
                        ed+="Entered The Password";
                        document.getElementById('pwd').style.borderColor="red";
                        document.getElementById('demo').innerHTML=ed;
                    }
        else{
                    if((passwod!="") && (passwod.match(password_regex)))
                    {
                        ed+="Invalid Password";
                        document.getElementById('pwd').style.borderColor="red";
                        document.getElementById('demo').innerHTML=ed;
                     }
            }
                    if(confirm_password=="")
                    {
                         ed+="Enter The  Retype-password<br>";
                         document.getElementById('repwd').style.borderColor="red";
                         document.getElementById('demo').innerHTML=ed;
                    }
        else{
                    if((confirm_password!="") && (!confirm_password.match(password_regex)))
                    {
                       ed+="Invalid confirm password";
                       document.getElementById('repwd').style.borderColor="red";
                       document.getElementById('demo').innerHTML=ed;
                    }
            }
                    if(name=="")
                    {
                       ed+="Enter The Name<br>";
                       document.getElementById('name').style.borderColor="red";
                        document.getElementById('demo').innerHTML=ed;
                    }                            
        else
            {
                    if((name!="") && (!name.match(name_regex)))
                    {
                        ed+="Name is mismatched";
                        document.getElementById('name').style.borderColor="red";
                        document.getElementById('demo').innerHTML=ed;
                    }
            }

                    if(mobile=="")
                    {
                            ed+="Enter The Mobile<br>";
                            document.getElementById('mobile').style.borderColor="red";
                            document.getElementById('demo').innerHTML=ed; 

                    }
        else{
                    if((mobile!="") && (mobile.match(mobile_regex)))
                    {    
                        ed+="Inalid Mobile";
                        document.getElementById('mobile').style.borderColor="red";
                        document.getElementById('demo').innerHTML=ed; 
                    }
            }
                    if(email=="")
                    {   
                        ed+="Entered The Email address";
                        document.getElementById('email').style.borderColor="red";
                        document.getElementById('demo').innerHTML=ed;
                    }
        // else{
        //             if((email!="") && (email.match(email_regex)))
        //             {
        //                 ed="Invalid Email";
        //                 document.getElementById('email').style.borderColor="red";
        //                 document.getElementById('demo').innerHTML=ed;
        //             }
        //     }                               
        else{
                    if(!passwod.match(password_regex))
                    {
                        document.getElementById('pwd').style.borderColor="red";
                        document.getElementById('demo').innerHTML="invalid password";
                    }
        else{
                   if(confirm_password=="")
                   {    
                        ed+="Entered The Confirm password";
                        document.getElementById('repwd').style.borderColor="red";
                        document.getElementById('demo').innerHTML=ed
                    }
        else{                                        
                    if((confirm_password!="") && (!confirm_password.match(password_regex)))
                    {    ed+="Invalid confirm password"
                         document.getElementById('repwd').style.borderColor="red";
                         document.getElementById('demo').innerHTML=ed;
                    }
            }
                    if(passwod=="")
                    {    
                         ed+="Entered The Password";
                         document.getElementById('pwd').style.borderColor="red";
                          document.getElementById('demo').innerHTML=ed;
                    }
        else{
                    if((passwod!="") && (passwod.match(password_regex)))
                    {
                        ed+="Invalid Password";
                        document.getElementById('pwd').style.borderColor="red";
                        document.getElementById('demo').innerHTML=ed;
                     }
            }
                    if(name=="")
                   {
                            ed+="Enter The Name<br>";
                            document.getElementById('name').style.borderColor="red";
                            document.getElementById('demo').innerHTML=ed;
                               
                   }
        else{
                    if((name!="") && (!name.match(name_regex)))
                    {   
                           ed+="Invalid Name4<br>";
                           document.getElementById('name').style.borderColor="red";
                           document.getElementById('demo').innerHTML=ed;
                    }
            }
                    if(mobile=="")
                    {
                            ed+="Enter The Mobile<br>";
                            document.getElementById('mobile').style.borderColor="red";
                            document.getElementById('demo').innerHTML=ed; 
                    }
        else{
                    if((mobile!="") && (mobile.match(mobile_regex)))
                    {    
                        ed+="Inalid Mobile";
                        document.getElementById('mobile').style.borderColor="red";
                        document.getElementById('demo').innerHTML=ed; 
                    }
            }
                     if(email=="")
                     {   
                         ed+="Entered The Email address";
                         document.getElementById('email').style.borderColor="red";
                         document.getElementById('demo').innerHTML=ed;
                      }
        else {                             
                    if((email!="") && (email.match(email_regex)))
                    {
                        ed="Invalid Email";
                        document.getElementById('email').style.borderColor="red";
                        document.getElementById('demo').innerHTML=ed;
                    }
            }
            if(confirm_password=="")
            {

            }

                     if((em == "Mail is not exist") && (passwod == confirm_password))
                    {
                       var m=document.getElementById('demo').innerHTML="";
                       var a=document.getElementById('name').value;
                       var b=document.getElementById('mobile').value;
                       var c=document.getElementById('email').value;
                       var d=document.getElementById('pwd').value;
                       const array={"name":a,"mobile":b,"email":c,"pwd":d};
                       console.log(array);
                       const data=JSON.stringify(array);
                       const xhr = new XMLHttpRequest();
                       xhr.open("POST","input.php",true);
                       xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
                       xhr.send(data);
                       var n=document.getElementById('name').value="";
                       var m=document.getElementById('mobile').value="";
                       var e=document.getElementById('email').value="";
                       var p=document.getElementById('pwd').value="";
                       var pd=document.getElementById('pwd').style.borderColor="black";
                       var r=document.getElementById("repwd").value="";
                       var rd=document.getElementById("repwd").style.borderColor="black";
                    xhr.onreadystatechange = function () 
                    {
                    if(xhr.status === 200 && xhr.readyState == 4) 
                    {         

                        console.log(xhr.responseText);
                        if(xhr.responseText=="Able to connect database and inserted data")
                        {   

                            ex="Register Successfully";
                            document.getElementById('name').style.borderColor="black";
                             document.getElementById('mobile').style.borderColor="black";
                             document.getElementById('email').style.borderColor="black";
                             document.getElementById('pwd').style.borderColor="black";
                             document.getElementById("repwd").style.borderColor="black";
                            document.getElementById('demo').innerText=ex;
                            console.log(ex);
                        }
                        else
                        {
                            ex="Not Register Successfully";
                            document.getElementById('demo').innerHTML=ex;
                           
               
                        }
                    }
                }
            }
        }
    }
}
}
}
}
}
}
}
}
}







    


                                                                

                
           
  
  


function blurFunction(){
    
    var email=document.getElementById('email').value;
    const array={"email":email};
    const value=JSON.stringify(array);
    var xhr=new XMLHttpRequest();
    xhr.open("POST","mail.php",true);
    xhr.setRequestHeader('Content-type','application/json charset=UTF-8');
    xhr.send(value);
    xhr.onreadystatechange = function () 
    {
    if(xhr.status === 200 && xhr.readyState == 4) 
    {   
        // console.log(xhr.responseText);
        // result="This mail is not exist";
        // $result1="This mail is exist";
        if(xhr.responseText == "This mail does not exist"){
          em="Mail is not exist";
        }
        else
        {
            em="Mail is exist";
            document.getElementById('email').style.borderColor="red";
           
            
        }
       console.log(em);
    }
}
}
function focusPassword(){
        var p=document.getElementById('pwd').value;
        if ( document.getElementById('pwd').style.borderColor=="red") {
            document.getElementById('pwd').style.borderColor="black";
            document.getElementById('pwd').value="";
        }
    }
function focusRepassword(){
            var q=document.getElementById('repwd').value;
            if(document.getElementById('repwd').style.borderColor="red"){
            document.getElementById('repwd').style.borderColor="black";
            document.getElementById('repwd').value="";
        }
    }
function focusEmail(){
        var e=document.getElementById('email').value;
        if(document.getElementById('email').style.borderColor=="red")
        {
            document.getElementById('email').style.borderColor="black";
            document.getElementById('email').value="";
        }
}
function focusMobile(){
            var q=document.getElementById('mobile').value;
            if(document.getElementById('mobile').style.borderColor=="red"){
            document.getElementById('mobile').style.borderColor="black";
            document.getElementById('mobile').value="";
        }
    }
function focusName()
{
     var q=document.getElementById('name').value;
            if(document.getElementById('name').style.borderColor=="red"){
            document.getElementById('name').style.borderColor="black";
            document.getElementById('name').value="";
        }
}







   
