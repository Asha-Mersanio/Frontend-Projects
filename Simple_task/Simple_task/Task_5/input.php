<?php

// error_reporting(E_ALL);
// ini_set("display_errors", 1);
$json = file_get_contents('php://input');
$output = json_decode($json, true);
// print_r($output);
$name=$output['name'];
$mobilenum=$output['mobile'];
$emailid=$output['email'];
$passwrd=$output['pwd'];
// Name Checking
$pattern_name="/^[A-Za-z]+$/";
if(preg_match($pattern_name,$name))
{
     // echo " Name is Matched";
}
else
{
     // echo "Name does not Matched";
}
// echo "<br>";
//Mobile Number Checking
$pattern_mobile="/^\d{10}$/";
if(preg_match($pattern_mobile,$mobilenum))
{
     // echo "Mobile Number is Matched";
}
else
{
     // echo "Mobile Number does not Matched";
}
// echo "<br>";
//EmailID checking
$pattern_email="/^[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(,|$)/";
if(preg_match($pattern_email,$emailid))
{
     // echo "Email Id Format is Matched";
}
else
{
     // echo "Email Id Format is not Matched";
}
// echo "<br>";
//Password Checking
$pattern_password="/^\S*(?=\S{8,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])(?=\S*[\W])\S*$/";

if(preg_match($pattern_password,$passwrd))
{
     // echo "Password is Matched\n";
}
else
{
     // echo "Password is not Matched<br>";
}

if (preg_match($pattern_name,$name) && preg_match($pattern_mobile,$mobilenum) && preg_match($pattern_email,$emailid) && preg_match($pattern_password,$passwrd))
{    
     echo "Able to connect database and inserted data";
	$servername="localhost";
	$username="root";
	$password="admin@FAT";
	$dbname="asha";
	  // Create connection
     $conn = new mysqli($servername,$username, $password, $dbname);
 
      // Check connection
     if ($conn->connect_error) {
     die("Connection failed: ". $conn->connect_error);
     }
     $sqlquery = "INSERT INTO registers_details(Name, Mobile_Number, Email_ID, Password)VALUES('$name','$mobilenum','$emailid','$passwrd')";
     if ($conn->query($sqlquery) === TRUE) {
    // echo "record inserted successfully";
     } else {
    // echo "Error: " . $sqlquery . "<br>" . $conn->error;
     }
}
else{
     echo "Not able to connect database and not able to inserted data";
}


?>