var food_challenges = {"spice": ["spicy food 1", "spicy food 2", "spicy food 3"],
	"quant": ["massive hamburger 1", "massive hamburger 2", "massive hamburger 3"],
	"qual": ["haute cuisine 1", "haute cuisine 2", "haute cuisine 3"],
	"fat": ["deep fried oreos", "fried butter", "bacon french fries"],
	"??": ["?? 1", "?? 2", "?? 3"]}

function main() {
	// document.getElementByName("username").focus();
}

function choose_drop(which) {
	if (which == 'a') {
		//
	} else if (which == 'b') {
		//
	} else {
		alert("Error! Tried to pick a choice other than a or b.")
	}
}

function challenge_type(which) {
	alert('hi')
	var choices = food_challenges[which];
	var where_to_go = document.getElementById('food');
	for (var i = 0; i < choices.length; i++) {
		var ele = document.createElement('input');
		ele.type = 'checkbox';
		ele.name = which + i;
		ele.appendChild(document.createTextNode(choices[i]));
		where_to_go.appendChild(ele);
	}
}