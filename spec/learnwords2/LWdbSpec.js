"use strict";

var LWdb = require('../../src/LWdb');
// var wordList = require('../../data/json/wordlist-en-ge.js'); // TT
var wordList = require('../../data/json/math-questions-list.js'); /// TTT

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  global.localStorage = new LocalStorage('./scratch');
}

describe("Database LWdb", function() {

  var lwdb;
  var propertyAnswerText = "answer"; /// TTT
  // var propertyAnswerText = "translate"; /// TTT

  beforeAll(function(){
    this.wordList = wordList;
  });

  beforeEach(function() {
    localStorage.clear();
    lwdb = LWdb("LearnWords");

    // clear properties that didn't exist in original wordList
 
    for(var i = 0; i < this.wordList.length; i++){
      var aWord = this.wordList[i];
      for(var key in aWord){
        if(key != "word" && key != propertyAnswerText && key != "_id"){
          delete aWord[key];
        }
      }
    }

  });


  afterEach(function(){
    lwdb.destroy();
  });




  it("should support API 1", function() {

    expect(lwdb).toBeObject();
    
    expect(lwdb).toHaveString("dbName");
    expect(lwdb.dbName).toBe("LearnWords");

    expect(lwdb).toHaveMethod("getSettings");
    expect(lwdb).toHaveMethod("putSettings");

    expect(lwdb).toHaveMethod("putWord");
    expect(lwdb).toHaveMethod("getWord");

    expect(lwdb).toHaveMethod("removeWords");
    expect(lwdb).toHaveMethod("destroy");

    expect(lwdb).toHaveMethod("persistentStorageOK");
    expect(lwdb).toHaveMethod("isOK");
    expect(lwdb).toHaveMethod("numberOfWords");

    expect(lwdb).toHaveMethod("importFrom");
    expect(lwdb).toHaveMethod("loadWords");

    expect(lwdb).toHaveMethod("keysOfAllWords");
    expect(lwdb).toHaveMethod("allWords");
 

  });




  it("should be able to create a DB", function() {

    expect(lwdb).toBeObject();
    
    expect(lwdb).toHaveString("dbName");
    expect(lwdb.dbName).toBe("LearnWords");


    expect(lwdb).toHaveMethod("putWord");
    expect(lwdb).toHaveMethod("getWord");
    expect(lwdb).toHaveMethod("importFrom");
    expect(lwdb).toHaveMethod("loadWords");
    expect(lwdb).toHaveMethod("keysOfAllWords");

    // FIXME
    // add more methods

  });



  it("should be able to answer if persistent storage is available", function() {

    expect(lwdb).toHaveMethod("persistentStorageOK");
    expect(lwdb.persistentStorageOK()).toBeTrue();

  });


  it("should be able to remove all words storage", function() {
    
    var n = (this.wordList).length;
    expect(n>0).toBe(true);

    lwdb.loadWords(this.wordList);

    expect(lwdb.numberOfWords()>0).toBe(true);


    lwdb.removeWords();
    
    expect(lwdb).toHaveMethod("numberOfWords"); 
    expect(lwdb.numberOfWords()).toBe(0);

    var keys = lwdb.keysOfAllWords();
    expect(keys.length).toBe(0);

  });


  xit("should be able to reinitialize the persistent storage", function() {
    
    var n = (this.wordList).length;
    expect(n>0).toBe(true);

    lwdb.loadWords(this.wordList);

    expect(lwdb.numberOfWords()>0).toBe(true);


    lwdb.destroy();
    
    // FIXME add expect


  });



  describe("deals with words;", function() {

    it("should be able to answer the number of words", function() {
      expect(lwdb.numberOfWords()).toBe(0);
    });


    it("should be able to store a new word", function() {
      // Inserts a new document, or new version of an existing document
      expect(lwdb.numberOfWords()).toBe(0);
      var i = parseInt(Math.floor(Math.random()*this.wordList.length));
      var aWord = this.wordList[i];
      aWord._id = (i+1);
      lwdb.putWord(aWord);
      expect(lwdb.numberOfWords()).toBe(1);
    });


    it("should be able to store a modified word", function() {
      expect(lwdb.numberOfWords()).toBe(0);
      var i = parseInt(Math.floor(Math.random()*this.wordList.length));
      var aWord = this.wordList[i];
      var id = (i+1);
      aWord._id = id;
      lwdb.putWord(aWord);
      expect(lwdb.numberOfWords()).toBe(1);

      var wordFromDB = lwdb.getWord(id);
      wordFromDB.step = 5;
      lwdb.putWord(wordFromDB);

      // read it back and check if the value has been stored
      var step = (lwdb.getWord(id)).step;
      expect(step === 5).toBe(true);

    });



    it("should be able to store a step value of 0", function() {

      // set up db entry
      expect(lwdb.numberOfWords()).toBe(0);
      var aWord = this.wordList[3];
      aWord._id = 4;  // ids start with 1

      lwdb.putWord(aWord);
      expect(lwdb.numberOfWords()).toBe(1);



      // Test part 1 with value 99
      // get db entry
      var wordFromDB = lwdb.getWord(4);

      // change step value to 99
      wordFromDB.step = 99;
      lwdb.putWord(wordFromDB);

      // read it back and check if the value has been stored
      var word = lwdb.getWord(4);

      expect(word.step === 99).toBe(true);


      // Test part 2 with value 0
      // get db entry
      var wordFromDB = lwdb.getWord(4);

      // change step value to 0
      wordFromDB.step = 0;

      lwdb.putWord(wordFromDB);

      // read it back and check if the value has been stored
      var wordR = lwdb.getWord(4);

      expect(wordR.step).toBe(0);

      // Note: The problem was that 

      // aWord.step may mean different things when aWord.step == 0

    });



    it("should be able to get a word", function() {  

      var newWord = {
        "_id": 1,
        "word": "melon",
        "translate": "die Melone"
      };

      expect(lwdb.numberOfWords()).toBe(0);
      lwdb.putWord(newWord);
      expect(lwdb.numberOfWords()).toBe(1);
      var r = lwdb.getWord(1);
      expect(r).toBeObject();

      expect(r).toHaveNumber("_id");
      expect(r._id).toBe(1);

      expect(r).toHaveString("word");
      expect(r.word).toBe("melon");

      expect(r).toHaveString("translate");
      expect(r.translate).toBe("die Melone");

      expect(r).toHaveNumber("step");
      expect(r.step).toBe(-1);

      expect(r).toHaveNumber("date");
      expect(r.date).toBe(0);

    });


    it("should be able to remove all words", function() {
      // insert first n words from wordList
      var n = parseInt(Math.floor(Math.random()*this.wordList.length));
      var aWord;
      for(var i = 0; i < n; i++){
        aWord = this.wordList[i];
        aWord._id = (i+1);
        lwdb.putWord(aWord);
      }
      expect(lwdb.numberOfWords()).toBe(n);
      lwdb.removeWords();
      expect(lwdb.numberOfWords()).toBe(0);

    });





    it("should be able to answer a list of all keys of all words", function() {
      // test setup
      // insert first n words from wordList
      // n is a random number of words

      var n = parseInt(Math.floor(Math.random()*this.wordList.length));

      var aWord;
      for(var i = 0; i < n; i++){
        aWord = this.wordList[i];
        aWord._id = (i+1);
        lwdb.putWord(aWord);
      }


      // run

      var r = lwdb.keysOfAllWords();


      // check result
      expect(r).toBeArrayOfStrings();
      expect(r.length).toBe(lwdb.numberOfWords());
       
      for(var i = 0; i < r.length; i++){
        var k = "LearnWords-wd-"+(i+1);
        expect(r).toContain(k);
      }

    });









    it("should be able to answer a list of all words", function() {

      // setup
      // insert first n words from wordList
      var n = parseInt(Math.floor(Math.random()*this.wordList.length));


      var aWord;
      for(var i = 0; i < n; i++){
        aWord = this.wordList[i];
        aWord._id = (i+1);
        lwdb.putWord(aWord);
      }

      expect(lwdb.numberOfWords()).toBe(n);



      // run

      var r = lwdb.allWords();


      // check

      expect(r).toBeArray();
      expect(r.length).toBe(lwdb.numberOfWords());
      expect(r.length).toBe(n);

      for(var i = 0; i < r.length; i++){
        var tmp = this.wordList[i];
        tmp._id = i+1;

        // keys might not be ordered by id, e.g. "10" < "2" 
        var w = lwdb.getWord(tmp._id);
        
        expect(w).toHaveString("word");
        expect(tmp).toHaveString("word");
        expect(w.word).toBe(tmp.word);

        expect(w).toHaveString(propertyAnswerText);
        expect(tmp).toHaveString(propertyAnswerText);
        expect(w[propertyAnswerText]).toBe(tmp[propertyAnswerText]);

        expect(w).toHaveNumber("_id");
        expect(tmp).toHaveNumber("_id");
        expect(w._id).toBe(tmp._id);

        expect(w).toHaveNumber("date");
        expect(tmp).toHaveNumber("date");
        expect(w.date).toBe(tmp.date);

        expect(w).toHaveNumber("step");
        expect(tmp).toHaveNumber("step");
        expect(w.step).toBe(tmp.step);

      }

    });






    it("should be able to import words (an array)", function() {

      // setup
      lwdb.removeWords();
      expect(lwdb.numberOfWords()).toBe(0);

      expect(lwdb).toHaveMethod("importFrom");
      var theWordList = this.wordList;
      expect(theWordList).toBeArrayOfObjects();


      // run

      lwdb.importFrom(theWordList);

      
      // check

      var keys = lwdb.keysOfAllWords(); 
      expect(keys.length).toBe(theWordList.length);

    });



    it("should be able to import a dbdump object", function() {
      // a dbdump object is an object which contains the data from a db.
      // the wordlist is in a property called 'words'.

      // setup
      lwdb.removeWords();
      expect(lwdb.numberOfWords()).toBe(0);

      expect(lwdb).toHaveMethod("importFrom");

      var theWordList = this.wordList;
      expect(theWordList).toBeArrayOfObjects();

      var dbdump = {};
      dbdump.words = theWordList;

      // run

      lwdb.importFrom(dbdump);

      
      // check

      var keys = lwdb.keysOfAllWords(); 
      expect(keys.length).toBe(theWordList.length);

    });



    it("should be able to maintain an index", function() {
      // Is this a duplicate?

      // setup
      lwdb.removeWords();
      expect(lwdb.numberOfWords()).toBe(0);
      
      lwdb.importFrom(this.wordList);
      expect(lwdb.numberOfWords()).toBe(this.wordList.length);


      // run
      var keys = lwdb.keysOfAllWords();


      // check
      expect(keys).toBeArray();
      expect(keys.length).toBe(this.wordList.length);
    });


  });






  describe("LWdb deals with settings", function() {

    it("should be able to answer settings", function() {
      var settings = lwdb.getSettings();
      expect(settings).not.toBe(null);
      expect(settings).toBeObject();
    });


    it("should be able to store settings", function() {
      // test needs improvement
      var settings = lwdb.getSettings();
      settings.factorForDelayValue[3] = 6;
      lwdb.putSettings(settings);
      settings = lwdb.getSettings();
      expect(settings).toBeObject();
      expect(settings).toHaveArray("factorForDelayValue");
      expect(settings.factorForDelayValue[3]).toBe(6);
    });


    it("should be able to answer a default intial step value", function() {
      var settings = lwdb.getSettings();
      expect(settings).not.toBe(null);
      expect(settings).toBeObject();
      expect(settings.defaultInitialStepValue).toBe(-1);

    });


  });

});
