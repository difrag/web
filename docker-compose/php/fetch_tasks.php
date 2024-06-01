<?php
session_start();
include 'db_connect.php';

$user_id = $_SESSION['user_id'];
$role = $_SESSION['role'];

// δεν νομιζω πως εχουμε δημιουργησει κατι στη βαση δεδομενων που λεγεται task_lists ακομα ή ισως να το ονομασεις καπως αλλιως αναλογα τι σου βγαζει νοημα
// Tasks = "Λιστα εργασίας" δλδ το κυριο μερος
// task_lists = "εργασίες" δλδ τα "bulletpoints" που εχει καθε task ? εχει σημασια να το ορισουμε νωρις γτ θα μπερδευτουμε νμζ !
$stmt = $pdo->prepare("
    SELECT task_lists.*, tasks.id AS task_id, tasks.title AS task_title, tasks.created_at, tasks.status, tasks.assigned_to
    FROM task_lists 
    LEFT JOIN tasks ON task_lists.id = tasks.task_list_id
    WHERE task_lists.user_id = :user_id OR tasks.assigned_to = :user_id
    ORDER BY task_lists.created_at DESC, tasks.created_at DESC
");
$stmt->execute(['user_id' => $user_id]);
$task_lists = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($task_lists);
?>
