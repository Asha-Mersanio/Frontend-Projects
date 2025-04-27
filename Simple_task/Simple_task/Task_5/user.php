<?php
session_start();
   $servername='localhost';
   $username='root';
   $password='admin@ST';
   $dbname='asha';

  $connection=new mysqli($servername,$username,$password,$dbname);
   if($connection->connect_error){
	die("Connection is failed".$connect_error);

  }
$email=$_SESSION['email'];
// $email=$_SESSION['email'];
// $_SESSION['password']="passwordvalues";
$sql="SELECT * FROM registers_details WHERE Email_ID='$email'";
 $result=$connection->query($sql);
     if ($result->num_rows > 0) {
     // output data of each row  
        while($row = $result->fetch_assoc()) {     
           // echo  $row["Name"];
           // echo  $row["Email_ID"];
           // echo  $row["Mobile_Number"]
           
                
              echo  "Hey " .$row["Name"]. " Login Successfully <br>";
              echo  "This is your EmailId " .$row["Email_ID"]. "<br>";
              echo  "This is your MobileNumber ".$row["Mobile_Number"]. "<br>";
              // echo $row["Email_ID"]. "<br>" ;
              //  echo $row["Mobile_Number"]. "<br>";
       }
    } else {
    echo "No Data Found";
   }
   ?>
   <a href="logout.php">Logout</a>
 
   

