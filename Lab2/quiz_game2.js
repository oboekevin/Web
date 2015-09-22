q = {picture: "blue_rose.jpg", question: "What color is this?", response:"blue"};

// function pose_question(q) {
// 	document.getElementById("picture").src = q.picture;
// 	document.getElementById("question").innerHTML = q.question;
// };

function check_answer(ans) {
	if (quiz_item.response.toUpperCase() == ans.toUpperCase()) {
		alert('yup');
	} else {
		//
	}
};

$(document).ready(function(){
	// alert('hi');
	// pose_question(quiz_item);
	$("#picture").src = q.picture;
	$("#question").innerHTML = q.question;
});

// $("#response").change(function() {
// 	alert('hi');
// 	check_answer($(this).value);
// });