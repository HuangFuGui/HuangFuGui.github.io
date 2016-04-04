<?php
require "link.php";
$sql = "UPDATE weekassignment SET assignment='$_POST[assignment]',process = $_POST[process] WHERE id = $_POST[id]";
$mysql->query($sql);
?>