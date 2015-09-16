var pkmn_list = ['Chespin', 'Quilladin', 'Chesnaught', 'Fennekin', 'Braixen', 'Delphox', 'Froakie', 'Frogadier', 'Greninja', 'Bunnelby', 'Diggersby', 'Fletchling', 'Fletchinder', 'Talonflame', 'Scatterbug', 'Spewpa', 'Vivillon', 'Litleo', 'Pyroar', 'Flabébé', 'Floette', 'Florges', 'Skiddo', 'Gogoat', 'Pancham', 'Pangoro', 'Furfrou', 'Espurr', 'Meowstic', 'Honedge', 'Doublade', 'Aegislash', 'Spritzee', 'Aromatisse', 'Swirlix', 'Slurpuff', 'Inkay', 'Malamar', 'Binacle', 'Barbaracle', 'Skrelp', 'Dragalge', 'Clauncher', 'Clawitzer', 'Helioptile', 'Heliolisk', 'Tyrunt', 'Tyrantrum', 'Amaura', 'Aurorus', 'Sylveon', 'Hawlucha', 'Dedenne', 'Carbink', 'Goomy', 'Sliggoo', 'Goodra', 'Klefki', 'Phantump', 'Trevenant', 'Pumpkaboo', 'Gourgeist', 'Bergmite', 'Avalugg', 'Noibat', 'Noivern', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie'];
var ROWS = 1; //14;
var COLS = 5;
var first_id = 650;
var last_id = 654; // 719;
var num_pokemon = last_id - first_id + 1;
var number_completed = 0;
var total_time = 20;
var interval_id;

function input_answer(text) {
	// alert('hi');
	for (k = 0; k < num_pokemon; k++) {
		if (pkmn_list[k] == text) {
			if (document.getElementById("pkmn" + (k + first_id)).innerHTML == "?????") {
				document.getElementById("pkmn" + (k + first_id)).innerHTML = (k + first_id) + " - " + pkmn_list[k];
				number_completed++;
				document.getElementById("input_box").value = "";
				if (number_completed == num_pokemon) {
					end_game();
				}
			}
		}
	}
};

function make_table() {
	var count = first_id;
	var table_text = "";
	for (r = 0; r < ROWS; r++) {
		table_text += "<tr>\n";
		for (c = 0; c < COLS; c++){
			table_text += "<td id=\"pkmn" + count +"\">?????</td>\n"; // " + count + " - " + pkmn_list[count - first_id] + "
			count++; 
		}
		table_text += "</tr>\n";
	}
	document.getElementById("pkmn_table").innerHTML = table_text;
};

function timer_helper() {
	var time = parseInt(document.getElementById('timer').innerHTML);
	if (time == 0) {
		end_game();
	} else {
		document.getElementById('timer').innerHTML = "" + (time - 1)
	}
}

function start_timer() {
	interval_id = setInterval(timer_helper, 1000);
};

function onload() {
	make_table();
	document.getElementById('start_button').removeAttribute('disabled');
	document.getElementById('quit_button').setAttribute('disabled', 'disabled');
}

function new_game() {
	make_table();
	document.getElementById('start_button').setAttribute('disabled', 'disabled');

	document.getElementById('input_box').value = "";
	document.getElementById('quit_button').removeAttribute('disabled');
	document.getElementById('input_box').removeAttribute('disabled');
	document.getElementById('input_box').focus();
	document.getElementById('timing').innerHTML = "Time remaining: <span id=\"timer\">20</span>";
	start_timer();
}

function end_game() {
	clearInterval(interval_id);
	message = 'Result: ' + number_completed + " / " + num_pokemon
	message += " - ";
	message += (num_pokemon == number_completed) ? "you won!" : "you lost";
	document.getElementById('timing').innerHTML = message
	document.getElementById('input_box').setAttribute('disabled', 'disabled');
	document.getElementById('quit_button').setAttribute('disabled', 'disabled');
	number_completed = 0;
}