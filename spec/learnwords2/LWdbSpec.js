"use strict";

var LWdb = require('../../src/LWdb');
var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');



describe("Database LWdb", function() {

  beforeAll(function(){
    // Randomly select a word list (see SpecHelper for details)
    var codes = this.getWordListCodes();
    var i = parseInt(Math.floor(Math.random()*codes.length));
    this.wordList = this.getWordList(codes[i]);
  });


  beforeEach(function() {
    localStorage.clear();
    this.db = new LWdb("LearnWords");
  });


  afterEach(function(){
    this.db.destroy();
  });


  it("should be able to create a DB", function() {

    expect(this.db).toBeObject();
    
    expect(this.db).toHaveString("dbName");
    expect(this.db.dbName).toBeString("LearnWords");

    expect(this.db).toHaveArray("_keysOfAllWords");



  });


  it("should be able to answer if persistent storage is available", function() {

    expect(this.db).toHaveMethod("persistentStorageOK");
    expect(this.db.persistentStorageOK()).toBeTrue();

  });


  it("should be able to reinitialize the persistent storage", function() {
    
    this.db.removeWords();
    expect(this.db).toHaveMethod("numberOfWords");
    expect(this.db.numberOfWords()).toBe(0);

  });


  describe("deals with words;", function() {

    it("should be able to answer the number of words", function() {
      expect(this.db.numberOfWords()).toBeNumber(0);
    });



    it("should be able to store a new word", function() {
      // Inserts a new document, or new version of an existing document
      expect(this.db.numberOfWords()).toBeNumber(0);
      var i = parseInt(Math.floor(Math.random()*this.wordList.length));
      var aWord = this.wordList[i];
      this.db.put(aWord);
      expect(this.db.numberOfWords()).toBeNumber(1);
    });



    it("should be able to get a word", function() {      
      var newWord = {
        "word": "melon",
        "translate": "die Melone"
      };

      expect(this.db.numberOfWords()).toBeNumber(0);
      this.db.put(newWord);
      expect(this.db.numberOfWords()).toBeNumber(1);
      var r = this.db.getWord(1);
      expect(r).toBeObject();

      expect(r).toHaveNumber("_id");
      expect(r._id).toBeNumber(1);

      expect(r).toHaveString("word");
      expect(r.word).toBeString("melon");

      expect(r).toHaveString("translate");
      expect(r.translate).toBeString("melon");

    });



    it("should be able to remove all words", function() {
      // insert first n words from wordList
      var n = parseInt(Math.floor(Math.random()*this.wordList.length));
      for(var i = 0; i < n; i++){
        this.db.put(this.wordList[i]);
      }
      expect(this.db.numberOfWords()).toBeNumber(n);
      this.db.removeWords();
      expect(this.db.numberOfWords()).toBeNumber(0);

    });




    it("should be able to answer a list of all keys of all words", function() {
      // insert first n words from wordList
      // n is a random number of words

      var n = parseInt(Math.floor(Math.random()*this.wordList.length));

      var aWord;

      for(var i = 0; i < n; i++){
        aWord = this.wordList[i];
        this.db.put(aWord);
      }

      // check result
      var r = this.db.keysOfAllWords();
      expect(r).toBeArrayOfStrings();
      expect(r.length).toBeNumber(this.db.numberOfWords());
       
      for(var i = 0; i < r.length; r++){
        expect(r[i]).toBeString("");
      }

    });




    it("should be able to answer a list of all words", function() {
      
      // insert first n words from wordList
      var n = parseInt(Math.floor(Math.random()*this.wordList.length));
      for(var i = 0; i < n; i++){
        this.db.put(this.wordList[i]);
      }
      expect(this.db.numberOfWords()).toBe(n);

      var r = this.db.allWords();
      expect(r).toBeArray();
      expect(r.length).toBe(this.db.numberOfWords());
      expect(r.length).toBe(n);

      for(var i = 0; i < r.length; i++){
        var tmp = this.wordList[i];
        tmp._id = i+1;
        
        expect(r[i]).toHaveString("word");
        expect(tmp).toHaveString("word");
        expect(r[i].word).toBeString(tmp.word);

        expect(r[i]).toHaveString("translate");
        expect(tmp).toHaveString("translate");
        expect(r[i].translate).toBeString(tmp.translate);

        expect(r[i]).toHaveNumber("_id");
        expect(tmp).toHaveNumber("_id");
        expect(r[i]._id).toBeNumber(tmp._id);

      }

    });



    it("should be able to import words", function() {
      this.db.removeWords();
      expect(this.db.numberOfWords()).toBe(0);

      expect(this.db).toHaveMethod("importFrom");
      var theWordList = this.wordList;
      expect(theWordList).toBeArrayOfObjects();

      this.db.importFrom(theWordList);
      // console.log('SPEC theWordList=',theWordList);
      // console.log('SPEC this.db.numberOfWords()=',this.db.numberOfWords());

      
      var keys = this.db.keysOfAllWords(); 
      expect(keys.length).toBe(theWordList.length);

      // expect(this.db.numberOfWords()).toBe(theWordList.length);
    });


    it("should be able to maintain an index", function() {
      this.db.removeWords();
      expect(this.db.numberOfWords()).toBe(0);
      
      this.db.importFrom(this.wordList);
      expect(this.db.numberOfWords()).toBe(10);

      expect(this.db.keysOfAllWords()).toBeArray();

    });


  });



  describe("LWdb deals with settings", function() {

    it("should be able to answer settings", function() {
      var settings = this.db.getSettings();
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
