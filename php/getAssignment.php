<?php
require "link.php";
require "jsonHelper.php";
$array;
$i=0;
$sql = "SELECT * FROM weekassignment WHERE id >0";
$result = $mysql->query($sql);
while($final = $result->fetch_array()){
	$array[$i]['startdate'] = $final['startdate'];
	$array[$i]['enddate'] = $final['enddate'];
	$array[$i]['assignment'] = $final['assignment'];
	$array[$i]['process'] = $final['process'];
	$i++;
}
echo JSON($array);
?>