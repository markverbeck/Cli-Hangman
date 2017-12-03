var letter = require("./letter.js");
var wordChoice = "";
var wrongAnswers = 5;
var picked = [];
var wordStatus = "";
var inquirer = require("inquirer");
var gameEnd = false;
var currentWord = [];


// letter.slayer.dash();
// console.log(letter.slayer.question);

// Computer's choice of word..
var computerChoice = function(){
	var random = Math.floor(Math.random() * 4);
	currentWord = [];
	if(random === 0){
		wordChoice = letter.slayerName;
		letter.slayer.dash();
		currentWord = letter.slayer.question;
		console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);

	}else if(random === 1){
		wordChoice = letter.sepulturaName;
		letter.sepultura.dash();
		currentWord = letter.sepultura.question;
		console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);

	}else if(random === 2){
		wordChoice = letter.panteraName;
		letter.pantera.dash();
		currentWord = letter.pantera.question;
		console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);

	}else{
		wordChoice = letter.cCorpseName;
		letter.cCorpse.dash();
		currentWord = letter.cCorpse.question;
		console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
	}
};

// compare choice and letters..
var compare = function(letter){
	if(wordChoice === "slayer"){
		switch(letter){
			case "s" || "S":
				currentWord[0] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "l" || "L":
				currentWord[1] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "a" || "A":
				currentWord[2] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "y" || "Y":
				currentWord[3] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "e" || "E":
				currentWord[4] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "r" || "R":
				currentWord[5] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			default:
				wrongAnswers --;
				picked.push(letter);
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked)
				break;
		}

	}else if (wordChoice === "sepultura"){
		switch(letter){
			case "s" || "S":
				currentWord[0] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "e" || "E":
				currentWord[1] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "p" || "P":
				currentWord[2] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "u" || "U":
				currentWord[3] = letter;
				currentWord[6] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "l" || "L":
				currentWord[4] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "t" || "T":
				currentWord[5] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "r" || "R":
				currentWord[7] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "a" || "A":
				currentWord[8] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			default:
				wrongAnswers --;
				picked.push(letter);
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
		}
	}else if(wordChoice === "pantera"){
		switch(letter){
			case "p" || "P":
				currentWord[0] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "a" || "A":
				currentWord[1] = letter;
				currentWord[6] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "n" || "N":
				currentWord[2] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "t" || "T":
				currentWord[3] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "e" || "E":
				currentWord[4] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "r" || "R":
				currentWord[5] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			default:
				wrongAnswers --;
				picked.push(letter);
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
		}
	}else if(wordChoice === "cannibal corpse"){
		switch(letter){
			case "c" || "C":
				currentWord[0] = letter;
				currentWord[9] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "a" || "A":
				currentWord[1] = letter;
				currentWord[6] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "n" || "N":
				currentWord[2] = letter;
				currentWord[3] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "i" || "I":
				currentWord[4] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "b" || "B":
				currentWord[5] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "l" || "L":
				currentWord[7] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "o" || "O":
				currentWord[10] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "r" || "R":
				currentWord[11] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "p" || "P":
				currentWord[12] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "s" || "S":
				currentWord[13] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			case "e" || "E":
				currentWord[14] = letter;
				wordStatus = currentWord.join("");
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
			default:
				wrongAnswers --;
				picked.push(letter);
				console.log(currentWord + "   Wrong Choices Left: " + wrongAnswers + "\n" + "  Letters Picked: " + picked);
				break;
		}
	}
};

var win = function(){
	if(wordStatus === "slayer"){
		console.log("You Win!!");
		gameEnd = true;
	}else if(wordStatus === "sepultura"){
		console.log("You Win!!");
		gameEnd = true;
	}else if(wordStatus === "pantera"){
		console.log("You Win!!");
		gameEnd = true;
	}else if(wordStatus === "cannibal_corpse"){
		console.log("You Win!!");
		gameEnd = true;
	}
};

var lose = function(){
	if(wrongAnswers === 0){
		console.log("You Lose!");
		gameEnd = true;
	}
};

var choice = function(){
	inquirer.prompt([
			{
				type: "input",
				message: "Choose a letter:",
				name: "letterChoice"
			}
		]).then(function(response){
			compare(response.letterChoice);
			win();
			lose();
			if(gameEnd === true){
				// playAgain();
				console.log("Thanks for Playing!");
			}else if(gameEnd === false){
				choice();
			};
		});
};

// var playAgain = function(){
// 	inquirer.prompt([
// 			{
// 				message: "Play Again? y or n?",
// 				type: "input",
// 				name: "playAgain"

// 			}
// 		]).then(function(response){
// 			if(response.playAgain === "y" || "Y"){
// 				currentWord = [];
// 				gameEnd = false;
// 				wordChoice = "";
// 				wrongAnswers = 5;
// 				picked = [];
// 				wordStatus = "";
// 				computerChoice();
// 				choice();

// 			}else if (response.playAgain === "n" || "N"){
// 				console.log("Thanks for Playing!!");
// 			}
// 		});
// };


inquirer.prompt([
		{
			message: "Welcome to Heavey Metal Hangman." + "\n" + "  Press Enter to Begin!",
			name: "start game",
			type:"input"
		}
	]).then(function(){
		computerChoice();
		choice();
	});