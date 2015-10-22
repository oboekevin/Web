function getProduct() {
	var num1=document.getElementById('num1').value;
	var num2=document.getElementById('num2').value;
	var str=num1+"|"+num2;
	if(num1.length==0 || num2.length==0) return;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		document.getElementById("product").innerHTML = 'waiting';
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("product").innerHTML = xmlhttp.responseText;
		}
	}
	var args = {
		first:num1,
		second:num2
	};
	xmlhttp.open("GET", "mult.php?"+dw_encodeVars(args), true);
	xmlhttp.send();
}
function dw_encodeVars(params) {
	var str = '';
	for (var i in params ) {
		str += encodeURIComponent(i) + '=' + encodeURIComponent( params[i] ) + '&';
	}
	return str.slice(0, -1);
}