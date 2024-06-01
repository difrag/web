<!DOCTYPE html
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

// Check if table exists
$result = $conn->query("SHOW TABLES LIKE 'users'");
if($result->num_rows == 0) {
    // Table doesn't exist, create table
    $sql = "CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    pushkey VARCHAR(255)
    )";

    if ($conn->query($sql) === TRUE) {
      echo "Table users created successfully";
    } else {
      // Log error instead of displaying it to the user
      error_log("Error creating table: " . $conn->error);
    }
}

// Retrieve form data
$firstName = isset($_POST['firstName']) ? $_POST['firstName'] : '';
$lastName = isset($_POST['lastName']) ? $_POST['lastName'] : '';
$username = isset($_POST['username']) ? $_POST['username'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$pushKey = isset($_POST['pushKey']) ? $_POST['pushKey'] : '';

// Validate form data
if (empty(trim($firstName)) || empty(trim($lastName)) || empty(trim($password)) || empty(trim($email))) {
    echo "Please fill in all required fields!";
    die();
}

// Hash password before storing it
$password = password_hash($password, PASSWORD_DEFAULT);


// // Check if username is already taken
// $query = "SELECT * FROM users WHERE username = ?";
// $stmt = $conn->prepare($query);
// $stmt->bind_param("s", $username);
// $stmt->execute();
// $result = $stmt->get_result();
// if ($result->num_rows > 0) {
//     // Username is taken
//     echo "Username is already taken";
//     die();
// }

// // Check if email is already taken
// $query = "SELECT * FROM users WHERE email = ?";
// $stmt = $conn->prepare($query);
// $stmt->bind_param("s", $email);
// $stmt->execute();
// $result = $stmt->get_result();
// if ($result->num_rows > 0) {
//     // Email is taken
//     echo "Email is already taken";
//     die();
// }

// Insert new user into the database
$query = "INSERT INTO users (firstName, lastName, username, password, email, pushkey) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($query);
$stmt->bind_param("ssssss", $firstName, $lastName, $username, $password, $email, $pushKey);
$stmt->execute();
// Validate form data
if (empty(trim($firstName)) || empty(trim($lastName)) || empty(trim($password)) || empty(trim($email))) {
    echo "Please fill in all required fields!";
    die();
}

?>