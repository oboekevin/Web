function translation() {
	// https://glosbe.com/gapi/translate?from=eng&dest=fra&format=xml&phrase=cat&pretty=true
	var word = document.getElementById('word').value;
	var e = document.getElementById("drop");
	var orig = e.options[e.selectedIndex].value;
	var destin = (orig == 'eng') ? 'epo' : 'eng';
	// console.log(word);
	// console.log(orig);
	// console.log(destin);
	if(word.length == 0) {
		word = 'cat';
		orig = 'eng';
		destin = 'epo';
	}

	var xmlhttp = new XMLHttpRequest({mozSystem: true});
	xmlhttp.onreadystatechange = function() {
		document.getElementById("result").innerHTML = 'waiting';

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			j = JSON.parse(xmlhttp.responseText);

			table = document.getElementById("examples");
			table.innerHTML = "";

			if (j["tuc"].length > 0) {
				var trans = new Array();
				for (var i = 0; i < j["tuc"].length; i++) {
					if ("phrase" in j["tuc"][i])
						trans.push(j["tuc"][i]["phrase"]["text"]);
				};
				var transl = trans.join(', ');
				document.getElementById("result").innerHTML = transl; // j["tuc"][0]["phrase"]["text"];

				examples = j["examples"];
				for (var i = 0; i < examples.length; i++) {
					tr = document.createElement("tr");
					td1 = document.createElement("td");
					// t1 = document.createTextNode(examples[i]["first"]);
					// td1.appendChild(t1);
					td1.innerHTML = examples[i]["first"];
					td2 = document.createElement("td");
					// t2 = document.createTextNode(examples[i]["second"]);
					// td2.appendChild(t2);
					td2.innerHTML = examples[i]["second"];
					tr.appendChild(td1);
					tr.appendChild(td2);
					table.appendChild(tr);
					// console.log(examples[i]);
				};
			} else {
				document.getElementById("result").innerHTML = "No translation found.";
			}
		}
	}
	var args = {
		from: orig,
		dest: destin,
		phrase: word,
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