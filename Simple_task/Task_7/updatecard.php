<?php
// echo "vanakam World";
// error_reporting(E_ALL);
// ini_set("display_errors", 1);
$data=file_get_contents('php://input');
$output = json_decode($data, true);
// print_r($output);
$res=$output['companyname'];
$name=$output['name'];
$phone=$output['number'];
$address=$output['address'];
$email=$output['email'];
$servername="localhost";
$job=$output['role'];
$web=$output['website'];
$image=$output['image'];
$username="root";
$password="admin@FAT";
$dbname="visiting_card";
$conn = new mysqli($servername,$username, $password, $dbname);
      if ($conn->connect_error) {
     die("Connection failed: ". $conn->connect_error);
     }
     if($image != ""){
       $sql = "UPDATE Carder_details SET Name='$name', PhoneNo='$phone', Designation='$job', Address='$address' , Website='$web' , EmailAddress='$email' , File_name= '$image' WHERE Company_Name='$res'";
     }
     if($image == ""){
      $sql = "UPDATE Carder_details SET Name='$name', PhoneNo='$phone', Designation='$job', Address='$address' , Website='$web' , EmailAddress='$email'  WHERE Company_Name='$res'";
     }
    

        if ($conn->query($sql) === TRUE) 
        {
           // echo   $row["Name"]."<br>";
           // echo   $row["Designation"] ;
           // echo   $row["PhoneNo"] ;
           // echo   $row["Address"] ;
           // echo   $row["EmailAddress"] ;
           // echo   $row["Website"];
           // echo   $row["Company_Name"];
        	echo "updated record successfully";
        } 
         else 
         {
             echo "not updating record: " . $conn->error;
         }


?>