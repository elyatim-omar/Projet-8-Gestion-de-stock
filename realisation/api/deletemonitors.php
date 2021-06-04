<?php
$id = $_POST["sid"];
$dbh = new PDO("mysql:host=localhost:3306;dbname=first","root","solicode24");
$sql = "DELETE FROM monitor WHERE idmonitor = $id";
$getStudents = $dbh->prepare($sql) ;
$getStudents->execute();
?>
