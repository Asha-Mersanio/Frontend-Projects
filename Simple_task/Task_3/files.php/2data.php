<?php
     error_reporting(E_ALL);
     ini_set("display_errors", 1);
     $json = file_get_contents('php://input');
     $output = json_decode($json, true);
     echo $output;
     $servername = "localhost";
	 $username = "root";
	 $password = "admin@ST";
	 $dbname = "asha";
 
// Create connection
$conn = new mysqli($servername,$username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
}
$sqlquery = "DELETE FROM calculator_results";
 
if ($conn->query($sqlquery) === TRUE) {
    echo "record are deleted successfully";
} else {
    echo "Error: records aren't deleted successfully" . $sqlquery . "<br>" . $conn->error;
    
}
echo "<br>";
$sql = "ALTER TABLE  calculator_results AUTO_INCREMENT = 1";
if($conn->query($sql)===TRUE){
    echo "auto increment set successfully";
}
else
{
    echo "auto increment could not be access".$sql."<br>".$conn->error;
}

  ?>