function check(ele, re) {
	// alert('hi');
	if (re.test(ele.value)) {
		// alert('success');
		ele.style.backgroundColor = "#CCFFCC";
	} else {
		ele.style.backgroundColor = "#FFCCCC";
	}
}

function init() {
	var eles = document.getElementsByTagName('input');
	for (i = 0; i < eles.length; i++) {
		eles[i].value = "";
	}
}