function getWords() {
	var letters = document.getElementById('letters').value;
	if(letters.length == 0) return;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		document.getElementById("result").innerHTML = 'waiting';
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("result").innerHTML = xmlhttp.responseText;
		}
	}
	var args = {
		set:letters
	};
	xmlhttp.open("GET", "scrabble.php?"+dw_encodeVars(args), true);
	xmlhttp.send();
}
function dw_encodeVars(params) {
	var str = '';
	for (var i in params ) {
		str += encodeURIComponent(i) + '=' + encodeURIComponent( params[i] ) + '&';
	}
	return str.slice(0, -1);
}