function Pokemon (name, id) {
	this.name = name
	this.id = id
}
var pkmn_list = new Array()
var ROWS = 14
var COLS = 5
var first_id = 650
var last_id = 719
var table_text = ""
var count = first_id
function make_table() {
	for (r = 0; r < ROWS; r++) {
		table_text += "<tr>";
		for (c = 0; c < COLS; c++){
			table_text += "<td>id:" + count + "</td>";
			count++; 
		}
		table_text += "</tr>\n"
	}
	document.getElementById("pkmn_table").innerHTML = table_text
}