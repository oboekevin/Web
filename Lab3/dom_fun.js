function magic(event) {
	// alert('hi');
	var ele = event.target;
	element_after(ele).style.backgroundColor = "green";
};
function element_after(ele) {
	if (ele.childElementCount > 0) {
		// alert('hi')
		return ele.firstElementChild;
	}
	num_siblings = ele.parentElement.childElementCount - 1;
	if (ele.parentElement.lastElementChild == ele) {
		return elementa_after(ele.parentElement)
	}
	// if (ele.parentNode)
};