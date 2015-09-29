function Question(pic, que, re) {
	this.picture = pic;
	this.question = que;
	this.response = re;
	this.toString = function(){
		return "{" + this.picture + ", " + this.question + ", " + this.response + "}";
	}
}

var questions = [new Question("blue_rose.jpg", "What color is this?", "blue"),
				new Question(null, "What's my favorite color?", "blue")]
var q = questions[0];
var q_index = 0;
var score = 0;
var interval_id;

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
	} else {
		end_game();
	}
	update_question();
};

function end_game() {
	$("#quiz_zone").hide();
	$("#results").show();
	$("#timer").hide();
	$("#quit").hide();
	$("#score").text("Score: " + score + " / " + questions.length);
	clearInterval(interval_id);
};

function reset_game() {
	end_game();
	$("#timer").text("30");
	$("#timer").show();
	$("#quiz_zone").show();
	$("#results").hide();
	$("#start").hide();
	$("#quit").show();
	shuffle_questions();
	score = 0;
	start_timer();
};

function shuffle_questions() {
	var l = questions.length;
	for (i = 0; i < l; i++) {
		var j = Math.floor(Math.random() * l);
		var k = Math.floor(Math.random() * l);
		var a = questions[j];
		var b = questions[k];
		questions[k] = a;
		questions[j] = b;
	}
	console.log(questions.toString());
	q_index = 0;
	q = questions[0];
	update_question();
};

function timer_helper() {
	var time = parseInt(document.getElementById('timer').innerHTML);
	if (time == 0) {
		end_game();
	} else {
		document.getElementById('timer').innerHTML = "" + (time - 1)
	}
};

function start_timer() {
	interval_id = setInterval(timer_helper, 1000);
};

$(document).ready(function(){
	update_question();
	$("#results").hide();
	$("#quiz_zone").hide();
	// shuffle_questions();
});