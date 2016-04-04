<?php
require "link.php";
$sql = "INSERT INTO weekassignment(startdate,enddate,assignment,process) VALUES ('$_POST[startdate]','$_POST[enddate]','$_POST[assignment]',0)";
$mysql->query($sql);
?>