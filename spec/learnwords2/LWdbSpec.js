var LWdb = require('../../src/LWdb');
var BoxOfQuestions = require('../../src/BoxOfQuestions');

describe("LearnWords2 - App model", function() {

  describe("BoxOfQuestions", function() {
    

    beforeEach(function() {
      questions  = new BoxOfQuestions("LWquestions");
    });


    it("should be able to create a BoxOfQuestions object", function() {

      expect(questions).not.toBe(null);
      expect(questions).not.toBe(undefined);

      expect(questions).toBeObject();

    });


    it("should be able to process configuration information", function() {
      // the configuration 
      var aConfigObj = {"algorithm": "Leiter", "boxes": 5};
      questions.config(aConfigObj);     

      // expect code here
    });


    it("should be able to load questions", function() {
      var n = questions.size();
      // FIXME: pass data
      var arrOfQuestions = [];
      questions.addQuestions(arrOfQuestions);
    
      expect(questions.size()).toBe(n + arrOfQuestions.length);
    });


    it("should be able to choose a next question, give options for answers and process the answer", function() {
      var q, a, opt, aChoice;

      q = questions.currQuestion();
      a = questions.currAnswer();
      opt = questions.currAnswerOptions(); // includes the correct answer
     
      questions.processAnswer(aChoice);  // after this there will be a new current question.
      

      // add expect code here
    });


    it("should be able to give status information", function() {
      // the configuration 
    
      var r = questions.status();
     
      // add expect code here    


    });

  });


  describe("Database LWdb", function() {

    beforeAll(function() {
      this.db = new LWdb("LearnWords");
    });

    afterEach(function(){
      this.db.removeWords();
    });


    it("should be able to create a DB", function() {

      expect(this.db).not.toBe(null);
      expect(this.db).not.toBe(undefined);

      expect(this.db.name).toBeString("LearnWords");

    });


    it("should be able to answer if persistent storage is available", function() {

      expect(this.db.persistenStorageOK()).toBeFalse();

    });


    it("should be able to reinitialize the persistent storage", function() {
      
      this.db.initialize();
      expect(this.db.numberOfWords).toBe(10);

    });


    describe("LWdb deals with words", function() {

      it("should be able to answer the number of words", function() {
   
        expect(this.db.numberOfWords()).not.toBe(null);
        expect(this.db.numberOfWords()).not.toBe(undefined);

      });


      it("should be able to store a new word", function() {
        // Inserts a new document, or new version of an existing document
        var n = this.db.numberOfWords();

        this.db.putWord(11,aWord);
        expect(this.db.numberOfWords()).toBe(n+1);

      });


      it("should be able to get a word", function() {
        var theKeyOfaWord = 11;
        this.db.putWord(11,aWord);
        var r = this.db.getWord(theKeyOfaWord);
        console.log(r);
        expect(r.word).toBe("melon");
      });


      it("should be able to answer a list of all keys of all words", function() {
        var r = this.db.keysOfAllWords();
        expect(r.length).toBe(this.db.numberOfWords());

      });


      it("should be able to answer a list of all words", function() {
        var r = this.db.allWords();
        expect(r.length).toBe(this.db.numberOfWords());
      });


      it("should be able to import words", function() {
        this.db.resetStorage();
        expect(this.db.numberOfWords).toBe(0);
        
        this.db.importFrom(wordlist);
        expect(this.db.numberOfWords).toBe(10);
      });

    });



    describe("LWdb deals with settings", function() {

      it("should be able to answer settings", function() {
        var settings = this.db.getSettings();
        console.log('settings', settings);
        expect(settings).not.toBe(null);
      });


      it("should be able to store settings", function() {
        // test needs improvement
        var settings = this.db.getSettings();
        settings.anAttribute2 = "something";
        this.db.storeSettings(settings);
        settings = this.db.getSettings();
        expect(settings.anAttribute2).toBe("something");
      });

    });

  });
});