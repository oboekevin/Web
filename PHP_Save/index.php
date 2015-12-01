<html>
	<head>
		<title>
			Keep Count
		</title>
	</head>
	<body>
		<?php 
// file_exists
// file_get_contents
//
$filename = "visit_count.txt";
if(file_exists($filename)) {
	$count = intval(file_get_contents($filename)) + 1;
} else {
	$count = 1;
}
echo "<span>This page has been visited ";
echo $count;
echo " times.</span>";
// file_put_contents($filename, $count);
		?>
	</body>
</html>
