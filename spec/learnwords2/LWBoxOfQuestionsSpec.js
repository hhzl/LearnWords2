"use strict";

var BoxOfQuestions = require('../../src/BoxOfQuestions');
var LWdb = require('../../src/LWdb');
var wordlist = require('../../data/wordlist-en-ge.js'); 

var lw;



describe("BoxOfQuestions construction", function() {

   // construction of empty db
    var lw = BoxOfQuestions(LWdb('learnWords')); 

  it("should indicate the correct library version", function() {

    expect(lw).toHaveString("version");
    expect(lw.version).toBe('0.2.2');

  });



  it("should be able to create a BoxOfQuestions object (var 1a)", function() {

    // construction of empty db
    var lw = BoxOfQuestions(LWdb('learnWords')); 

    // checks
    expect(lw).not.toBe(null);
    expect(lw).not.toBe(undefined);

    expect(lw).toBeObject();

    expect(lw.name).toBe("learnWords");

    expect(lw).toHaveObject("db");
    expect(lw.db.dbName).toBe("learnWords");
    expect(lw.db.numberOfWords()).toBe(0);


  });



  it("should be able to create a BoxOfQuestions object (var 1b)", function() {

    // construction of empty db
    var lw = BoxOfQuestions(LWdb('learnWords'));

    // load words
    lw.db.loadWords(wordlist);

    // checks
    expect(lw.db.dbName).toBe("learnWords");
    expect(lw.db.numberOfWords()).toBe(12);

    expect((lw.wordsWithStepValue(-1)).length).toBe(12);
    // expect((lw.wordsToRepeat()).length).toBe(0);


  });



  it("should be able to create a BoxOfQuestions object (var 2)", function() {

    // construction

    var lw = function(){

		var db = LWdb('learnWords');

		db.loadWords(wordlist);

		var box = BoxOfQuestions(db);

                // if necessary more configuration later

		return box
        }();


    // checks
    expect(lw).not.toBe(null);
    expect(lw).not.toBe(undefined);

    expect(lw).toBeObject();

    expect(lw.db.dbName).toBe("learnWords");
    expect(lw.db.numberOfWords()).toBe(12);


  });




  it("should support the Box API 2", function() {

    // construction of empty db
    var lw = BoxOfQuestions(LWdb('learnWords')); 

    expect(lw).toHaveString("version");

    expect(lw).toHaveMethod("question");
    expect(lw).toHaveMethod("answer");
    expect(lw).toHaveMethod("moveQuestionForward");
    expect(lw).toHaveMethod("moveQuestionBackwards");


    expect(lw).toHaveMethod("importFrom");
    expect(lw).toHaveMethod("wordsToRepeat");


    expect(lw).toHaveMethod("wordsWithStepValue");
    expect(lw).toHaveMethod("addMoreWordsForLearning");
    expect(lw).toHaveMethod("chooseRandomObject");
    expect(lw).toHaveMethod("config");
    expect(lw).toHaveMethod("status");


  });



});






describe("BoxOfQuestions", function() {

    
  beforeEach(function() {

      // set up test fixture

      lw = BoxOfQuestions(LWdb('learnWords'));
      lw.importFrom(wordlist);

      // change default settings
      var settings = lw.db.getSettings();
      settings.suggestedNumberOfWordsInASession = 7;
      lw.db.putSettings(settings);

      // setup a particular set of step values

      var allWords = lw.db.allWords();
      allWords[0].step = 0;  // question for word has not been answered yet 
      allWords[1].step = 0;
      allWords[2].step = 0;

      allWords[3].step = 1;  // question for word has been answered once
      allWords[4].step = 1;  
      allWords[5].step = 1;
      allWords[6].step = 2;  // word has been answered two times
      allWords[7].step = 3;  // word has been answered three times

      lw.db.putWord(allWords[0]);
      lw.db.putWord(allWords[1]);
      lw.db.putWord(allWords[2]);
      lw.db.putWord(allWords[3]);
      lw.db.putWord(allWords[4]);
      lw.db.putWord(allWords[5]);
      lw.db.putWord(allWords[6]);
      lw.db.putWord(allWords[7]);
    
  });






  it("should be able to import questions", function() {

    expect(lw).not.toBe(null);


    expect(lw.db).toHaveMethod("loadWords");

    expect(lw).toHaveMethod("importFrom");

    expect(lw.db.numberOfWords()).toBe(12);

    var allWords = lw.db.allWords();
    var aWord = allWords[0];
    expect(aWord.step).toBe(0);


    aWord = allWords[4];
    expect(aWord.step).toBe(1);

    aWord = allWords[8];
    expect(aWord.step).toBe(-1);

  });







  it("should have a helper function to get random integers", function(){

    expect(lw).not.toBe(null);

    // FIXME
    // expect(lw).toHaveMethod("_getRandomInt");

    var n = lw.db.numberOfWords();

    expect(n).toBe(12);
    expect(lw.db.allWords().length).toBe(12);

    // FIXME add more expect

    // expect(lw._getRandomInt(0,n-1)).toBeNumber(); 

  });









  it("should be able to indicate which words are to be repeated", function() {

    expect(lw).not.toBe(null);    
    expect(lw).toHaveMethod("wordsToRepeat");


    var r0 = lw.wordsToRepeat();
  
    expect(r0.length).toBeNumber();
    expect(r0.length).toBe(8);

    lw.question();
    lw.moveQuestionForward();

    var r1 = lw.wordsToRepeat();
    expect(r1.length).toBeNumber();
    expect(r1.length).toBe(7);


    lw.question();
    lw.moveQuestionForward();

    var r2 = lw.wordsToRepeat();
    expect(r2.length).toBeNumber();
    expect(r2.length).toBe(6);


    lw.question();
    lw.moveQuestionForward();

    var r2 = lw.wordsToRepeat();
    expect(r2.length).toBeNumber();
    expect(r2.length).toBe(5);


  });



  it("should give an array of words having particular step values", function() {

    expect(lw).not.toBe(null);    
    expect(lw).toHaveMethod("wordsWithStepValue");

    var wordWithStepEqualMinus1 = lw.wordsWithStepValue(-1);
    expect(wordWithStepEqualMinus1.length).toBe(4);
      
    var wordsWithStep0 = lw.wordsWithStepValue(0);
    expect(wordsWithStep0.length).toBe(3);

    var wordsWithStepMinus1ToZero = lw.wordsWithStepValue(-1,0);
    expect(wordsWithStepMinus1ToZero.length).toBe(7);

    var wordsWithStepMinus1ToPlus1 = lw.wordsWithStepValue(-1,1);
    expect(wordsWithStepMinus1ToPlus1.length).toBe(10);


  });




  it("should be able to give a question", function() {

    expect(lw).not.toBe(null);
    expect(lw).toHaveMethod("question");

    var q = lw.question();

    expect(q).not.toBe(null);
    expect(q).not.toBe(undefined);
    expect(q).toBeObject();    

    expect(q).toHaveString("translate");
    expect(q).toHaveNumber("step");
    expect(q).toHaveNumber("date");

    var todayNow = new Date();

    expect(q.date <= todayNow).toBe(true);


    var id1 = q._id;
    var r1 = lw.wordsToRepeat();
    expect(r1).toBeArray();
    var n1 = r1.length;

    lw.moveQuestionForward();
    // This means the question has been answered
    // correctly.
    // Thus we should get a next question

    q = lw.question();

    // which is different from the previous one.
    expect(q._id).not.toBe(id1);

    // and the number of remaining questions should be
    // one less.
    var r2 = lw.wordsToRepeat();
    expect(r2).toBeArray();
    var n2 = r2.length;
    expect(n2).toBe(n1-1); 


  });


  it("should be able to give questions until there are no more questions", function() {
     // total of 12 words
     expect(lw.db.numberOfWords()).toBe(12);

     // eight are to be learned / repeated
     // 8 is the expected result
     expect((lw.wordsWithStepValue(0,1000)).length).toBe(8);

     // for are not put into the system yet.
     expect((lw.wordsWithStepValue(-1)).length).toBe(4);


     // ask questions repeatedly until there are no more questions
     var q;
     var noOfQuestions = 0;
      do {
           q = lw.question();
           lw.moveQuestionBackwards();
           if(q) {// q is not null
                  noOfQuestions =  noOfQuestions +1};
      } while (q);
   
     // check result
     expect(noOfQuestions).toBe(8);

  });







  it("should be able to give an answer", function() {

    expect(lw).not.toBe(null);


    expect(lw).toHaveMethod("answer");


    var a = lw.answer();

    expect(a).not.toBe(null);
    expect(a).not.toBe(undefined);

    // FIXME add more expect statements

  });









 it("should be able to give answer options", function() {


    // Check API
    expect(lw).not.toBe(null);

    expect(lw).toHaveMethod("getAnswerOptions");

    expect((lw.wordsToRepeat()).length > 0).toBe(true);


    // default value

    expect((lw.db.getSettings()).numberOfOptions).toBe(4);


    var question = lw.question();

    // check availability of numberOfOptions property
    var settings = lw.db.getSettings();
    expect(settings).toBeObject();
    expect(settings).toHaveNumber("numberOfOptions");
 


    // check number of options

    var n = settings.numberOfOptions;

    var options = lw.getAnswerOptions();
    
    expect(options).toBeArray();
    expect(options.length).toBe(n);



    // verify is all _ids of all elements 
    // in options are different

    var idOptionsSet = new Set();

    options.forEach(function(element) {
       idOptionsSet.add(element._id);
    });
    
    expect(idOptionsSet.size).toBe(n);
    



    // Check it question is included in answerOptions
   
    expect(idOptionsSet.has(question._id)).toBe(true);




    // FIXME add more expect statements

  });




  it("should be able to move an incorrect question back in the box", function() {

        var q = lw.question();
        var question_id = q._id;
      
        lw.moveQuestionBackwards(); // issue #65

        var updatedWord = lw.db.getWord(question_id);

        expect(updatedWord.date).toBeNumber();
        expect(updatedWord.date).toBeGreaterThan(new Date().valueOf());

        
        expect(updatedWord.step).toBe(0);
        // this assumes we do not have a learn mode yet

  });






  it("should be able to move an answer forward", function() {

         
         var q = lw.question();
         expect(q).toBeObject();

	 expect(lw).toHaveMethod("moveQuestionForward");

         var _id = q._id;
         var step = q.step;
         var date = q.date;

         lw.moveQuestionForward();

         // get updated question object
         q = lw.db.getWord(_id);

         expect(_id == q._id).toBe(true);
         expect(step + 1 == q.step).toBe(true);
         expect(date < q.date).toBe(true);

  });



  it("should be able choose a random object from a collection", function() {

        // lw.chooseRandomObject(anArray); issue #59
        // returns a random object from anArray.

        expect(wordlist).toBeArray();

        var _id;
        var sum = 0;

        for(var i = 0; i < 2000; i++){
        _id = (lw.chooseRandomObject(wordlist))._id;

        expect(_id >=1).toBe(true); 
        expect(_id <=12).toBe(true);
        sum = sum + _id;
        }


        expect(sum/2000 >=6.3).toBe(true); 
        expect(sum/2000 <=6.7).toBe(true);
        
  });




  it("should be able to make use of settings information", function() {
  
    var s = lw.db.getSettings();

    expect(s.delay).toBeNumber();
   
    expect(s.factorForDelayValue).toBeArray();
    expect(s.factorForDelayValue.length).toBeGreaterThan(0);

    expect(s.offerLearnMode).toBeBoolean();


  });


 
  it("should be able to give status information", function() {
  
    var st = lw.status();
   
    expect(st).toBeObject();
    expect(st.numberOfWords).toBe(12);

    // FIXME
    // add number of words in wordsToRepeat

  });

});
