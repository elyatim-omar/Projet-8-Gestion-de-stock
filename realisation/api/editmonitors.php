<?php
$id = $_POST["sid"];
$dbh = new PDO("mysql:host=localhost:3306;dbname=first","root","solicode24");
$sql = "UPDATE monitor SET Brand = :Brand,size = :size,price = :price WHERE idmonitor = $id";
$addStudentsQuery = $dbh->prepare($sql);
$addStudentsQuery->bindParam(":Brand",$_POST["Brand"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":size",$_POST["size"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":price",$_POST["price"],PDO::PARAM_STR);
$addStudentsQuery->execute();
?>
