// ----------------------------------------------
// LearnWords2 API usage
//
// creation:
//     lw = new BoxOfQuestions(new LWdb('learnWords'));
//
// methods and properties used
//
//     lw.db.loadWords(wordlist)
//     lw.question()
//     lw.answer()
//     lw.moveQuestionForward()
//     lw.moveQuestionBackwards()
//
// 
//
// Asks one word and then terminates
// ----------------------------------------------

"use strict";
var repl = require("repl");
var chalk = require('chalk');


var LWdb = require('../src/LWdb');
var BoxOfQuestions = require('../src/BoxOfQuestions');


var wordlist = require('../data/json/wordlist-en-ge.json'); 






// ----------------------------------------------------------
// Set up the lw (learnwords) object
// ----------------------------------------------------------

var lw = new BoxOfQuestions(new LWdb('learnWords'));

// if (lw.db.numberOfWords() == 0) {lw.db.loadWords(wordlist)};
 


// ----------------------------------------------------------
// Clear console and write title
// ----------------------------------------------------------

console.log('\x1Bc'); 

function printLWHelp(){
console.log(chalk.yellow('LearnWords2 Read-Eval-Print-Loop'));
console.log('Commands');
console.log('   type',chalk.blue('.l'),'for lw.db.loadWords(wordlist)');
console.log('   type',chalk.blue('.w'),'for (lw.question()).word');
console.log('   type',chalk.blue('.q'),'for lw.question()');
console.log('   type',chalk.blue('.a'),'for lw.answer()');
console.log('   type',chalk.green('.t'),'for lw.moveQuestionForward()');
console.log('   type',chalk.red('.f'),'for lw.moveQuestionBackwards()');
console.log('');
console.log('JavaScript');
console.log('   you may also directly evaluate JavaScript expressions such as');
console.log('   lw.question()                      ');
console.log('   lw.db.getWord(1)                   ');
console.log('');
console.log('Other');
console.log('   type .help get general help.');
console.log('   type .lw2help get this text.');
console.log('   type',chalk.yellow('.exit'),'to terminate.');
console.log('');
};

printLWHelp();




// start Read-Eval-Print-Loop server

var replServer = repl.start({prompt: "--> "});

replServer.context.lw = lw;



replServer.defineCommand('lw2help', {
  help: 'LearnWords2 commands',
  action: function(name) {
    printLWHelp();
    this.displayPrompt();
  }
});





replServer.defineCommand('l',{help: 'lw.db.loadWords(wordlist)', action: function() {
  console.log(lw.db.loadWords(wordlist));
  this.displayPrompt();
  }
});



replServer.defineCommand('w',{help: '(lw.question()).word', action: function() {
  console.log((lw.question()).word);
  this.displayPrompt();
  }
});


replServer.defineCommand('q',{help: 'lw.question()', action: function() {
  console.log(lw.question());
  this.displayPrompt();
  }
});



replServer.defineCommand('a', function() {
  console.log(lw.answer());
  this.displayPrompt();
});


replServer.defineCommand('t', function() {
  lw.moveQuestionForward();
  this.displayPrompt();
});


replServer.defineCommand('f', function() {
  lw.moveQuestionBackwards();
  this.displayPrompt();
});
