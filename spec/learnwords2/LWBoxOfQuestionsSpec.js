// File: LWBoxOfQuestionsSpec.js
// Date: 29 March 2018
// List of Jasmine suites with tests in this file:
//    
//    describe("BoxOfQuestions construction", function() {
//      it("should indicate the correct library version", function() {
//      it("should be able to create a BoxOfQuestions object (variant 1a)", function() {
//      it("should be able to create a BoxOfQuestions object (variant 1b)", function() {
//      it("should be able to create a BoxOfQuestions object (variant 2)", function() {
//      it("should support the Box API 2", function() {
//    
//    describe("BoxOfQuestions", function() {
//      it("should be able to import questions", function() {
//      it("should have a helper function to get random integers", function(){
//      it("should be able to indicate which words are to be repeated", function() {
//      it("should give an array of words having particular step values", function() {
//      it("should be able to give a question", function() {
//      it("should be able to give questions until there are no more questions", function() {
//      it("should be able to give an answer", function() {
//      it("should be able to give answer options", function() {
//      it("should be able to move an incorrect question back in the box", function() {
//      it("should be able to move an answer forward", function() {
//      it("should be able to choose a random object from a collection", function() {
//      it("should be able to make use of settings information", function() {
//      it("should be able to give status information", function() {
//    
//    xdescribe("BoxOfQuestions - learn mode", function() {
//      it("it allows a group of cards to be queried by a tag", function() {
//    
//    xdescribe("BoxOfQuestions - practice mode", function() {
//      it("allows inactive but loaded words/cards to be made active for practice", function() {
//      it("takes note of words which have been already practiced", function() {
//      it("allows words/cards to to be practiced", function() {
//    
//    xdescribe("BoxOfQuestions - review mode", function() {
//      it("allows cards to be reviewed as the move through the boxes", function() {
//      it("allows to create a session with a group of cards to be reviewed", function() {
//      it("presents a card to be reviewed", function() {
//      it("presents a group of cards to be used as an answer options", function() {
//      it("processes a card to be reviewed - wrong answer", function() {
//      it("processes a card to be reviewed - correct answer", function() {





// paste the code between the dotted lines 
// with comment indicator // removed
// into
//       https://www.planttext.com/
// to get a state chart
// ........................................
// 
// @startuml
// 
// title LearnWords2 App State Model
// [*] --> AppStart
// 
// NoDB : No database created yet
// EmptyDB : Empty database created
// DBLoaded : Words imported
// LearnMode : ???
// PracticeMode : ???
// ReviewMode : ???
// 
// 
// AppStart --> DBLoaded
// AppStart --> NoDB
// 
// NoDB --> EmptyDB
// EmptyDB --> DBLoaded
// 
// DBLoaded --> LearnMode
// DBLoaded --> PracticeMode
// DBLoaded --> ReviewMode
// 
// LearnMode --> PracticeMode
// PracticeMode --> ReviewMode
// 
// LearnMode --> [*]
// PracticeMode --> [*]
// ReviewMode --> [*]
// 
// note right
// End state
// end note
// 
// @enduml
// 
//  ...............................................................................




"use strict";

var BoxOfQuestions = require('../../src/BoxOfQuestions');
var LWdb = require('../../src/LWdb');

var lw, wordlist;


describe("BoxOfQuestions construction", function() {

   // construction of empty db and wordlist to be imported
  beforeAll(function(done){
    lw = BoxOfQuestions(LWdb('learnWords')); 
    this.getGermanWordList(function(err,data){
      if(err){
        console.log(err);
      }else{
        wordlist = data;
      }
      done();
    });
  });




  it("should indicate the correct library version", function() {

    expect(lw).toHaveString("version");
    expect(lw.version).toBe('0.3-beta');

  });



  it("should be able to create a BoxOfQuestions object (variant 1a)", function() {

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



  it("should be able to create a BoxOfQuestions object (variant 1b)", function() {

    // construction of empty db
    var lw = BoxOfQuestions(LWdb('learnWords'));

    // load words
    lw.db.loadWords(wordlist);

    // checks
    expect(lw.db.dbName).toBe("learnWords");
    expect(lw.db.numberOfWords()).toBe(wordlist.length);

    expect((lw.wordsWithStepValue(-1)).length).toBe(wordlist.length);


  });



  it("should be able to create a BoxOfQuestions object (variant 2)", function() {

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
    expect(lw.db.numberOfWords()).toBe(wordlist.length);


  });




  it("should support the Box API 2", function() {

    // construction of empty db
    var lw = BoxOfQuestions(LWdb('learnWords')); 

    expect(lw).toHaveString("version");

    expect(lw).toHaveMethod("question");
    expect(lw).toHaveMethod("answer");
    expect(lw).toHaveMethod("moveQuestionForward");
    expect(lw).toHaveMethod("moveQuestionBackwards");

    // synonyms
    expect(lw).toHaveMethod("answerWasCorrect");
    expect(lw).toHaveMethod("answerWasWrong");


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

    expect(lw.db.numberOfWords()).toBe(wordlist.length);

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

    expect(n).toBe(wordlist.length);
    expect(lw.db.allWords().length).toBe(wordlist.length);

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
    expect(wordWithStepEqualMinus1.length).toBe(76);
      
    var wordsWithStep0 = lw.wordsWithStepValue(0);
    expect(wordsWithStep0.length).toBe(3);

    var wordsWithStepMinus1ToZero = lw.wordsWithStepValue(-1,0);
    expect(wordsWithStepMinus1ToZero.length).toBe(79);

    var wordsWithStepMinus1ToPlus1 = lw.wordsWithStepValue(-1,1);
    expect(wordsWithStepMinus1ToPlus1.length).toBe(82);


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
     // total of 84 words
     expect(lw.db.numberOfWords()).toBe(wordlist.length);

     // eight are to be learned / repeated
     // 8 is the expected result
     expect((lw.wordsWithStepValue(0,1000)).length).toBe(8);

     // for are not put into the system yet.
     expect((lw.wordsWithStepValue(-1)).length).toBe(76);


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



  it("should be able to choose a random object from a collection", function() {

        // lw.chooseRandomObject(anArray); issue #59
        // returns a random object from anArray.

        expect(wordlist).toBeArray();

        var _id;
        var sum = 0;

        for(var i = 0; i < 10000; i++){
          _id = (lw.chooseRandomObject(wordlist))._id;

          expect(_id >= 1).toBe(true); 
          expect(_id <= wordlist.length).toBe(true);

          sum = sum + _id;

        }

        var expectedValue = wordlist.length/2.0;
        var avg = sum/10000.0;

        expect(avg >= expectedValue).toBe(true); 
        expect(avg < (expectedValue+2)).toBe(true);
        
  });




  it("should be able to make use of settings information", function() {
  
    var s = lw.db.getSettings();

    expect(s.delay).toBeNumber();
   
    expect(s.factorForDelayValue).toBeArray();
    expect(s.factorForDelayValue.length).toBeGreaterThan(0);

    expect(s.defaultInitialStepValue).toBe(-1);
    expect(s.numberOfOptions).toBe(4);
    expect(s.sessionExpiryTimeInSeconds).toBe(1800);
    expect(s.suggestedNumberOfWordsInASession).toBe(7);


  });


 
  it("should be able to give status information", function() {
  
    var st = lw.status();
   
    expect(st).toBeObject();
    expect(st.numberOfWords).toBe(wordlist.length);

    // FIXME
    // add more expect statements

  });


});




xdescribe("BoxOfQuestions - learn mode", function() {
  var a;
  // learn means that groups of cards may be presented one after the other.
  // The database is not affected.

  it("it allows a group of cards to be queried by a tag", function() {
    a = false;
    expect(a).toBe(true);
  });


});




xdescribe("BoxOfQuestions - practice mode", function() {
  var a;
  // practice means that the words/cards may be worked on intensively on demand.
  // it needs to be defined if and how this affects the ``review`` mode


  it("allows inactive but loaded words/cards to be made active for practice", function() {
    a = false;
    expect(a).toBe(true);
  });

  it("takes note of words which have been already practiced", function() {
    a = false;
    expect(a).toBe(true);
  });


  it("allows words/cards to to be practiced", function() {
    a = false;
    expect(a).toBe(true);
  });


});




xdescribe("BoxOfQuestions - review mode", function() {
  var a;
  // review mode means that the cards are presented again in the following days.
  it("allows cards to be reviewed as the move through the boxes", function() {
    a = true;

    expect(a).toBe(true);
  });


  it("allows to create a session with a group of cards to be reviewed", function() {
    a = true;

    expect(a).toBe(true);
  });


  it("presents a card to be reviewed", function() {
    a = true;

    expect(a).toBe(true);
  });


  it("presents a group of cards to be used as an answer options", function() {
    a = true;

    expect(a).toBe(true);
  });



  it("processes a card to be reviewed - wrong answer", function() {
    a = true;

    expect(a).toBe(true);
  });


  it("processes a card to be reviewed - correct answer", function() {
    a = true;

    expect(a).toBe(true);
  });


});




