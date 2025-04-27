<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
$data=file_get_contents('php://input');
$output = json_decode($data, true);
// print_r($output);
$companyname=$output['company'];
$website=$output['website'];
$name=$output['name'];
$role=$output['role'];
$mobile=$output['mobile'];
$address=$output['address'];
$email=$output['emailid'];
$image=$output['image'];
$servername="localhost";
$username="root";
$password="admin@ST";
$dbname="visiting_card";
  // Create connection
     $conn = new mysqli($servername,$username, $password, $dbname);
      if ($conn->connect_error) {
     die("Connection failed: ". $conn->connect_error);
     }
     $sqlquery = "INSERT INTO Carder_details(Name, Designation,PhoneNo,Address,EmailAddress,Website,Company_Name,File_name)VALUES('$name','$role','$mobile','$address','$email','$website','$companyname','$image')";
	if ($conn->query($sqlquery) === TRUE) {
	    echo "record inserted successfully";
	} else {
	    echo "Error: " . $sqlquery . "<br>" . $conn->error;
	}

?>