<?php
session_start();
include 'db_connect.php';

$data = json_decode(file_get_contents('php://input'), true);

$id = $data['id'];
$user_id = $_SESSION['user_id'];
$role = $_SESSION['role'];

$stmt = $pdo->prepare("SELECT * FROM tasks WHERE id = ?");
$stmt->execute([$id]);
$task = $stmt->fetch();

if ($task['user_id'] == $user_id || $role == 'admin') {
    $stmt = $pdo->prepare("DELETE FROM tasks WHERE id = ?");
    $stmt->execute([$id]);
}
?>
