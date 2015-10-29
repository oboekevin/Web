<?php
$letters = $_REQUEST["set"];
$pattern = "/^[" . $letters . "]+$/mg";
$dict = file_get_contents("dictionnary.txt");
preg_match($pattern, $dict, $matches);
echo json_encode($matches);
?>