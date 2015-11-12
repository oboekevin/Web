var dots = new Array();

function clearCanvas() {
	dots = new Array();
	var c = document.getElementById("canvas");
	var ctx = c.getContext('2d');
	ctx.clearRect(0, 0, c.width, c.height);
}

function drawDot(event) {
	// console.log(event)
	var c = document.getElementById("canvas");
	// console.log(c);
	var ctx = c.getContext('2d');
	dot = {x: event.x - c.offsetLeft, y: event.y - c.offsetTop, r: 10}
	dots.push(dot)
	ctx.beginPath();
	ctx.arc(dot.x, dot.y, 10, 0, 2 * Math.PI);
	ctx.stroke();
}

function connectDots() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext('2d');

	dots.forEach(function(dot) {
		for (var i = 0; i < dots.length; i++) {
			ctx.moveTo(dot.x, dot.y);
			ctx.lineTo(dots[i].x, dots[i].y);
			ctx.stroke();
		};
	});
}

function colorDots() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext('2d');

	dots.forEach(function(dot) {
		ctx.beginPath();
		ctx.arc(dot.x, dot.y, 10, 0, Math.PI * 2);
		ctx.fillStyle = "red";
		ctx.fill();
	})
}

function uncolorDots() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext('2d');

	dots.forEach(function(dot) {
		ctx.beginPath();
		ctx.arc(dot.x, dot.y, 10, 0, Math.PI * 2);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.arc(dot.x, dot.y, 10, 0, Math.PI * 2);
		ctx.stroke();
	})
}