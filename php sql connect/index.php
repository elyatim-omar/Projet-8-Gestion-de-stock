<?php
$servername = "localhost";
$username = "root";
$dbname="first";
$password = "solicode24";

// Creer la connexion
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Checker connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM monitor";
$result = mysqli_query($conn, $sql);

// détermine le nombre de ligne : mysqli_num_rows()
if (mysqli_num_rows($result) > 0) {

  //Récupère une ligne de résultat sous forme de tableau associatif :mysqli_fetch_assoc()
  echo "<table border='2'>";
  echo "<tr><th> id </th>";
  echo "<th> size </th></tr>";
  while($row = mysqli_fetch_assoc($result)) {

    echo  "<tr>"."<td>".$row["idmonitor"]."</td>" ."<td>". $row["size"]. "</td>"."</tr>";
  }
  echo "</table>";
}
else {
  echo "la table est vide";
}





mysqli_close($conn);
?> 