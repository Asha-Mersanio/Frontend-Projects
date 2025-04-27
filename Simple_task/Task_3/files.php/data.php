<?php
 error_reporting(E_ALL);
 ini_set("display_errors", 1);
$json = file_get_contents('php://input');
$output = json_decode($json, true);
print_r($output);
$res=$output['Result'];
echo $res;
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
$sqlquery = "INSERT INTO calculator_results(result)VALUES('$res')";
 
if ($conn->query($sqlquery) === TRUE) {
    echo "record inserted successfully";
} else {
    echo "Error: " . $sqlquery . "<br>" . $conn->error;
}
?>