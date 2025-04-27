<?php
session_start();
	$_SESSION['fruits']="Mango";
	$_SESSION['vegtables']="carrot";
	echo "Session variables are set <br>";
	echo $_SESSION['fruits'];

?>