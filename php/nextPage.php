<?php
require "link.php";
require "jsonHelper.php";
$array;
$i=0;
$sql = "SELECT * FROM weekassignment WHERE id >$_POST[pageDown]";
$result = $mysql->query($sql);
/*while($final = $result->fetch_array()){
	$array[$i]['id'] = $final['id'];
	$array[$i]['startdate'] = $final['startdate'];
	$array[$i]['enddate'] = $final['enddate'];
	$array[$i]['assignment'] = $final['assignment'];
	$array[$i]['process'] = $final['process'];
	$i++;
}
echo JSON($array);*/
echo $result->num_rows;
?>