// FIRST_METHOD


function fetchFacts() {
	fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`)
		.then((response) => response.json())
		.then((data) => alert(data.text));
}
fetchFacts();


// second method 
// 
// function fetchFacts() {
//     fetch(
//         `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`
//     )
//         .then((response) => response.text())
//         .then((data) =>
//         {
//         	let fact = JSON.parse(data).text;
//         	alert(fact);
//         });
//         }

//     fetchFacts()

//    third method
// function CatFacts() {
// 	fetch("https://cat-fact.herokuapp.com/facts")
// 		.then((res) => {
// 			return res.json();
// 		})
// 		.then(function (facts) {
// 			const factsLength = facts.length;
// 			const randomNumber = Math.random() * factsLength;
// 			const flooredNumber = Math.floor(randomNumber);
// 			alert(facts[flooredNumber].text);
// 		});
// }
// CatFacts();
