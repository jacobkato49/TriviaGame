
// Make an Array for the questions
var myArray= [firstQuestion,secondQuestion,thirdQuestion,fourthQuestion,fifthQuestion];
console.log(myArray.length);
console.log(myArray[3]);






// Questions
	// Quiz will consist of five questions, if trouble shooting and everything goes well increase

var firstQuestion = {
	"questionNumber": 1,
	"timeRemaining": 30,
	"questionScript": "Who is the 45th president of the United States?",

	"potentialAnswers": ["Lebron James", "Barrack Obama", "Cheetoh aka Donald Trump", "George Washington"],

	// might change this to just access the array instead of typing out the answer
	"correctAnswer": "Cheetoh aka Donald Trump",

	// put a gif here so it appears after each question if you still have time
	// "imageGif":
}

var secondQuestion = {
	"questionNumber": 2,
	"timeRemaining": 30,
	"questionScript": "Which of these is the longest running primetime TV series in the US?",

	"potentialAnswers": ["Law and Order", "Friends", "Gunsmoke", "The Simpsons"],

	"correctAnswer": "The Simpsons",

	// put a gif here so it appears after each question if you still have time
	// "imageGif": ,
}

var thirdQuestion = {
	"questionNumber": 3,
	"timeRemaining": 30,
	"questionScript": "What is the highest grossing film of all time? Hint: this is adjusted for inflation",

	"potentialAnswers": ["Titanic", "Star Wars", "Gone with the Wind", "Avatar"],

	"correctAnswer": "Gone with the Wind",

	// put a gif here so it appears after each question if you still have time
	// "imageGif": ,
}

var fourthQuestion = {
	"questionNumber": 4,
	"timeRemaining": 30,
	"questionScript": "Who is the most search athlete on google as of April 2017?",

	"potentialAnswers": ["Steph Curry", "Lebron James", "Aaron Hernandez", "Tom Brady"],

	"correctAnswer": "Aaron Hernandez",

	// put a gif here so it appears after each question if you still have time
	// "imageGif": ,
}

var fifthQuestion = {
	"questionNumber": 5,
	"timeRemaining": 30,
	"questionScript": "Who makes it, has no need of it. Who buys it, has no use for it. Who uses it can neither see nor feel it? What is it?",

	"potentialAnswers": ["Air", "Coffin", "Music", "Apple"],

	"correctAnswer": "Coffin",

	// put a gif here so it appears after each question if you still have time
	// "imageGif": ,
}

console.log(firstQuestion.potentialAnswers[1]);


