function display_results(response) {
	// document.getElementById("result").innerHTML = response;
	var results = response.split('<br/>');
	results[0] = "<span id='best'>" + results[0] + "</span>";
	for (var i = 0; i < results.length; i++) {
		results[i] = '<span class="box">' + results[i] + '</span>';
	};
	var out = results.join('\n');
	document.getElementById("result").innerHTML = out;
}

// function start_timer() {
// 	interval_id = setInterval(timer_helper, 400);
// };

// function timer_helper() {
// 	var time = parseInt(document.getElementById('timer').innerHTML);
// 	if (time == 0) {
// 		end_game();
// 	} else {
// 		document.getElementById('timer').innerHTML = "" + (time - 1)
// 	}
// }

function getWords() {
	var letters = document.getElementById('letters').value;
	if(letters.length == 0) return;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		document.getElementById("result").innerHTML = 'waiting';
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			display_results(xmlhttp.responseText)
			// document.getElementById("result").innerHTML = xmlhttp.responseText;
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