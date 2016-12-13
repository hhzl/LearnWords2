"use strict";

var BoxOfQuestions = require('../../src/BoxOfQuestions');
var LWdb = require('../../src/LWdb');
var wordlist = require('../../data/wordlist-en-ge.js'); 

var LW;



describe("BoxOfQuestions construction", function() {


  it("should be able to create a BoxOfQuestions object (var 1)", function() {

    // construction
    var LW = new BoxOfQuestions(new LWdb('learnWords'));
    LW.db.loadWords(wordlist);
 

    // checks
    expect(LW).not.toBe(null);
    expect(LW).not.toBe(undefined);

    expect(LW).toBeObject();

    expect(LW.db.dbName).toBe("learnWords");
    expect(LW.db.numberOfWords()).toBeNumber(10);

  });



  it("should be able to create a BoxOfQuestions object (var 2)", function() {

    // construction

    var LW = function(){

		var db = new LWdb('learnWords');

		db.loadWords(wordlist);

		var box = new BoxOfQuestions(db);

                // if necessary more configuration later

		return box
        }();


    // checks
    expect(LW).not.toBe(null);
    expect(LW).not.toBe(undefined);

    expect(LW).toBeObject();

    expect(LW.db.dbName).toBe("learnWords");
    expect(LW.db.numberOfWords()).toBeNumber(10);

  });



});






describe("BoxOfQuestions", function() {

    
  beforeEach(function() {

      LW = new BoxOfQuestions(new LWdb('learnWords'));
      LW.db.loadWords(wordlist);
        
  });





  it("should be able to import questions", function() {

    expect(LW).not.toBe(null);

    // FIXME
    expect(LW.db).toHaveMethod("loadWords");


  });







  it("should have a helper function to get random integers", function(){

    expect(LW).not.toBe(null);

    expect(LW).toHaveMethod("_getRandomInt");

    var n = LW.db.numberOfWords();

    expect(n).toBe(12);
    expect(LW.db.allWords().length).toBe(12);

    // FIXME add more expect

    expect(LW._getRandomInt(0,n-1)).toBeNumber(); 

  });









  it("should be able to indicate which words are to be repeated", function() {


    // LW.wordsToRepeat(); issue #63

    expect(LW).not.toBe(null);    
    expect(LW).toHaveMethod("wordsToRepeat");

    var r0 = LW.wordsToRepeat();
    LW.question();

    expect(r0.length).toBeNumber();
    expect(r0.length).toBe(12);

    LW.moveQuestionForward();

    var r1 = LW.wordsToRepeat();
    expect(r1.length).toBeNumber();
    expect(r1.length).toBe(11);


    LW.question();
    LW.moveQuestionForward();

    var r2 = LW.wordsToRepeat();
    expect(r2.length).toBeNumber();
    expect(r2.length).toBe(10);


    LW.question();
    LW.moveQuestionForward();

    var r2 = LW.wordsToRepeat();
    expect(r2.length).toBeNumber();
    expect(r2.length).toBe(9);


  });



  xit("should be able to give a question", function() {

    expect(LW).not.toBe(null);
    expect(LW).toHaveMethod("question");

    var q = LW.question();

    expect(q).not.toBe(null);
    expect(q).not.toBe(undefined);
    expect(q).toBeObject();    

    expect(q).toHaveString("translate");
    expect(q).toHaveNumber("step");
    expect(q).toHaveNumber("date");

    var todayNow = new Date();

    expect(q.date <= todayNow).toBe(true);


    var id1 = q._id;
    var r1 = LW.wordsToRepeat();
    expect(r1).toBeArray();
    console.log(r1);
    var n1 = r1.length;
    console.log("n1=",n1);

    LW.moveQuestionForward();
    // This means the question has been answered
    // correctly.
    // Thus we should get a next question

    q = LW.question();

    // which is different from the previous one.
    expect(q._id).not.toBe(id1);

    // and the number of remaining questions should be
    // one less.
    var r2 = LW.wordsToRepeat();
    expect(r2).toBeArray();
    var n2 = r2.length;
    console.log("n2=",n2);
    expect(n2).toBe(n1-1); 

/*  FIXME
    // add expect code here
    // date should be >= today
*/


  });




  it("should be able to give an answer", function() {

    expect(LW).not.toBe(null);


    expect(LW).toHaveMethod("answer");


    var a = LW.answer();

    expect(a).not.toBe(null);
    expect(a).not.toBe(undefined);

    // FIXME add more expect statements

  });



 it("should be able to give answer options", function() {

    expect(LW).not.toBe(null);

    expect(LW).toHaveMethod("getAnswerOptions");

    // FIXME add more expect statements

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






  it("should be able to move an answer forward", function() {

         
         var q = LW.question();
         expect(q).toBeObject();

	 expect(LW).toHaveMethod("moveQuestionForward");

         LW.moveQuestionForward();
         // FIXME add more expect statements
         // read the question from the db and check for a later date
  });



  it("should be able choose a random object from a collection", function() {

        // LW.chooseRandomObject(anArray); issue #59
        // returns a random object from anArray.

        expect(wordlist).toBeArray();
        expect(LW.chooseRandomObject(wordlist)).toBeObject(); 
        
        // FIXME add more expect
  });




  it("should be able to make use of settings information", function() {
  
    var s = LW.db.getSettings();

    expect(s.delay).toBeNumber();
   
    expect(s.factorForDelayValue).toBeArray();
    expect(s.factorForDelayValue.length).toBeGreaterThan(0);

    expect(s.offerLearnMode).toBeBoolean();


  });


 
  it("should be able to give status information", function() {
  
    var st = LW.status();
   
    expect(st).toBeObject();
    expect(st.numberOfWords).toBe(12);

    // FIXME
    // add number of words in wordsToRepeat

  });

});
