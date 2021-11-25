function fetchFacts() {
	fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`)
		.then((response) => response.text())
		.then((data) => {
			let fact = JSON.parse(data).text;
			console.log(fact);
			document.getElementById("demo").innerHTML = fact;
		});
}
fetchFacts();

window.onload = () => {
	const nextButton = document.createElement("button");

	// document.body.append(nextButton);
	document.body.prepend(nextButton);
	nextButton.innerHTML = "Next";
	nextButton.addEventListener("click", function () {
		fetchFacts();
	});
};
