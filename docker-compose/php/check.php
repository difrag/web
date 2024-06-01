
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

 $username = $_POST['username'];
// Check if username is already taken
if (empty($username) || trim($username) == '') {
    echo "Username is required";
} else {
    $query = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        // Username is taken
        echo "Already in use";
    } else {
        echo "Valid";
    }
}
// $email = $_POST['email'];
// // Check if email is already taken
// if (empty($email) || trim($email) === '') {
//     echo "Email is required";
// } else {
//     $stmt = $conn->prepare($query);
//     $stmt->bind_param("s", $email);
//     $stmt->execute();
//     $result = $stmt->get_result();
//     if ($result->num_rows > 0) {
//         // Email is taken
//         echo "Already in use";
// } else {
//         echo "Valid";
//     }
// }

// ?>

