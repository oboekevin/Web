var food_challenges = {"spice": ["Flaming Tongue Tacos", "Devil's Sauce Sub", "Indian Kebabs", "5Guys Cajun Fries"],
	"quant": ["Colossal Burger", "5 Foot Pizza", "Mile of Noodles"],
	"qual": ["Escargot", "Creme brulee", "Truffles"],
	"fat": ["Deep Fried Oreos", "Fried Butter", "Bacon French Fries"],
	"??": ["Pickled Watermelon Rinds", "Crickets", "Fried Grapes"]}

function main() {
	// document.getElementByName("username").focus();
}

function validate_form() {
	var form = document.forms["f"]

	//----- username -----//
	var re = /^\w+$/
	if (! validate_field(form, "username", re)) {
		return false;
	}

	//-----city-----//
	re = /^[A-z]+$/
	if (! validate_field(form, "city", re)) {
		return false;
	}

	//-----state-----//
	re = /^[A-z]+$/
	if (! validate_field(form, "state", re)) {
		return false;
	}

	//-----zip-----//
	re = /^\d{5}(-\d{4})?$/
	if (! validate_field(form, "zip", re)) {
		return false;
	}

	//-----date-----//
	re = /^\d{2}\/\d{2}\/\d{2}$/
	if (! validate_field(form, "date", re)) {
		return false;
	}

	//-----phone-----//
	re = /^\d{3}\-\d{3}\-\d{4}$/
	if (! validate_field(form, "phone", re)) {
		return false;
	}
}

function validate_field(form, field_name, regular_exp) {
	if (regular_exp.test(form[field_name].value)) {
		form[field_name].style.backgroundColor = "#FFFFFF";
		return true;
	} else {
		form[field_name].style.backgroundColor = "#FFAAAA";
		form[field_name].focus();
		return false;
	}
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