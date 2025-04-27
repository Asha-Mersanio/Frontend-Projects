var ed='';
var em;
var ex;
// console.log(ed);
function Register()
 {      ed='';
        var name=document.getElementById('name').value;
        var mobile=document.getElementById('mobile').value;
        var email=document.getElementById('email').value;
        var passwod=document.getElementById('pwd').value;
        var confirm_password=document.getElementById('repwd').value;
        var name_regex = /^[A-Za-z]+$/;
        var mobile_regex= /^\d{10}$/;
        var email_regex= /^[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(,|$)/;
        var password_regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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

            var name_status = name_check(name,name_regex);
            var mobile_status=mobile_check(mobile,mobile_regex);
            var email_status=email_check(email,email_regex);
            var password_status=password_check(passwod,password_regex);
            var confirm_status=confirm_check(confirm_password,password_regex);
            if(name_status == "true" && mobile_status=="true" && email_status=="true" && password_status=="true" && confirm_status=="true"){
            
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

function name_check(name,name_regex)
{
     if(name=="")
     {
      ed+="Enter The Name<br>";
      document.getElementById('name').style.borderColor="red";
      document.getElementById('demo').innerHTML=ed; 
      return "error"  ; 
      }
    else{
            if((name!="") && (!name.match(name_regex)))
                {   
                    ed+="Invalid Name<br>";
                    document.getElementById('name').style.borderColor="red";
                    document.getElementById('demo').innerHTML=ed;
                    return "error";
                }
                else{
                    return "true";
            }
        }
}
function mobile_check(mobile,mobile_regex)
{
    if(mobile=="")
   {
       ed+="Enter The Mobile<br>";
       document.getElementById('mobile').style.borderColor="red";
       document.getElementById('demo').innerHTML=ed; 
       return "error";
    }
    else{
        if((mobile!="") && (!mobile.match(mobile_regex)))
        {
             ed+="Invalid Mobile number<br>";
             document.getElementById('mobile').style.borderColor="red";
             document.getElementById('demo').innerHTML=ed; 
             return "error";
        }
       else{
              return "true";
       }
    }
}
function email_check(email,email_regex)
{
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
        else{
        
            return "true";
        }
    }
}

function password_check(passwod,password_regex)
{
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
        else{
        
            return "true";
        }
    }
} 
function confirm_check(confirm_password,password_regex)
{
    if(confirm_password=="")
    {
        ed+="Enter The  Retype-Password<br>";
        document.getElementById('repwd').style.borderColor="red";
        document.getElementById('demo').innerHTML=ed; 
    }
    else{
        if((confirm_password!="") && (!confirm_password.match(password_regex)))
        {
           ed+="Invalid Confirm Password<br>";
            document.getElementById('repwd').style.borderColor="red";
            document.getElementById('demo').innerHTML=ed; 
        }
        else{
        
            return "true";
        }
    }
} 





   
