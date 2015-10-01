function magic(event) {
	var ele = event.target;
	var next = element_after(ele);
	// next.style.opacity = "0.5";
	fade(next);
	// element_after(ele).style.backgroundColor = "green";
};
function element_after(ele, skip) {
	if (skip == true) {
		//
	} else {
		if (ele.childElementCount > 0) {
			// alert('hi')
			return ele.firstElementChild;
		}
	}
	if (ele.nextElementSibling != null) {
		return ele.nextElementSibling;
	}
	return element_after(ele.parentElement, true);
};
function fade(elem) {
	// alert('howdy')
	elem.style.opacity = 0;
	var interval_id = setInterval(function () {
		// alert(typeof ele.style.opacity);
		var op = parseFloat(elem.style.opacity)
		// alert(typeof op)
		// alert(op)
		if (op < 1) {
			// alert(op + 0.1);
			elem.style.opacity = op + 0.1;
			// alert(elem.style.opacity)
		} else {
			clearInterval(interval_id);
		}
	}, 100);
};