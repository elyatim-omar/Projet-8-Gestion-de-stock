<?php
$dbh = new PDO("mysql:host=localhost:3306;dbname=first","root","solicode24");
$sql = " INSERT INTO monitor(Brand,size,price) VALUES (:Brand,:size,:price)";
$addStudentsQuery = $dbh->prepare($sql);
$addStudentsQuery->bindParam(":Brand",$_POST["Brand"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":size",$_POST["size"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":price",$_POST["price"],PDO::PARAM_STR);
$addStudentsQuery->execute();
?>
