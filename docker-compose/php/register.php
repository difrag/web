<!-- λογικα πρεπει να το πουμε signup.php για να ειναι στην ιδια λογικη με τα signin.html και signin.php -->
<?php
session_start();
include 'db_connect.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Hash the password

    try {
        $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
        $stmt->execute([$username, $password]);

        header("Location: signin.html");
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>
