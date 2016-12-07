"use strict";
var LWdb = require('../src/LWdb');
var BoxOfQuestions = require('../src/BoxOfQuestions');
var wordlist = require('../data/wordlist-en-ge.js'); 


var LW = new BoxOfQuestions(new LWdb('learnWords'));
LW.db.loadWords(wordlist);
 

// var aWord = {_id: 1, "word": "apple", "translate": "der Apfel"};

var aWord = LW.question();

console.log('\x1Bc'); 

console.log('LearnWords2 demo'); 
console.log('');
console.log('Type the answers:');
console.log('');


console.log(aWord.word);

process.stdin.once('data', function (data) {
  var answer = data.toString().trim();

  if (answer == aWord.translate) {console.log('OK')}
  else {console.log('not OK')};

  process.exit();
});
