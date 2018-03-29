// File: LWdbSpec
// Date: 29 March 2018
// List of Jasmine suites with tests in this file:
//    
//    describe("A LWdb deals with words and settings and offers API1. ", function() {
//    
//    describe("A LWdb supports API1.", function() {
//      it("should support API 1", function() {
//    
//    describe("A LWdb is created.", function() {
//      it("should be able to create a DB", function() {
//      it("should be able to answer if persistent storage is available", function() {
//     it("should be able load words", function() {
//      it("should be able to remove all words in the storage", function() {
//      it("should be able to reinitialize the persistent storage", function() {
//    
//    describe("Words may be stored.", function() {
//        it("should be able to answer the number of words", function() {
//        it("should be able to store a new word", function() {
//        it("should be able to get back a stored word", function() {  
//        it("should be able to store a modified word", function() {
//        it("should be able to store a step value of 0", function() {
//        it("should be able to remove all words", function() {
//        it("should be able to answer a list of all keys of all words", function() {
//        it("should be able to answer a list of all words", function() {
//        it("should be able to import words (an array)", function() {
//        it("should be able to import an object with words", function() {
//        it("should be able to import a dbdump object", function() {
//        it("should be able to maintain an index", function() {
//    
//    describe("A LWdb deals with words.", function() {
//        it("should be able to answer the number of words", function() {
//        it("should be able to remove all words", function() {
//        it("should be able to answer a list of all keys of all words", function() {
//        it("should be able to answer a list of all words", function() {
//        it("should be able to import words (an array)", function() {
//        it("should be able to import an object with words", function() {
//        it("should be able to import a dbdump object", function() {
//        it("should be able to maintain an index", function() {
//    
//    describe("A LWdb may be chosen among several others.", function() {
//      it("should be able to create a DB and then another DB", function() {
//    
//    describe("A LWdb  allows a selection of cards by tags.", function() {
//      it("allows a group of cards to be selected by a tag", function() {
//      it("allows a group of cards to be selected having any tag of a tag list", function() {
//      it("shows what happens if the tag does not exists", function() {
//      it("defines what happens to the database if a _group_ of cards is selected by tags", function() {
//      xit("it allows to add cards selected by a tag to be added to an existing collection", function() {
//    
//    describe("A LWdb deals with settings objects as well.", function() {
//        it("should be able to answer settings", function() {
//        it("should be able to store settings", function() {
//        it("should be able to answer a default intial step value", function() {




"use strict";
var LWdb = require('../../src/LWdb');



// start of code for node.js, does not create problems in the browser as there is a test

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  global.localStorage = new LocalStorage('./scratch');
}

// end of code for node.js





describe("A LWdb deals with words and settings and offers API1. ", function() {

  var lwdb, wordlist;

  beforeAll(function(done){
    this.getGermanWordList(function(err,data){
      if(err){
        console.log(err);
      }else{
        wordlist = data;
      }
      done();
    });
  });

  beforeEach(function() {
    // clear properties that didn't exist in original wordList
    for(var i = 0; i < wordlist.length; i++){
      var aWord = wordlist[i];
      for(var key in aWord){
        if(key != "word" && key != "translate" && key != "_id"){
          delete aWord[key];
        }
      }
    }

    localStorage.clear();
    lwdb = LWdb("LearnWords");
  });


  afterEach(function(){
    lwdb.destroy();
  });







describe("A LWdb supports API1.", function() {

  var lwdb;

  beforeEach(function() {
    localStorage.clear();
    lwdb = LWdb("LearnWords");
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


 });




describe("A LWdb is created.", function() {


  it("should be able to create a DB", function() {

    expect(lwdb).toBeObject();
    
    expect(lwdb).toHaveString("dbName");
    expect(lwdb.dbName).toBe("LearnWords");


    expect(lwdb).toHaveMethod("putWord");
    expect(lwdb).toHaveMethod("getWord");
    expect(lwdb).toHaveMethod("importFrom");
    expect(lwdb).toHaveMethod("loadWords");
    expect(lwdb).toHaveMethod("keysOfAllWords");


  });







  it("should be able to answer if persistent storage is available", function() {

    expect(lwdb).toHaveMethod("persistentStorageOK");
    expect(lwdb.persistentStorageOK()).toBeTrue();

  });




 it("should be able load words", function() {
    
    var numberOfWordsInListToLoad = (wordlist).length;

    expect(numberOfWordsInListToLoad>0).toBe(true);

    lwdb.loadWords(wordlist);

    expect(lwdb.numberOfWords()==numberOfWordsInListToLoad).toBe(true);
  });










  it("should be able to remove all words in the storage", function() {
    
    var n = (wordlist).length;
    expect(n>0).toBe(true);

    lwdb.loadWords(wordlist);

    expect(lwdb.numberOfWords()>0).toBe(true);


    lwdb.removeWords();
    
    expect(lwdb).toHaveMethod("numberOfWords"); 
    expect(lwdb.numberOfWords()).toBe(0);

    var keys = lwdb.keysOfAllWords();
    expect(keys.length).toBe(0);

  });




  it("should be able to reinitialize the persistent storage", function() {
    
    var n = (wordlist).length;
    expect(n>0).toBe(true);

    lwdb.loadWords(wordlist);

    expect(lwdb.numberOfWords()>0).toBe(true);


    lwdb.destroy();
    // FIXME add note, what does destroy() do?

    lwdb = LWdb("LearnWords");
    expect(lwdb.numberOfWords()==0).toBe(true);
    
  });

});



describe("Words may be stored.", function() {

 

    it("should be able to answer the number of words", function() {
      expect(lwdb.numberOfWords()).toBe(0);
    });





    it("should be able to store a new word", function() {
      // this tests the method .putWord
     // couchDB has for the method "put"
      //    Inserts a document, or new version of an existing document

     // initially now words in the database
      expect(lwdb.numberOfWords()).toBe(0);

      // pick a random word from the wordlist
      var i = parseInt(Math.floor(Math.random()*wordlist.length));
      var aWord = wordlist[i];
      aWord._id = (i+1);

      // put the word into the db
      lwdb.putWord(aWord);

      // now the db should have one word.
      expect(lwdb.numberOfWords()).toBe(1);
    });



    it("should be able to get back a stored word", function() {  

      // the word to be inserted
      var newWord = {
        "_id": 1,
        "word": "melon",
        "translate": "die Melone"
      };

      // db is empty initially
      expect(lwdb.numberOfWords()).toBe(0);


      lwdb.putWord(newWord);

     
      expect(lwdb.numberOfWords()).toBe(1);
     
       // get the word back by using the word identification number
       var r = lwdb.getWord(1);

      // check the result
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






    it("should be able to store a modified word", function() {

      // 
      expect(lwdb.numberOfWords()).toBe(0);
      var i = parseInt(Math.floor(Math.random()*wordlist.length));
      var aWord = wordlist[i];
      var id = (i+1);
      aWord._id = id;
      lwdb.putWord(aWord);
      expect(lwdb.numberOfWords()).toBe(1);

     // now get the word by using the word identification number (id)
      var wordFromDB = lwdb.getWord(id);

      // change the step value
      wordFromDB.step = 5;

      // save the word
      lwdb.putWord(wordFromDB);

      // read it back and check if the value has been stored properly
      var step = (lwdb.getWord(id)).step;
      expect(step === 5).toBe(true);

    });



    it("should be able to store a step value of 0", function() {
      // this test covers a specific problem when the step value is 0

      // set up db entry
      expect(lwdb.numberOfWords()).toBe(0);
      var aWord = wordlist[3];
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





    it("should be able to remove all words", function() {
      // insert first n words from wordList
      var n = parseInt(Math.floor(Math.random()*wordlist.length));
      var aWord;
      for(var i = 0; i < n; i++){
        aWord = wordlist[i];
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

      var n = parseInt(Math.floor(Math.random()*wordlist.length));

      var aWord;
      for(var i = 0; i < n; i++){
        aWord = wordlist[i];
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
      var n = parseInt(Math.floor(Math.random()*wordlist.length));


      var aWord;
      for(var i = 0; i < n; i++){
        aWord = wordlist[i];
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
        var tmp = wordlist[i];
        tmp._id = i+1;

        // keys might not be ordered by id, e.g. "10" < "2" 
        var w = lwdb.getWord(tmp._id);
        
        expect(w).toHaveString("word");
        expect(tmp).toHaveString("word");
        expect(w.word).toBe(tmp.word);

        expect(w).toHaveString("translate");
        expect(tmp).toHaveString("translate");
        expect(w.translate).toBe(tmp.translate);

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
      var theWordList = wordlist;
      expect(theWordList).toBeArrayOfObjects();


      // run

      lwdb.importFrom(theWordList);

      
      // check

      var keys = lwdb.keysOfAllWords(); 
      expect(keys.length).toBe(theWordList.length);

    });


    it("should be able to import an object with words", function() {

      expect(lwdb).toHaveMethod("importFrom");

      // setup
      lwdb.removeWords();
      expect(lwdb.numberOfWords()).toBe(0);

      var theObjectWithWords = {};
      theObjectWithWords.words = wordlist;

      expect(theObjectWithWords.words).toBeArrayOfObjects();


      // run

      lwdb.importFrom(theObjectWithWords);

      
      // check

      var keys = lwdb.keysOfAllWords(); 
      expect(keys.length).toBe(theObjectWithWords.words.length);

    });



    it("should be able to import a dbdump object", function() {
      // a dbdump object is an object which contains the data from a db.
      // the wordlist is in a property called 'words'.

      // setup
      lwdb.removeWords();
      expect(lwdb.numberOfWords()).toBe(0);

      expect(lwdb).toHaveMethod("importFrom");

      var theWordList = wordlist;
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
      
      lwdb.importFrom(wordlist);
      expect(lwdb.numberOfWords()).toBe(wordlist.length);


      // run
      var keys = lwdb.keysOfAllWords();


      // check
      expect(keys).toBeArray();
      expect(keys.length).toBe(wordlist.length);
    });


});




describe("A LWdb deals with words.", function() {

    it("should be able to answer the number of words", function() {
      expect(lwdb.numberOfWords()).toBe(0);
    });



    it("should be able to remove all words", function() {
      // insert first n words from wordList
      var n = parseInt(Math.floor(Math.random()*wordlist.length));
      var aWord;
      for(var i = 0; i < n; i++){
        aWord = wordlist[i];
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

      var n = parseInt(Math.floor(Math.random()*wordlist.length));

      var aWord;
      for(var i = 0; i < n; i++){
        aWord = wordlist[i];
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
      var n = parseInt(Math.floor(Math.random()*wordlist.length));


      var aWord;
      for(var i = 0; i < n; i++){
        aWord = wordlist[i];
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
        var tmp = wordlist[i];
        tmp._id = i+1;

        // keys might not be ordered by id, e.g. "10" < "2" 
        var w = lwdb.getWord(tmp._id);
        
        expect(w).toHaveString("word");
        expect(tmp).toHaveString("word");
        expect(w.word).toBe(tmp.word);

        expect(w).toHaveString("translate");
        expect(tmp).toHaveString("translate");
        expect(w.translate).toBe(tmp.translate);

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
      var theWordList = wordlist;
      expect(theWordList).toBeArrayOfObjects();


      // run

      lwdb.importFrom(theWordList);

      
      // check

      var keys = lwdb.keysOfAllWords(); 
      expect(keys.length).toBe(theWordList.length);

    });


    it("should be able to import an object with words", function() {

      expect(lwdb).toHaveMethod("importFrom");

      // setup
      lwdb.removeWords();
      expect(lwdb.numberOfWords()).toBe(0);

      var theObjectWithWords = {};
      theObjectWithWords.words = wordlist;

      expect(theObjectWithWords.words).toBeArrayOfObjects();


      // run

      lwdb.importFrom(theObjectWithWords);

      
      // check

      var keys = lwdb.keysOfAllWords(); 
      expect(keys.length).toBe(theObjectWithWords.words.length);

    });



    it("should be able to import a dbdump object", function() {
      // a dbdump object is an object which contains the data from a db.
      // the wordlist is in a property called 'words'.

      // setup
      lwdb.removeWords();
      expect(lwdb.numberOfWords()).toBe(0);

      expect(lwdb).toHaveMethod("importFrom");

      var theWordList = wordlist;
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
      
      lwdb.importFrom(wordlist);
      expect(lwdb.numberOfWords()).toBe(wordlist.length);


      // run
      var keys = lwdb.keysOfAllWords();


      // check
      expect(keys).toBeArray();
      expect(keys.length).toBe(wordlist.length);
    });


});




describe("A LWdb may be chosen among several others.", function() {



  it("should be able to create a DB and then another DB", function() {

    // check for existence of previously created database called "LearnWords" (the beforeAll method in the suite)
    expect(lwdb).toBeObject();
    
    expect(lwdb).toHaveString("dbName");
    expect(lwdb.dbName).toBe("LearnWords");


    expect(lwdb).toHaveMethod("putWord");
    expect(lwdb).toHaveMethod("getWord");
    expect(lwdb).toHaveMethod("importFrom");
    expect(lwdb).toHaveMethod("loadWords");

    // LearnWords db is empty initially 
      expect(lwdb.numberOfWords()).toBe(0);

      // add some words to LearnWords db
      var word1 = {
        "_id": 1,
        "word": "melon",
        "translate": "die Melone"
      };

      var word2 = {
        "_id": 2,
        "word": "carrot",
        "translate": "die Karotte"
      };

      var word3 = {
        "_id": 3,
        "word": "orange",
        "translate": "die Orange"
      };




      lwdb.putWord(word1);
      lwdb.putWord(word2);
      lwdb.putWord(word3);

    // Now we should have 3 words in the LearnWords db
      expect(lwdb.numberOfWords()).toBe(3);




    // Now create another db called "LearnWordsRed"
    lwdb = LWdb("LearnWordsRed");
    expect(lwdb.dbName).toBe("LearnWordsRed");


    // we now have access to the db LearnWordsRed which happens to have 0 words
      expect(lwdb.numberOfWords()).toBe(0);

    // But we can add other words to the db "LearnWordsRed"

      word1 = {
        "_id": 1,
        "word": "apple",
        "translate": "le pomme"
      };

      lwdb.putWord(word1);

    // Now we should have 1 word in the LearnWordsRed db
      expect(lwdb.numberOfWords()).toBe(1);

    // We can go back to the LearnWords db where we have the three entries.
    lwdb = LWdb("LearnWords");
    expect(lwdb.dbName).toBe("LearnWords");

    expect(lwdb.numberOfWords()).toBe(3);
   

     // Let's get word with id number 2
     var aWord = lwdb.getWord(2);
     expect(aWord.translate).toBe("die Karotte");


    lwdb = LWdb("LearnWordsRed");

    aWord = lwdb.getWord(1);
     expect(aWord.word).toBe("apple");

  });






});




describe("A LWdb  allows a selection of cards by tags.", function() {
  var a;


  beforeEach(function() {

      // add some words with tags to LearnWords db
      var word1 = {
        "_id": 1,
        "word": "melon",
        "translate": "die Melone",
        "tags" : "fruit"

      };

      var word2 = {
        "_id": 2,
        "word": "carrot",
        "translate": "die Karotte",
        "tags" : "8 vegetable"

      };

      var word3 = {
        "_id": 3,
        "word": "orange",
        "translate": "die Orange",
        "tags" : "8 fruit"

      };

      var word4 = {
        "_id": 4,
        "word": "apple",
        "translate": "le pomme",
        "tags" : "fruit"

      };

      var word5 = {
        "_id": 5,
        "word": "mother",
        "translate": "die Mutter",
        "tags" : "family"

      };



      lwdb.putWord(word1);
      lwdb.putWord(word2);
      lwdb.putWord(word3);
      lwdb.putWord(word4);
      lwdb.putWord(word5);




  });




  it("allows a group of cards to be selected by a tag", function() {
    expect(lwdb.numberOfWords()).toBe(5);
 
    var listOfWordsWithTag;
 
    listOfWordsWithTag = lwdb.allWordsWithTag("fruit");
    expect(listOfWordsWithTag.length).toBe(3);
  

    listOfWordsWithTag = lwdb.allWordsWithTag("family");
    expect(listOfWordsWithTag.length).toBe(1);

    listOfWordsWithTag = lwdb.allWordsWithTag("8");
    expect(listOfWordsWithTag.length).toBe(2);



  });




  it("allows a group of cards to be selected having any tag of a tag list", function() {
    expect(lwdb.numberOfWords()).toBe(5);
 
    var listOfWordsWithTag;
 
    listOfWordsWithTag = lwdb.allWordsWithAnyTagOf("fruit vegetable");
    expect(listOfWordsWithTag.length).toBe(4);
  
    // var a = false;

    // expect(a).toBe(true);


  });






  it("shows what happens if the tag does not exists", function() {
    expect(lwdb.numberOfWords()).toBe(5);
 
    var listOfWordsWithTag;
 
    listOfWordsWithTag = lwdb.allWordsWithTag("vehicle");

    expect(listOfWordsWithTag).toBeArray();
    expect(listOfWordsWithTag.length).toBe(0);
  
  });

  it("defines what happens to the database if a _group_ of cards is selected by tags", function() {
    // nothing happens to the database. No updates.
    // The selection of cards having a particular tag is held in another variable; here listOfWordsWithTag

    expect(lwdb.numberOfWords()).toBe(5);
 
    var listOfWordsWithTag;
 
    listOfWordsWithTag = lwdb.allWordsWithTag("fruit");
    expect(listOfWordsWithTag.length).toBe(3);

    expect(lwdb.numberOfWords()).toBe(5);

  });

  xit("it allows to add cards selected by a tag to be added to an existing collection", function() {
    // aCollection, aTag
    a = false;

    expect(a).toBe(true);
  });



});



describe("A LWdb deals with settings objects as well.", function() {

    it("should be able to answer settings", function() {

     // read the settings object
      var settings = lwdb.getSettings();

      expect(settings).not.toBe(null);
      expect(settings).toBeObject();

      // the settings object has default values
      expect(settings.numberOfOptions).toBe(4);
      expect(settings.delay).toBe(8640000);
      expect(settings.factorForDelayValue).toBeArray();
      expect(settings.factorForDelayValue[0]).toBe(1);
      expect(settings.factorForDelayValue[1]).toBe(1);
      expect(settings.factorForDelayValue[2]).toBe(3);
      expect(settings.factorForDelayValue[3]).toBe(7);
      expect(settings.factorForDelayValue[4]).toBe(45);
      expect(settings.factorForDelayValue[5]).toBe(90);
      expect(settings.factorForDelayValue[6]).toBe(360);
      expect(settings.factorForDelayValue[7]).toBe(1000);
      //                       "defaultInitialStepValue" : _defaultInitialStepValue,
     // for the value defaultInitialStepValue see separate test below
      expect(settings.sessionExpiryTimeInSeconds).toBe(1800);
      expect(settings.suggestedNumberOfWordsInASession).toBe(20);
      expect(settings.lowestStepValue).toBe(-10000);



    });


    it("should be able to store settings", function() {
      // test needs improvement

      var settings = lwdb.getSettings();

      // assign a new settings value
      settings.factorForDelayValue[3] = 6;


      // store the settings object
      lwdb.putSettings(settings);


      // read the settings object again
      settings = lwdb.getSettings();


      // check the result
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

