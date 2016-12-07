"use strict";

var aWord = {_id: 1, "word": "apple", "translate": "der Apfel"};

console.log('\x1Bc'); 

console.log('LearnWords2 demo'); 
console.log('');
console.log('Type the answers:');
console.log('');

// process.stdout.write('\x1B[2J');

console.log(aWord.word);

process.stdin.once('data', function (data) {
  var answer = data.toString().trim();

  if (answer == aWord.translate) {console.log('OK')}
  else {console.log('not OK')};

  process.exit();
});
