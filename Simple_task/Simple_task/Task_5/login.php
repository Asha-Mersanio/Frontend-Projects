<?php
// echo "Hey";
 session_start();
 error_reporting(E_ALL);
 ini_set("display_errors", 1);
 $json = file_get_contents('php://input');
 $output = json_decode($json, true);
 // echo $output;
 $emailid=$output['email'];
 $passwd=$output['password'];
 $servername="localhost";
 $username="root";
 $password="admin@ST";
 $dbname="asha";
	  // Create connection
     $conn = new mysqli($servername,$username, $password, $dbname);
      if ($conn->connect_error) {
     die("Connection failed: ". $conn->connect_error);
     }
     $sql="SELECT Password FROM registers_details WHERE Email_ID='$emailid'";
     $result=$conn->query($sql);

     if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            // echo $row["Name"]." ".$row["Email_ID"]." ".$row["Mobile_Number"]." ".$row["Password"];
            //  $sql1="SELECT * FROM registers_details WHERE Password='$passwd'";
            //  $result1=$conn->query($sql1);
            // if($result1->num_rows > 0)
            // {
            //     while($row=$result1->fetch_assoc())
            //     {
            //      echo "Password is correct";
            //     }
            // }
        
            //  else
            // {
            //     echo "Password is incorrect";
            // }
            if($passwd==$row["Password"])
            {   

                echo "password is correct";
                $_SESSION['email']=$emailid;
            }
            else{
                echo "Password is not correct";
            }
        }
        // else if(empty($passwd))
        // {
        //     echo "Please entered the Password";
        // }

        

    }
    
    else {
            echo "This mail does not exist";
         }
     
  

    // $sql1="SELECT * FROM registers_details WHERE Password='$passwrd'";
    // $result=$conn->query($sql1);
    // if($result->num_rows > 0)
    // {
    //     while($row=$result->fetch_assoc())
    //     {
    //         echo "Password is correct";
    //     }
    // }
    
    //     else
    //     {
    //         echo "Password is incorrect";
    //     }
    

 ?>