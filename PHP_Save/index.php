<html>
	<head>
		<title>
			Keep Count
		</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<script type="text/javascript" src="save_user.js"></script>
	</head>
	<body>
		<?php 
			// file_exists
			// file_get_contents
			// file_put_contents
			$filename = "visit_count.txt";
			if(file_exists($filename)) {
				$count = intval(file_get_contents($filename)) + 1;
			} else {
				$count = 1;
			}
			echo "<span>This page has been visited ";
			echo $count;
			echo " times.</span>";
			file_put_contents($filename, $count);
		?>
		<br/>
		<?php
			$filename = 'latest_visitor.txt';
			if ( !file_exists($dir) ) {
				$latest = "You're the first visitor!";
			} else {
				$latest = file_get_contents($filename);
			}
			echo "<span>" . $latest . "</span>";
		?>
		<br/><br/>
		<form name='form'>
			<input type='text' name='name' \>
			<input type='button' onclick='save_user();' value='mark your territory!' \> 
		</form>
		<div id='waiting'> </div>
	</body>
</html>
