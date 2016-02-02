function rand_int(ceil) {
	return Math.floor(Math.random() * ceil);
}

function make_maze(length, width) {
	// wall: 1, path: 0
	var maze = new Array(length);
	for(var i = 0; i < length; i++) {
		maze[i] = new Array(width);
		for(var j = 0; j < width; j++) {
			maze[i][j] = 1;
		}
	}
	var wall_list = new Array();
	maze[1][1] = 0;
	wall_list.push([0, 1]);
	wall_list.push([2, 1]);
	wall_list.push([1, 2]);
	wall_list.push([1, 0]);
	while(wall_list.length > 0) {
		console.log(wall_list)
		var i = rand_int(wall_list.length);
		var wall = wall_list[i];
		var cell = [wall[0], wall[1]];
		var k = Math.random();
		if(k < 0.25) {
			cell[1] += 1;
		} else if(k < 0.5) {
			cell[1] -= 1;
		} else if(k < 0.75) {
			cell[0] -= 1;
		} else {
			cell[0] += 1;
		}
		console.log(wall);
		console.log(cell);
		if(cell[0] < 0 || cell[1] < 0 || cell[0] >= maze.length || cell[1] >= maze[0].length) {
			continue;
		}
		if(maze[cell[0]][cell[1]] == 0) {
			maze[cell[0]][cell[1]] = 0;
			maze[wall[0]][wall[1]] = 0;

			edge_deltas = [[0, 1], [0, -1], [1, 0], [-1, 0]];
			neighbors = edge_deltas.map(function(d) {
				return [d[0] + cell[0], d[1] + cell[1]];
			});
			neighbors.forEach(function(n) {
				if(wall != n && n[0] >= 0 && n[1] >= 0 && n[0] < maze.length && n[1] < maze[0].length) {
					wall_list.push(n);
				}
			});
		}
		wall_list.splice(i, 1);
	}
	return maze;
}

var m = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
		[1, 1, 1, 0, 0, 0, 1, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
		[1, 0, 1, 0, 1, 0, 0, 0, 1, 1],
		[1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
		[1, 0, 1, 0, 1, 1, 2, 0, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
// make_maze(10, 8);
console.log(JSON.stringify(m);