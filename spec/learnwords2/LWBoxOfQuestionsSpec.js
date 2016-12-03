"use strict";

var BoxOfQuestions = require('../../src/BoxOfQuestions');
var LWdb = require('../../src/LWdb');
var wordlist = require('../../data/wordlist-en-ge.js'); 

var LW;

describe("BoxOfQuestions", function() {
    
  beforeEach(function() {

    	LW = function(){

		var db = new LWdb('learnWords');

		db.loadWords(wordlist);

		var box = new BoxOfQuestions(db);

		return box
        }();
        
  });


  it("should be able to create a BoxOfQuestions object", function() {

    expect(LW).not.toBe(null);
    expect(LW).not.toBe(undefined);

    expect(LW).toBeObject();

    expect(LW.db.dbName).toBeString("learnWords");
    expect(LW.db.numberOfWords()).toBeNumber(10);

  });




  it("should be able to move an incorrect question back in the box", function() {

        var q = LW.question();
        var question_id = q._id;
      
        LW.moveQuestionBackwards(); // issue #65

        var updatedWord = LW.db.getWord(question_id);

        expect(updatedWord.date).toBeNumber();
        expect(updatedWord.date).toBeGreaterThan(new Date().valueOf());

  });



  xit("should be able to indicate eligible questions", function() {

        // LW.eligibleWords(); issue #63
        // returns a collection of eligible words (or objects).
         fail("Implement me!");

  });


  xit("should be able choose a random object from a collection", function() {

        // LW.chooseRandomObject(anArray); issue #59
        // returns a random object from anArray.

         fail("Implement me!");

  });



  xit("should be able to give a current question", function() {
    var q ;

    q = LW.currQuestion();

    expect(q).not.toBe(null);
    expect(q).not.toBe(undefined);
    expect(q).toBeObject();    

    expect(q).toHaveString("date");
  
    // add expect code here
    // date should be >= today

  });




  xit("should be able to choose a next question, give options for answers and process the answer", function() {
    var q, a, opt, aChoice;

    q = LW.currQuestion();
    a = LW.currAnswer();
    opt = LW.currAnswerOptions(); // includes the correct answer
   
    LW.processAnswer(aChoice);  // after this there will be a new current question.

    // add expect code here
    fail("Implement me!");

  });


  xit("should be able to give status information", function() {
    // the configuration 
  
    var r = LW.status();
   
    // add expect code here    
    fail("Implement me!");

  });

});
