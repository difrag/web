<!DOCTYPE html
<html>
<body>
<?php

// Assuming you have already established a database connection
$host = "localhost"; // Replace with your database host
$dbname = "madb"; // Replace with your database name
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    die();
}

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = isset($_POST['username']) ? $_POST['username'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

$password = password_hash($password, PASSWORD_DEFAULT);

// echo "username " . $username;
// echo "password " . $password;
// echo "hash(123456) " . password_hash("123456", PASSWORD_DEFAULT);

$query = "SELECT * FROM users WHERE username = ?";

$stmt = $conn->prepare($query);
$stmt->bind_param("s", $username);
$stmt->execute();

$result = $stmt->get_result();


if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($_POST['password'], $row["password"])) {
        echo "Signed in as " . $username . "!";
        
        $_SESSION['userID']= $row["username"];
        $timestamp = time() + (86400);
        setcookie('authToken', $row["username"], $timestamp, NULL, NULL, NULL, true);

    } else {
        echo "Incorrect credentials go back and try again we havent fully fixed our page yet ";
        die();
    }
}
else {
    echo"You fucked up, may sign up first. Try to remember the websites you get subscription you clown!";
    exit; 
}

?>
