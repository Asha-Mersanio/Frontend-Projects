<?php
     error_reporting(E_ALL);
     ini_set("display_errors", 1);
     $json = file_get_contents('php://input');
     $out= json_decode($json, true);
     $ans=$out['value'];
     $servername="localhost";
     $username="root";
     $password="admin@ST";
     $dbname="asha";

     $connection=new mysqli($servername,$username,$password,$dbname);

     if($connection->connect_error)
     {
     	die("connection failed:".$connection->connect_error);
     }

     $sql = "SELECT * FROM calculator_results ORDER BY id DESC LIMIT 1";
     $result=$connection->query($sql);
     if ($result->num_rows > 0) {
     // output data of each row  
        while($row = $result->fetch_assoc()) {     
           echo  $row["result"];
       }
    } else {
    echo "0 results";
   }
   ?>