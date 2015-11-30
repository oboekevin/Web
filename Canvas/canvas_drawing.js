var dots = new Array();
// var selected = new Array();
var mouse_down = null;
// var R = 10;

function selected(dot) {
	return dot.selected;
}

function distance(p1, p2) {
	return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
}
function sign(a) {
	return a / Math.abs(a);
}
function between(a, b, x) {
	if (a < b) {
		return (a <= x && x <= b);
	} else {
		return (b <= x && x <= a);
	}
}

function keyDown(event) {
	//
}

function keyUp(event) {
	//
}

function mouseWentDown(event) {
	var c = document.getElementById("canvas");
	mouse_down = {x: event.x - c.offsetLeft, y: event.y - c.offsetTop};
}

function mouseWentUp(event) {
	var c = document.getElementById("canvas");
	var ctx = c.getContext('2d');
	mouse_up = {x: event.x - c.offsetLeft, y: event.y - c.offsetTop};
	dist = distance(mouse_down, mouse_up);
	// console.log(dist);
	if (dist < 2) {
		if (dots.filter(selected).length > 0 && !window.event.ctrlKey) {
			clearSelection();
		} else {
			var close_to_a_dot = false;
			var dot_found = null;
			dots.forEach(function(dot) {
				if (distance(mouse_up, dot) < dot.r) {
					dot.selected = true;
					close_to_a_dot = true;
					dot_found = dot;
				}
			})
			if (close_to_a_dot) {
				refillDots([dot_found]);
			} else {
				makeDot(event);
			}
		}
	} else {
		if (!window.event.ctrlKey) {	
			clearSelection(); 
		}
		selectDots(mouse_down, mouse_up);
	}
	mouse_down = null;
	ctx.clearRect(0, 0, c.width, c.height);
	refillDots(dots);
}

function mouseMoved(event) {
	var c = document.getElementById("canvas");
	var ctx = c.getContext('2d');
	m = {x: event.x - c.offsetLeft, y: event.y - c.offsetTop};
	if (mouse_down) {
		ctx.clearRect(0, 0, c.width, c.height);
		refillDots(dots);
		ctx.rect(m.x, m.y, mouse_down.x - m.x, mouse_down.y - m.y);
		ctx.stroke();
	}
}

function selectDots(md, mu) {
	// for (var x = md.x; x <= mu.x; x += sign(mu.x - mx.x)) {
	// 	for (var y = md.y; y <= mu.y; y += sign(mu.y - mx.y)) {	} }
	dots.forEach(function(dot) {
		if (between(md.x, mu.x, dot.x) && between (md.y, mu.y, dot.y)) {
			// console.log("we got a hit");
			// selected.push(dot);
			dot.selected = true;
		}
	})
	refillDots(dots);
}

function clearSelection() {
	dots.forEach(function(dot) {
		dot.selected = false;
	})
	refillDots(dots);
}

function clearCanvas() {
	clearSelection();
	dots = new Array();
	var c = document.getElementById("canvas");
	var ctx = c.getContext('2d');
	ctx.clearRect(0, 0, c.width, c.height);
}

function makeDot(event) {
	var c = document.getElementById("canvas");
	var ctx = c.getContext('2d');
	dot = {x: event.x - c.offsetLeft, y: event.y - c.offsetTop, r: 10, color: "white", selected: false};
	dots.push(dot);
	drawDot(ctx, dot);
}

function drawDot(ctx, dot) {
	ctx.beginPath();
	ctx.arc(dot.x - dot.r, dot.y - dot.r, dot.r, 0, 2 * Math.PI);
	ctx.fillStyle = dot.color;
	if (dot.selected) {
		ctx.fillStyle = "blue";
	}
	ctx.fill();
	ctx.stroke();
}

function connectDots(dots) {
	var ctx = getContext();
	dots.forEach(function(dot) {
		for (var i = 0; i < dots.length; i++) {
			ctx.moveTo(dot.x, dot.y);
			ctx.lineTo(dots[i].x, dots[i].y);
			ctx.stroke();
		};
	});
	refillDots(dots);
}

function refillDots(which) {
	var ctx = getContext();
	// console.log(which);
	which.forEach(function(dot) {
		drawDot(ctx, dot);
	})
}

function colorDots(dots) {
	dots.forEach(function(dot) {
		dot.color = "red";
	})
	refillDots(dots);
}

function uncolorDots(dots) {
	dots.forEach(function(dot) {
		dot.color = "white";
	})
	refillDots(dots);
}

function getContext() {
	var c = document.getElementById("canvas");
	return c.getContext('2d');
}