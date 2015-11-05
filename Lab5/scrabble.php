<?php
$letter_values = array('a' => 1, 
	'b' => 3,
	'c' => 3,
	'd' => 2,
	'e' => 1,
	'f' => 4,
	'g' => 2,
	'h' => 1,
	'i' => 4,
	'j' => 8,
	'k' => 5,
	'l' => 1,
	'm' => 3,
	'n' => 1,
	'o' => 1,
	'p' => 3,
	'q' => 10,
	'r' => 1,
	's' => 1,
	't' => 1,
	'u' => 1,
	'v' => 4,
	'w' => 4,
	'x' => 8,
	'y' => 4,
	'z' => 10);

$letters = $_REQUEST["set"];
$pattern = "/^[" . $letters . "]+$/m";
$dict = file_get_contents("dictionnary.txt");
preg_match_all($pattern, $dict, $matches);

$words = $matches[0];

foreach ($words as &$word) {
	$bank = $letters . "";
	for ($i=0; $i < strlen($word); $i++) {
		$letter = substr($word, $i, 1);
		$index = strrpos($bank, $letter);
		if ($index === false) {
			$word = "";
			break;
		}
		$bank = substr($bank, 0, $index) . substr($bank, $index + 1);
	}
}

$words = array_filter($words);

foreach ($words as &$value) {
	$score = 0;
	for ($i=0; $i < strlen($value); $i++) { 
		$score += $letter_values[substr($value, $i, 1)];
	}
	# echo '<pre>'; var_dump($score); echo '</pre>';
	$value = $score . " " . $value;
}
rsort($words, SORT_NUMERIC);
// array_reverse($words, false);

echo implode("<br/>", $words); # json_encode
?>