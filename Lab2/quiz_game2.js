function Question(pic, que, re) {
	this.picture = pic;
	this.question = que;
	this.response = re;
}

var questions = [new Question("blue_rose.jpg", "What color is this?", "blue"),
				new Question(null, "What's my favorite color?", "blue")]
var q = questions[0];
var q_index = 0;
var score = 0;

function check_answer(ans) {
	if (q.response.toUpperCase() == ans.toUpperCase()) {
		score++;
		next_question();
	}
};

function update_question() {
	if (q.picture === null) {
		$("#picture").hide();
	} else {
		$("#picture").show();
		$("#picture").attr("src", q.picture);
	}
	$("#question").text(q.question);
};

function next_question() {
	$("#response").val("");
	q_index = (q_index + 1); // % questions.length;
	if (q_index < questions.length)
	{
		q = questions[q_index];
		update_question();
	} else {
		end_game();
	}
};

function end_game() {
	$("#quiz_zone").hide();
	$("#results").show();
	$("#score").text("Score: " + score + " / " + questions.length);
};

function reset_game() {
	$("#quiz_zone").show();
	$("#results").hide();
	shuffle_questions();
	q = questions[0];
	q_index = 0;
	score = 0;
}

function shuffle_questions() {
	// alert('hi??');
	var q2 = new Array();
	l = questions.length;
	for (i = l; i > 0; i--) {
		k = Math.floor(Math.random() * i)
		q2.push(questions[k]);
		questions.splice(k, k + 1);
	};
	questions = q2;
	// alert(questions.length);
};

$(document).ready(function(){
	update_question();
	$("#results").hide();
	shuffle_questions();
});