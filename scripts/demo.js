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
var repl = require("repl");



var LWdb = require('../src/LWdb');
var BoxOfQuestions = require('../src/BoxOfQuestions');


var wordlist = require('../data/wordlist-en-ge.js'); 






// ----------------------------------------------------------
// Set up the LW (learnwords) object
// ----------------------------------------------------------

var LW = new BoxOfQuestions(new LWdb('learnWords'));

// if (LW.db.numberOfWords() == 0) {LW.db.loadWords(wordlist)};
 



// ----------------------------------------------------------
// Clear console and write title
// ----------------------------------------------------------

console.log('\x1Bc'); 

function printLWHelp(){
console.log('LearnWords2 Read-Eval-Print-Loop');
console.log('Commands');
console.log('   type .lw for LW.db.loadWords(wordlist)');
console.log('   type .qw for (LW.question()).word');
console.log('   type .qo for LW.question()');
console.log('   type .a  for LW.answer()');
console.log('   type .ok for LW.moveQuestionForward()');
console.log('   type .nok for LW.moveQuestionBackwards()');
console.log('');
console.log('JavaScript');
console.log('   you may also directly evaluate JavaScript expressions such as');
console.log('   LW.question()                      ');
console.log('   LW.db.getWord(1)                   ');
console.log('');
console.log('Other');
console.log('   type .help get general help.');
console.log('   type .lw2help get this text.');
console.log('   type .exit to terminate.');
console.log('');
};

printLWHelp();




// start Read-Eval-Print-Loop server

var replServer = repl.start({prompt: "--> "});

replServer.context.LW = LW;



replServer.defineCommand('lw2help', {
  help: 'LearnWords2 commands',
  action: function(name) {
    printLWHelp();
    this.displayPrompt();
  }
});





replServer.defineCommand('lw',{help: 'LW.db.loadWords(wordlist)', action: function() {
  console.log(LW.db.loadWords(wordlist));
  this.displayPrompt();
  }
});



replServer.defineCommand('qw',{help: '(LW.question()).word', action: function() {
  console.log((LW.question()).word);
  this.displayPrompt();
  }
});


replServer.defineCommand('qo',{help: 'LW.question()', action: function() {
  console.log(LW.question());
  this.displayPrompt();
  }
});



replServer.defineCommand('a', function() {
  console.log(LW.answer());
  this.displayPrompt();
});


replServer.defineCommand('ok', function() {
  LW.moveQuestionForward();
  this.displayPrompt();
});


replServer.defineCommand('nok', function() {
  LW.moveQuestionBackwards();
  this.displayPrompt();
});
