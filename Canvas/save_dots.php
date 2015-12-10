<?php
// $db = sqlite_open('dots.db', 0666, $error);
// if (!$db) die ($error);
$db = new SQLite3('dots.db');
// in database as as x, y, r, color, selected

// echo json_encode($_REQUEST);
// echo "<br/>";
// echo json_encode($_REQUEST["rs"]);
// echo gettype($_REQUEST["rs"]);
$rs = explode(",", $_REQUEST["rs"]);
$xs = explode(",", $_REQUEST["xs"]);
$ys = explode(",", $_REQUEST["ys"]);
$colors = explode(",", $_REQUEST["colors"]);
$selecteds = explode(",", $_REQUEST["selecteds"]);
// yay parallel arrays
// intval
$db->exec("DELETE FROM Dots;");
for ($i=0; $i < count($rs); $i++) { 
	$dot = [$xs[$i], $ys[$i], $rs[$i], "'" . $colors[$i] . "'",
(int) filter_var($selecteds[$i], FILTER_VALIDATE_BOOLEAN)];
	echo json_encode($dot);
	echo "~~~";
	echo sql_statement($dot);
	echo "~~~";
	// $db->exec("DELETE FROM Dots;");
	$success = $db->exec(sql_statement($dot));
	echo $success;
	echo "<br/>";
	// echo $xs[$i];
	// echo "<br/>";
	// echo $ys[$i];
	// echo "<br/>";
	// echo $rs[$i];
	// echo "<br/>";
	// echo $colors[$i];
	// echo "<br/>";
	// echo $selecteds[$i];
	// echo "<br/>";
}
function sql_statement($dot) {
	$base = "INSERT INTO Dots VALUES(";
	$end = ");";
	return $base . implode(", ", $dot) . $end;
}
?>
