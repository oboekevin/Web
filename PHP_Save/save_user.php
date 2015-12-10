<?php
	$filename = 'latest_visitor.txt';
	file_put_contents($filename, $_REQUEST["name"]);
	echo "saved " . $_REQUEST["name"] . " as last user";
?>