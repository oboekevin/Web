<html>
<head>
	<title>Forms Lab</title>
	<link rel="stylesheet" type="text/css" href="stylesheet.css" />
	<link rel="stylesheet" type="text/css" href="../style.css" />
</head>
<body>
<?php
	// echo json_encode($_REQUEST);
	echo "<h1>Hello, ";
	echo $_REQUEST["username"];
	echo "!</h1>";
	echo "<h2>So, you live in ";
	echo $_REQUEST["city"];
	echo ", ";
	echo $_REQUEST["state"];
	echo "?</h2><br />";

	echo "<div hidden>";

	$r = $_REQUEST;
	$person = [$r["username"], $r["city"], $r["state"], $r["zip"], $r["email"], $r["date"], $r["phone"], ];

	$db = new SQLite3('people.db');

	echo sql_statement($person);
	echo " ~~~ ";
	$success = $db->exec(sql_statement($person));
	echo json_encode($success);
	echo "<br/>";

	echo "</div>";

	function sql_statement($person) {
		$base = "INSERT INTO People VALUES('";
		$end = "');";
		return $base . implode("', '", $person) . $end;
	}
?>
</body>
</html>

<!-- {"username":"kevin","city":"Alexandria","state":"VA",
"zip":"22310","email":"kevinchaplin58@gmail.com",
"date":"05\/01\/16","phone":"703-201-4938",
"pick_drop":"a","quant0":"on","quant1":"on"} -->