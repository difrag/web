<?php
session_start();
include 'db_connect.php';

$data = json_decode(file_get_contents('php://input'), true);

$id = $data['id'];
$status = $data['status'];
$assigned_to = $data['assigned_to'];
$user_id = $_SESSION['user_id'];
$role = $_SESSION['role'];

$stmt = $pdo->prepare("SELECT * FROM tasks WHERE id = ?");
$stmt->execute([$id]);
$task = $stmt->fetch();

if ($task['user_id'] == $user_id || $role == 'admin') {
    $stmt = $pdo->prepare("UPDATE tasks SET status = ?, assigned_to = ? WHERE id = ?");
    $stmt->execute([$status, $assigned_to, $id]);
}
?>
