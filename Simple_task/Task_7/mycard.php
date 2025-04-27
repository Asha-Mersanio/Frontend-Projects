<?php
// error_reporting(E_ALL);
// ini_set("display_errors", 1);
$servername="localhost";
$username="root";
$password="admin@ST";
$dbname="visiting_card";
  // Create connection
     $conn = new mysqli($servername,$username, $password, $dbname);
      if ($conn->connect_error) {
     die("Connection failed: ". $conn->connect_error);
     }
     $sql1="SELECT Name FROM Carder_details";
    $result=$conn->query($sql1);
    if($result->num_rows > 0)
    {
        while($row=$result->fetch_assoc())
        {
           $newArray[] = $row["Name"];
        }
        $res=json_encode($newArray);
        echo $res;

    }
    
        else
        {
            echo "not selected the data";
        }
    
        
?>