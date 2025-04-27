<?php
// echo "Welcome World";
// error_reporting(E_ALL);
// ini_set("display_errors", 1);
$data=file_get_contents('php://input');
$output = json_decode($data, true);
$name=$output['Name'];
$servername="localhost";
$username="root";
$password="admin@FAT";
$dbname="visiting_card";
 // Create connection
     $conn = new mysqli($servername,$username, $password, $dbname);
      if ($conn->connect_error) {
     die("Connection failed: ". $conn->connect_error);
     }
     $sql="SELECT * FROM Carder_details WHERE Name='$name'";
     $result=$conn->query($sql);
    if($result->num_rows > 0)
    {
        while($row=$result->fetch_assoc())
        {
           // echo   $row["Name"]."<br>";
           // echo   $row["Designation"] ;
           // echo   $row["PhoneNo"] ;
           // echo   $row["Address"] ;
           // echo   $row["EmailAddress"] ;
           // echo   $row["Website"];
           // echo   $row["Company_Name"];
           // echo   $row["File_name"];
           // print_r($row);
           $res=json_encode($row);
           echo $res;
        }

    }
    
        else
        {
            echo "Error in ".$sql."<br>".$conn->error;
        }
?>