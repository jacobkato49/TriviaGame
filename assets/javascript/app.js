// ***Remember to keep the code simple***


// Make an Array for the questions
var myArray= [firstQuestion,secondQuestion,thirdQuestion,fourthQuestion,fifthQuestion];
	// Debugging area
	console.log(myArray.length);

	// See my comment #1 below on line 143.
	// This is undefined right now. Will have to figure out...why
	console.log(myArray[3]);	// Sidenote: remember to make a function that adjusts the value of the array

// Global Variables that can go into functions.  
var question;
var answers;
var userInput;
var IntervalID

// This counter will be for each round
var counter=20;  // Sidenote: Might get rid of this variable



$(document).ready(function(){
	$("#gameStart").on("click",function() {
		question= changeQuestion();
		displayQuestion(question);
		render(question);

		IntervalID= setInterval(function(){
			counter--;

			$("#timer").html("<h2>" + counter + " </h2>");

			if (counter===0) {
				displayTimeOut();
				clearinterval(IntervalID);
			} 

		})
		


	})
})







// Function this will display the questions under the start ("#start")
function displayQuestion() {
	var startDiv= $("<div>");

	startDiv.html(function(){
		return "<h1>" + question.questionScript + "</h1>"
	})

	console.log(question.questionScript);
	startDiv.addClass("col-md-12 marker");
	$("#start").append(startDiv)
}


// Function to render the question
function render(){
	var startDiv= $("#start");

	// Set content into the html
	startDiv.html("<h1>" + question.questionScript + "</h1>");

	var length=(question.potentialAnswers.length); // 4. Parentheses are not necessary here.
	console.log(length);

	for (var i=0; i<length; i++) {
		var btn =$("<button>");
			// Trying to add buttons for each question
		btn.addClass("col-md-6 temp btn-primary question" + i);
		btn.attr("data-let", question.potentialAnswers[i]);  // Why does this have to be a comma vs a semi-colon?
		                                                     // 5. Beacuse commas separate arguments/parameters 
								     //    to functions. Semi-colons end statements.
		btn.html(question.potentialAnswers[i]);
			// Add the buttons side by side
		$("#start").append(btn);
	}
}


// Function to change the question
function changeQuestion(){
	if(myArray.length>0) {
		// 2. Since you redeclared your globals (see comment #1) each value in myArray is 'undefined' here which is why things are failing.
		var number= Math.floor(Math.random()* myArray.length);
		question= myArray[number];
		myArray.splice(number.length);
		// Debugg Here
		console.log(number);
		console.log(question);
		console.log(myArray[number]);

		return question;
	} else {
		alert("The game is now over. Thank you for playing.");
	}

}

// Function for when the time runs out
function displayTimeOut () {
	$("#start").empty();
	displayQuestion(question);
}


// Function for GIF Appearance
	// Do this if you have time



// Function for the wrong answer
function displayWrongAnswer() {
	var div= $("<div>");
	div.addClass("col-md-12");
	div.html("<h2>" + userInput + " is not correct! The correct answer was " + answer + " ! </h2>");

	// add image or gif

	setTimeout(nextQuestion, 10000);
}

// Function to goto the next question
function nextQuestion () {
	$("#start").empty();
	changeQuestion();

	render();
}



// Questions (consists of objects)
	// Quiz will consist of five questions, if trouble shooting goes well increase
var firstQuestion = { // 1.  Here, (and below) you are setting a new variable with these particular identifiers rather than assigning 
	              //    values to those you defined and implicitly declared as globals in your array on line 5. This 
	              //    is why it's important to declare all necessary data i.e. variables, objects, arrays near the top
	              //    of your scripts and functions. Come talk to me in class about this, as it's a tricky issue.  
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
	// Debugging area for questions
	console.log(firstQuestion.potentialAnswers[1]);


