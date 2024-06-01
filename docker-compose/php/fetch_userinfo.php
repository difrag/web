<?php
$host = "localhost"; // Replace with your database host
$dbname = "madb"; // Replace with your database name
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password
// Connect to the database
$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


?>