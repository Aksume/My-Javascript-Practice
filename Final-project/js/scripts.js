const text = document.querySelector(".info");
const text = text.textContent;
const splitText = strText.split("");
for (let i = 0; i < splitText.length; i++){
	text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 50);
function onTick() {
	const span = text.querySelectorAll("span")[char];
	span.classList.add(fade);
	char++
	if (char === splitText.length) {
		complete();
		return
	}
}
function complete() {
	clearInterval(timer);
	timer = null;
}
//generate the answers for the ball

//array of answers
var answers = [
	
	"It is certain",
	"Without a doubt",
	"Yes - definitely",
	"As I ee it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful",
	"Ask again later",
	"Cannot predict now",
];
// when window.onload 
  // The onload property processes load events after the element has finished loading
window.onload= function () {
	var eight = document.getElementById("eight");
	var answer = document.getElementById("answer");
	var Ask = document.getElementById("eight-ball");
	var question = document.getElementById("question");
	var h5 = document.querySelector("h5");
	 var divCircle = document.querySelector("#circle").style.animation =
		"spin1 1s linear infinite";

	Ask.addEventListener("click", function () {
		if (question.value.length < 1) {
			alert("Enter a question!");
		} else {
			eight.innerText = ""; // 8 means a place holder of the answer


			// Math.random() returns a random number between 0 (included) and 1 (excluded):
			// Math.floor() rounds a number DOWN to the nearest integer:

			var num = Math.floor(Math.random() * answers.length); //to get a random answers message
			// var num = Math.floor(0.6 * 14);
			// var num = Math.floor(8.4);
			// var num = 8; means

			answer.innerText = answers[num];

			// question.remove();

            question.hidden = true;           

			h5.innerHTML = question.value;

			divCircle = document.querySelector("#circle").style.animation =
				"idle 1s linear infinite";
			


		
		}
	});
};
