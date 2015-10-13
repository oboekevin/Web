var food_challenges = {"spice": ["spicy food 1", "spicy food 2", "spicy food 3"],
	"quant": ["massive hamburger 1", "massive hamburger 2", "massive hamburger 3"],
	"qual": ["haute cuisine 1", "haute cuisine 2", "haute cuisine 3"],
	"fat": ["deep fried oreos", "fried butter", "bacon french fries"],
	"??": ["?? 1", "?? 2", "?? 3"]}

function main() {
	// document.getElementByName("username").focus();
}

function challenge_type(select) {
	// alert('hi');
	which = select.options[select.selectedIndex].value;
	var choices = food_challenges[which];
	var where_to_go = document.getElementById('food');

	while (where_to_go.firstChild) {
		where_to_go.removeChild(where_to_go.firstChild);
	}

	for (var i = 0; i < choices.length; i++) {
		var ele = document.createElement('input');
		ele.type = 'checkbox';
		ele.name = which + i;
		where_to_go.appendChild(ele);
		where_to_go.appendChild(document.createTextNode(choices[i]));
		where_to_go.appendChild(document.createElement("br"));
	}
}