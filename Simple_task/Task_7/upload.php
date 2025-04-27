<?php
// echo "desfrgtdyy";
 // error_reporting(E_ALL);
 // ini_set("display_errors", 1);
$filename = $_FILES['file']['name'];
if(isset($filename))
{

$rand_number = rand();
$image_name  = $rand_number.$filename;
// // Choose where to save the uploaded file
$location = "upload/".$image_name;

// Save the uploaded file to the local filesystem 
if ( move_uploaded_file($_FILES['file']['tmp_name'], $location) ) { 
  
  echo $rand_number.$filename;
} else { 
  echo 'Failure'; 
}
}
else
{
  echo "File is not in folder";
}


?>