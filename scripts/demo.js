// ----------------------------------------------
// LearnWords2 API usage
//
// creation:
//     LW = new BoxOfQuestions(new LWdb('learnWords'));
//
// methods and properties used
//
//     LW.db.loadWords(wordlist)
//     LW.question()
//     LW.answer()
//     LW.moveQuestionForward()
//     LW.moveQuestionBackwards()
//
// 
//
// Asks one word and then terminates
// ----------------------------------------------

"use strict";
var readline = require('readline');


var LWdb = require('../src/LWdb');
var BoxOfQuestions = require('../src/BoxOfQuestions');


var wordlist = require('../data/wordlist-en-ge.js'); 



// set up the LW (learnwords) object

var LW = new BoxOfQuestions(new LWdb('learnWords'));

if (LW.db.numberOfWords() == 0) {LW.db.loadWords(wordlist)};
 

// clear console
console.log('\x1Bc'); 


// write title
console.log('LearnWords2 demo'); 
console.log('');



// get a question from the box

var aWord = LW.question();
// gives for example 
// {_id: 1, "word": "apple", "translate": "der Apfel", "step": 0, "date": 0};




// if we got a question ask for the translation of the word

if (aWord) {

console.log('Type the answers:');
console.log('');


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(aWord.word + " = ", function(answer) {
     answer = answer.toString().trim();

     if (answer == LW.answer()) 
		{console.log('OK'); 
                 LW.moveQuestionForward()}
     else {console.log('the correct answer is:', LW.answer()); 
           LW.moveQuestionBackwards()};
rl.close();
})
} else {console.log('As of now there are no more words to repeat.')};


// currently only one question is asked and then the program quits.
// you have to restart the program to get the next question.
// 
// the db entries are in the 'scratch' subdirectory
