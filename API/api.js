function translation() {
	// https://glosbe.com/gapi/translate?from=eng&dest=fra&format=xml&phrase=cat&pretty=true
	var word = document.getElementById('word').value;
	// if(word.length==0) return;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		document.getElementById("result").innerHTML = 'waiting';
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("result").innerHTML = xmlhttp.responseText;
		}
	}
	var args = {
		from: 'eng',
		dest: 'epo',
		phrase: 'cat',
		tm: true,
		format: 'json',
		pretty: true
	}
	console.log(args);
	var url = "https://glosbe.com/gapi/translate?"+dw_encodeVars(args);
	console.log(url);
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function set_destination(where) {
	//
}

function dw_encodeVars(params) {
	var str = '';
	for (var i in params ) {
		str += encodeURIComponent(i) + '=' + encodeURIComponent( params[i] ) + '&';
	}
	return str.slice(0, -1);
}