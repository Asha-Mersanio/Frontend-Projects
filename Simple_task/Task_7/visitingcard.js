function openTemplate() {
	document.getElementById('c1').style.display="block";
	document.getElementById('div1').style.display="block";
	document.getElementById('div1').style.borderColor="green";
	document.getElementById('c2').style.display="none";
	document.getElementById('div2').style.display="none";
	document.getElementById('c3').style.display="none";
	document.getElementById('div3').style.display="none";
	document.getElementById('c4').style.display="none";
	document.getElementById('div4').style.display="none";
	document.getElementById('div5').style.display="none";
	document.getElementById('div6').style.display="none";
}
function openCard1()
{
	
	document.getElementById('c1').style.display="none";
	document.getElementById('div1').style.display="none";
	document.getElementById('c2').style.display="block";
	document.getElementById('div2').style.display="block";
	document.getElementById('c3').style.display="none";
	document.getElementById('div3').style.display="none";
	document.getElementById('c4').style.display="none";
	document.getElementById('div4').style.display="none";
	document.getElementById('div5').style.display="none";
	document.getElementById('div6').style.display="none";
	

}

function clickBack()
{
	document.getElementById('c1').style.display="block";
	document.getElementById('div1').style.display="block";
	document.getElementById('c2').style.display="none";
	document.getElementById('div2').style.display="none";
	document.getElementById('c3').style.display="none";
	document.getElementById('div3').style.display="none";
	document.getElementById('c4').style.display="none";
	document.getElementById('div4').style.display="none";
	document.getElementById('div5').style.display="none";
	document.getElementById('div6').style.display="none";
	document.getElementById('conpanylogoname').value="COMPANY NAME";
	document.getElementById('web').value="Website";
	document.getElementById('companyname').value="Company name";
	document.getElementById('name').value="Name";
	document.getElementById('role').value="Designation";
	document.getElementById('Mobile').value="Phone No";
	document.getElementById('address').value="Address";
	document.getElementById('email').value="Email Address";
}
function openCard()
{

	console.log("edrfas");
	document.getElementById('c1').style.display="none";
	document.getElementById('div1').style.display="none";
	document.getElementById('c2').style.display="none";
	document.getElementById('div2').style.display="none";
	document.getElementById('c3').style.display="none";
	document.getElementById('div3').style.display="none";
	document.getElementById('c4').style.display="block";
	document.getElementById('div4').style.display="block";
	document.getElementById('div5').style.display="none";
	document.getElementById('div6').style.display="none";
	document.getElementById('pop').style.display="none";
	const xhr=new XMLHttpRequest();
   xhr.open("POST","mycard.php",true);
   xhr.setRequestHeader('content-type', 'application/json; charset=UTF-8');
   xhr.send();

   xhr.onreadystatechange = function () 
   {
          if(xhr.status === 200 && xhr.readyState == 4) 
           {         
             var stringArray = xhr.responseText;
             var array = JSON.parse(stringArray);
             var elements = "";
             for (var i = 0; i < array.length; i++) {
             	elements +='<label id="username_'+i+'" name="'+array[i]+'" class="class">'+array[i]+'</label><input type="radio" id="edit_'+i+'" name="mycard" placeholder="Edit" onclick="clickEdit(`username_'+i+'`)" class="class1"><input type="radio" id="down_'+i+'" name="mycard" placeholder="Download" onclick="clickDownload()" class="class2"><input type="radio" id="Send_'+i+'" name="mycard" placeholder="Share" onclick="clickShare()" class="class3"><br>';
             	
               }
             
               document.getElementById('details').innerHTML=elements;
           }
    }
}
function clickEdit(id)
{
	console.log(document.getElementById(id).innerText);
	document.getElementById('c1').style.display="none";
	document.getElementById('div1').style.display="none";
	document.getElementById('c2').style.display="none";
	document.getElementById('div2').style.display="none";
	document.getElementById('c3').style.display="block";
	document.getElementById('div3').style.display="block";
	document.getElementById('c4').style.display="none";
	document.getElementById('div4').style.display="none";
	document.getElementById('div5').style.display="none";
	document.getElementById('div6').style.display="none";
	var companyname=document.getElementById('inputComName').value;
	var website=document.getElementById('inputweb').value;
     var name=document.getElementById(id).innerText;
     var designation=document.getElementById('inputRole').value;
     var phone=document.getElementById('inputmobile').value;
     var Address=document.getElementById('inputAddress').value;
     var Email=document.getElementById('inputEmail').value;
     const res={"company":companyname,"website":website,"Name":name,"designation":designation,"phone":phone,"Address":address,"Email":Email};
     const ans=JSON.stringify(res);
      const xhr=new XMLHttpRequest();
      xhr.open("POST","editcard.php",true);
      xhr.setRequestHeader('content-type', 'application/json; charset=UTF-8');
      xhr.send(ans);
      xhr.onreadystatechange = function () 
                    {
                        if(xhr.status === 200 && xhr.readyState == 4) 
                        {         
                            var a=xhr.responseText;
                            var value="";
                            const b=JSON.parse(a);
                            console.log(b);
                            value = `<div class="card1"><center><input type="file" id="editfile" name="editfile" class="file1"><img src="upload/`+b['File_name']+`" alt="logo" class="logoimage"><label for="myfile"></label></center><input type="text" id="inputComName" name="Companyname" placeholder ="COMPANY NAME" readonly value = "`+b['Company_Name']+`"><div class="webicon"><img src="url.svg" alt="url" style="width:10px"><input type="text" id="inputweb" placeholder="Website" readonly value = "`+b['Website']+`"></div></div><div class="card2"><input type="file" id="myfile1" name="myfile" class="file2"><img src="upload/`+b['File_name']+`" alt="logo"  id="img1" class="logoimage2"><label for="myfile1" id="label"></label><input type="text" id="inputCompanyName" name="Companyname" placeholder="Company Name"  value = "`+b['Company_Name']+`"readonly><input type="file" id="myfile2" name="myfile" style="display:none"><img src="qr.png" alt="logo" style="width:16%;display:none" id="qr" ><label for="myfile2" id="label2"></label><!--  <div class="data"> --><div class="personicon"><img src="person.svg" alt="person" style="width:5%" id="person" ><input type="text" id="inputName" name="Name" placeholder="Name" readonly  value = "`+b['Name']+`"></div><div class="roleicon"><img src="domain.svg" alt="domain" style="width:5%" id="work" ><input type="text" id="inputRole" name="Role" placeholder="Designation" value="`+b['Designation']+`"readonly></div><div class="mobileicon"><img src="phone.svg" alt="phone" style="width:5%" id="phonenumber" ><input type="tel" id="inputmobile" name="mobile" placeholder="Phone No" value = "`+b['PhoneNo']+`" readonly ></div><div class="addressicon"><img src="address.svg" alt="address" style="width:5%" id="add" ><input type="text" id="inputAddress" name="Address" placeholder="Address" readonly  value = "`+b['Address']+`"></div><div class="emailicon"><img src="email.svg" alt="email" style="width:5%" id="emailaddress" ><input type="email" id="inputEmail" name="Email" placeholder="Email Address" readonly  value = "`+b['EmailAddress']+`"></div>   <!--   </div> --><div class="v1"></div></div>`;
                            
                            document.getElementById('editbox').innerHTML=value;
                         }
                         
                         
                    }
}
	

function openCancel()
{
	console.log("cancel");
	document.getElementById('div5').style.display="none";
	document.getElementById('div6').style.display="none";
	document.getElementById('c3').style.display="none";
	document.getElementById('div3').style.display="none"; 
	document.getElementById('downloadcontainer').style.display="none";
    if(document.getElementById('pop').style.display=="block")
    {
    	    
         document.getElementById('div3').style.display="block";
    }
   else{
   	    document.getElementById('div4').style.display="block";
   }

     
}
function option()
{
	document.getElementById('pop').style.display="block";
}
function clickDownload()
{    

	document.getElementById('c3').style.display="block";
	document.getElementById('div3').style.display="block";
	document.getElementById('c4').style.display="none";
	document.getElementById('div4').style.display="none";
	document.getElementById('div5').style.display="block";
	document.getElementById('downloadcontainer').style.display="block"




}
function clickShare()
{
	
	document.getElementById('c3').style.display="block";
	document.getElementById('div3').style.display="block";
	document.getElementById('c4').style.display="none";
	document.getElementById('div4').style.display="none";
	document.getElementById('div6').style.display="block";
	document.getElementById('downloadcontainer').style.display="block"

}
function openShare()
{
	document.getElementById('div6').style.display="block";
}
function clicksaveedit()
{    

	document.getElementById('c1').style.display="none";
	document.getElementById('div1').style.display="none";
	document.getElementById('c2').style.display="none";
	document.getElementById('div2').style.display="none";
	document.getElementById('c4').style.display="none";
	document.getElementById('div4').style.display="none";
	document.getElementById('c3').style.display="block";
	document.getElementById('div3').style.display="block";
	document.getElementById('div5').style.display="none";
	document.getElementById('div6').style.display="none";
	document.getElementById('inputComName').readOnly=false;
	document.getElementById('inputweb').readOnly=false;
	document.getElementById('inputCompanyName').readOnly=false;
	document.getElementById('inputName').readOnly=false;
	document.getElementById('inputRole').readOnly=false;
	document.getElementById('inputmobile').readOnly=false;
	document.getElementById('inputAddress').readOnly=false;
	document.getElementById('inputEmail').readOnly=false;
}
function save(image_name=""){
	var a=document.getElementById('inputComName').value;
	var b=document.getElementById('inputweb').value;
	var c=document.getElementById('inputCompanyName').value;
	var d=document.getElementById('inputName').value;
	var e=document.getElementById('inputRole').value;
	var f=document.getElementById('inputmobile').value;
	var g=document.getElementById('inputAddress').value;
	var h=document.getElementById('inputEmail').value;
	console.log(image_name);
	var array;
	if(image_name=="")
	{
		console.log(image_name);
		array={"companyname":a,"website":b,"cname":c,"name":d,"role":e,"number":f,"address":g,"email":h};
	}
	else
	{
		array={"companyname":a,"website":b,"cname":c,"name":d,"role":e,"number":f,"address":g,"email":h,"image":image_name};
     }
	const output=JSON.stringify(array);
	const xhr=new XMLHttpRequest();
	console.log(output);
         xhr.open("POST","updatecard.php",true);
         xhr.setRequestHeader('content-type', 'application/json; charset=UTF-8');
         xhr.send(output);
           xhr.onreadystatechange = function () 
          {
                        if(xhr.status === 200 && xhr.readyState == 4) 
                        {         
                            console.log(xhr.responseText);
                            if(xhr.responseText=="updated record successfully")
                            {
                            	 openCard();
                            }
                       }
          }
}
	

function clickcancel()
{
	document.getElementById('c1').style.display="none";
	document.getElementById('div1').style.display="none";
	document.getElementById('c2').style.display="none";
	document.getElementById('div2').style.display="none";
	document.getElementById('c4').style.display="block";
	document.getElementById('div4').style.display="block";
	document.getElementById('div5').style.display="none";
	document.getElementById('div6').style.display="none";
	document.getElementById('c3').style.display="none";
	document.getElementById('div3').style.display="none";
}
function clickeditback(){
	document.getElementById('c1').style.display="none";
	document.getElementById('div1').style.display="none";
	document.getElementById('c2').style.display="none";
	document.getElementById('div2').style.display="none";
	document.getElementById('c4').style.display="block";
	document.getElementById('div4').style.display="block";
	document.getElementById('div5').style.display="none";
	document.getElementById('div6').style.display="none";
	document.getElementById('c3').style.display="none";
	document.getElementById('div3').style.display="none";
}
function clicksave(image_name)
{    
	var dec;
	var companyname=document.getElementById('conpanylogoname').value;
	var website=document.getElementById('web').value;
     var name=document.getElementById('name').value;
     var designation=document.getElementById('role').value;
     var phone=document.getElementById('Mobile').value;
     var Address=document.getElementById('address').value;
     var Email=document.getElementById('email').value;
	var company_regex=/^[A-Z]*$/;
	var website_regex=/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
	var name_regex=/^[A-Za-z]+$/;
	var designation_regex=/^[A-Za-z]+$/;
	var mobile_regex= /^\d{10}$/;
	var email_regex=/^[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(,|$)/;
	if((companyname.match(company_regex))&&(website.match(website_regex))&&(name.match(name_regex))&&(designation.match(designation_regex))&&(phone.match(mobile_regex))&&(Email.match(email_regex)))
	{   

         dec="Regex matched";
         var CN=document.getElementById('conpanylogoname').value;
         var WB=document.getElementById('web').value;
         var NA=document.getElementById('name').value;
         var DS=document.getElementById('role').value;
         var PH=document.getElementById('Mobile').value;
         var ADD=document.getElementById('address').value;
         var EM=document.getElementById('email').value;
         const array={"company":CN,"website":WB,"name":NA,"role":DS,"mobile":PH,"address":ADD,"emailid":EM,"image":image_name};
         const output=JSON.stringify(array);
         const xhr=new XMLHttpRequest();
         xhr.open("POST","visitingcard.php",true);
         xhr.setRequestHeader('content-type', 'application/json; charset=UTF-8');
         xhr.send(output);
           xhr.onreadystatechange = function () 
                    {
                        if(xhr.status === 200 && xhr.readyState == 4) 
                        {         
                            console.log(xhr.responseText);
                            if(xhr.responseText=="record inserted successfully");
                            {
                            	clickBack();
                            }
                         }
                         
                    }
                   
     }   
	
	else
	{
		dec="Regex not matched";
		console.log(dec);
	}
}
function openDownload()
{     
	  document.getElementById('downloadcontainer').style.display="block";
      document.getElementById('div5').style.display="block";
}
function clickimage()
{
	console.log("edsrftgd");
	var container = document.getElementById("editbox");;
	 html2canvas(container, { allowTaint: true }).then(function (canvas) {

                    var link = document.createElement("a");
                    document.body.appendChild(link);
                    link.download = "html_image.png";
                    link.href = canvas.toDataURL();
                    link.target = '_blank';
                    link.click();
                });
	}
    
function sharemailclick()
{
	console.log("send to email");
	 "use strict";
    var url =  "http://localhost/Asha/Task_7/card.html";
        res = encodeURI(url);
    res = res.replace(/\#/g, '%23');
    window.open("mailto:?body=Check out this site "  + res);
    document.getElementById('div6').style.display="none";


}
function sharewhatsapp()
{
	console.log("send to what's app");
	 "use strict";
    var url =  "http://localhost/Asha/Task_7/card.html";
        res = encodeURI(url);
    res = res.replace(/\#/g, '%23');
    window.open("https://wa.me/?text=" + res); 
    document.getElementById('div6').style.display="none";
}
function sharefacebookclick()
{
	console.log("send to facebook");
	 "use strict";
    var url =  window.location.href,
        res = encodeURI(url);
    res = res.replace(/\#/g, '%23');
    window.open("http://www.facebook.com/sharer.php?u=" + res, 'sharer', 'toolbar=0,status=0,width=626,height=436');
    document.getElementById('div6').style.display="none";
    // window.print();
}
function onClick() {
	console.log('hgcu');
   const element = document.getElementById('editbox');
   var opt = {
      margin:       1,
      filename:     'Professionalcard.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
   }

function  uploadFile()
{  
	console.log('hai');
    var form_data = new FormData();
    var file_id = document.getElementById('myfile');
    form_data.append('file', file_id.files[0]);
    console.log(file_id);
    var request = new XMLHttpRequest();
    request.open('post', 'upload.php'); 
    request.send(form_data);
    request.onreadystatechange = function () 
                {
    		    if(request.status === 200 && request.readyState == 4) 
                {        	
                	// console.log(request.responseText);
                	if(request.responseText != 'Failure'){
                		var image_name = request.responseText;
                      	clicksave(image_name);
                	}
                 }
            }
}
function clickfileedit()
{
	var form_data = new FormData();
     var file_id = document.getElementById('editfile');
    form_data.append('file', file_id.files[0]);
    var request = new XMLHttpRequest();
    request.open('post', 'upload.php'); 
    request.send(form_data);
    console.log(form_data);
    request.onreadystatechange = function () 
                {
    		    if(request.status === 200 && request.readyState == 4) 
                {        
                	if(request.responseText != 'Failure'){
                		if(request.responseText == "File is not in folder"){
                			save();
                		}
                		else{
                			var image_name = request.responseText;
	                		console.log(image_name);
	                      	save(image_name);
                		}
                		
                	}
                 }
            }

}



 