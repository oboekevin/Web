function save_user() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		document.getElementById("waiting").innerHTML = 'waiting';
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("waiting").innerHTML = xmlhttp.responseText;
		}
	}
	var args = {
		name: document.forms['form'].name.value
	};
	xmlhttp.open("GET", "save_user.php?"+dw_encodeVars(args), true);
	xmlhttp.send();
}
function dw_encodeVars(params) {
	var str = '';
	for (var i in params ) {
		str += encodeURIComponent(i) + '=' + encodeURIComponent( params[i] ) + '&';
	}
	return str.slice(0, -1);
}