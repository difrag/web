<?php
session_start();
include 'db_connect.php';
// ΤΑ JSON ΚΛΠ ΔΕΝ ΕΧΩ ΙΔΕΑ ΠΩΣ ΔΟΥΛΕΟΥΝ ΑΛΛΑ ΗΘΕΛΑ ΕΝΑ ΤΡΟΠΟ ΝΑ ΔΩ ΑΝ ΔΟΥΛΕΥΟΥΝ ΤΑ add task κουμπια που εφτιαξα
$data = json_decode(file_get_contents('php://input'), true);

$title = $data['title'];
$description = $data['description'];
$task_list_id = $data['task_list_id'];
$user_id = $_SESSION['user_id'];

$stmt = $pdo->prepare("INSERT INTO tasks (task_list_id, title, description, user_id) VALUES (?, ?, ?, ?)");
$stmt->execute([$task_list_id, $title, $description, $user_id]);
?>
