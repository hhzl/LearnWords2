"use strict";
var LWdb = require('../src/LWdb');
var BoxOfQuestions = require('../src/BoxOfQuestions');
var wordlist = require('../data/wordlist-en-ge.js'); 

var readline = require('readline');

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
// ----------------------------------------------



var LW = new BoxOfQuestions(new LWdb('learnWords'));

if (LW.db.numberOfWords() == 0) {LW.db.loadWords(wordlist)};
 

console.log('\x1Bc'); 

console.log('LearnWords2 demo'); 
console.log('');
console.log('Type the answers:');
console.log('');


// var aWord = {_id: 1, "word": "apple", "translate": "der Apfel"};

var aWord = LW.question();


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

});


