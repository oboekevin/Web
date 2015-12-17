function translation() {
	// https://glosbe.com/gapi/translate?from=eng&dest=fra&format=xml&phrase=cat&pretty=true
	var word = document.getElementById('word').value;
	// if(word.length==0) return;
	var xmlhttp = new XMLHttpRequest({mozSystem: true});
	xmlhttp.onreadystatechange = function() {
		document.getElementById("result").innerHTML = 'waiting';
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("result").innerHTML = xmlhttp.responseText;
			j = JSON.parse(xmlhttp.responseText);
			document.getElementById("result").innerHTML = j["tuc"][0]["phrase"]["text"];
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
	var arg2 = { URL: url };
	var url2 = "api.php?" + dw_encodeVars(arg2);
	console.log(url);
	xmlhttp.open("GET", url2, true);
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