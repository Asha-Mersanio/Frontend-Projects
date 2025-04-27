<?php
// error_reporting(E_ALL);
// ini_set("display_errors", 1);
$ans = file_get_contents('php://input');
$res = json_decode($ans, true);
// console.log($res);
$email=$res['email'];
// echo $email;
$servername='localhost';
$username='root';
$password='admin@ST';
$dbname='asha';
$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
	die("Connection is failed".$connect_error);

}
// echo $email;
$sql="SELECT * FROM registers_details WHERE Email_ID='$email'";

 $result=$conn->query($sql);

     if ($result->num_rows > 0) {
         while($row = $result->fetch_assoc()) {
            echo "This mail id is already exist";
        }
     }
    else {
        echo "This mail does not exist";
    }
?>