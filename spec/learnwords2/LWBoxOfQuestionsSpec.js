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




  xit("should be able to load additional questions", function() {

    var previousNumberOfWords = LW.db.numberOfWords();
  
    LW.db.loadWords(wordlist);

    expect(LW.db.numberOfWords()).toBe(previousNumberOfWords + wordlist.length);

  
  });


  it("should be able to have the number of steps set", function() {

    expect(LW.noOfSteps).toBe(3); // the default

    LW.setNumberOfSteps(7);

    expect(LW.noOfSteps).toBe(7); 

  });



  xit("should be able to process configuration information", function(aConfigObj) {
    // the configuration 
    // aConfigObj = {"algorithm": "Leitner", "noOfSteps": 5};
    LW.config(aConfigObj);     

    // expect code here
    fail("Implement me!");
  });



  xit("should be able to choose a next question", function() {
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
