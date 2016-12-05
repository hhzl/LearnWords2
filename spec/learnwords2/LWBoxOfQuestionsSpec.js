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




  xit("should be able to import questions", function(arrayOfQuestions) {

    expect(LW).not.toBe(null);


    expect(LW).toHaveMethod("importFrom");


  });




  it("should be able to indicate which words are to be repeated", function() {


    // LW.wordsToRepeat(); issue #63

    expect(LW).not.toBe(null);


    expect(LW).toHaveMethod("wordsToRepeat");


  });



  it("should be able to give a question", function() {

    expect(LW).not.toBe(null);

/*
    var q ;

    expect(q).not.toBe(null);
    expect(q).not.toBe(undefined);
    expect(q).toBeObject();    

    expect(q).toHaveString("date");
  
    // add expect code here
    // date should be >= today
*/
    expect(LW).toHaveMethod("question");


  });




  it("should be able to give an answer", function() {

    expect(LW).not.toBe(null);


    expect(LW).toHaveMethod("answer");


  });


 it("should be able to give answer options", function() {

    expect(LW).not.toBe(null);


    expect(LW).toHaveMethod("getAnswerOptions");


  });




  it("should be able to move an incorrect question back in the box", function() {

        var q = LW.question();
        var question_id = q._id;
      
        LW.moveQuestionBackwards(); // issue #65

        var updatedWord = LW.db.getWord(question_id);

        expect(updatedWord.date).toBeNumber();
        expect(updatedWord.date).toBeGreaterThan(new Date().valueOf());

        
        expect(updatedWord.step).toBeNumber(0);
        // this asuumes we do not have a learn mode yet

  });






  xit("should be able to move an answer forward", function() {

        // moveQuestionForward()

         fail("Implement me!");

  });



  xit("should be able choose a random object from a collection", function() {

        // LW.chooseRandomObject(anArray); issue #59
        // returns a random object from anArray.

         fail("Implement me!");

  });



 
  xit("should be able to give status information", function() {
    // the configuration 
  
    var r = LW.status();
   
    // add expect code here    
    fail("Implement me!");

  });

});
