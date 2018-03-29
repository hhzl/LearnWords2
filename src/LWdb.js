// ----------------------------------------------------------------------
// LearnWords 2
//
// File:
//    LWdb.js
//
// Purpose:
//    Database layer
//    Definition of an LWdb object
//
// Date:
//    28th March 2018
//
// ----------------------------------------------------------------------



// start of nodejs specific code
if (typeof localStorage === "undefined" || localStorage === null) {
  // we run in node thus we need to have a simulation of LocalStorage
  var LocalStorage = require("node-localstorage").LocalStorage;
  global.localStorage = new LocalStorage("./scratch");
}
// end of nodejs specific code




var LWdb = function(name) {
    "use strict";

    // closure, returns an LWdb object

    var dbName = name;

    // private variables

    var _keysOfAllWords = [];

    var _numberOfWords = 0;

    var recalculateIndex = true;

    var _defaultInitialStepValue = -1;




    // private methods


    var _wdKeyFor = function(anInteger) {
        return dbName+"-wd-"+anInteger;
    };



    var _setNumberOfWords = function(n) {
        var key = dbName+"-numberOfWords";
        localStorage.setItem(key,n);
        _numberOfWords = n;
        recalculateIndex = true;
    };



    var _incNumberOfWords = function() {
        _setNumberOfWords(_numberOfWords + 1);
        recalculateIndex = true;
    };


    var _invalidateIndex = function() {
        recalculateIndex = true;
    };



    var _indexNeedsRecalculation = function() {
        return recalculateIndex;
    };



    var _indexHasBeenUpdated = function() {
        recalculateIndex = false;
    };




    var _removeObjects = function(aKeyPrefix){
        if (!!localStorage) {   // this.isOK()
            var key;
            var st;
            var keysToDelete = [];

            // find all keys starting with aKeyPrefix
            for (var i = 0; i < localStorage.length; i++){
                key = localStorage.key(i);
                st = localStorage.getItem(key);

                if (key.lastIndexOf(aKeyPrefix,0) === 0) {
                    keysToDelete.push(key);
                }
            }

            keysToDelete.forEach(function(aKey){
                localStorage.removeItem(aKey);
            });

        }
        };









    // construct literal LWdb object
    // methods and properties are public

    return {

    dbName : name,

    putSettings : function(anObject) {
        
        var key = dbName + "-settings";
        return localStorage.setItem(key,JSON.stringify(anObject));  
    },






    removeWords : function() {
        var keys = this.keysOfAllWords(); 
        for (var i = 0; i < keys.length; i++){
            localStorage.removeItem(keys[i]);
        }
        _setNumberOfWords(0);
        _invalidateIndex();
    },






    destroy : function() {
    // completely remove all objects stored under the db name

         var aKeyPrefix = dbName;  

    // these objects all have a key starting with the db name 
         _removeObjects(aKeyPrefix);
    },




      persistentStorageOK : function() {
        return !!localStorage;
      },




      isOK : function() {
         return this.persistentStorageOK();
      },






    numberOfWords : function() {
     
       var key = dbName+"-numberOfWords";
        var r = 0;

        if (this.isOK()) {
            r = localStorage.getItem(key);
            if (r === null) {
                localStorage.setItem(key,'0'); 
                r = '0';
            }
          r = parseInt(r);
        }
        _numberOfWords = r;
        return r;
    },








    putWord : function(aWord) {

        if(!aWord._id){
            throw "_id is required in a word";
        }

        if(!aWord.hasOwnProperty("step")){
            aWord.step = _defaultInitialStepValue;
        }
        if(!aWord.date){
            aWord.date = 0;
        }

        // get storage key 
        var storageKey = _wdKeyFor(aWord._id);
        // try to get the word to check if it already exists
        var value = localStorage.getItem(storageKey); 
     
        // save the word

        localStorage.setItem(storageKey, JSON.stringify(aWord));

        // if the word has not existed before increment the number of words
        if (value === null) {
            _incNumberOfWords();
        }
        // console.log('storageKey is=', storageKey, 'word is=', copy.word);
        return storageKey;
    },







    getWord : function(anInteger) {
        var storageKey = _wdKeyFor(anInteger);
        try{
            var aWord = JSON.parse(localStorage.getItem(storageKey));
            if(!aWord.hasOwnProperty("step")){
                aWord.step = _defaultInitialStepValue;
            }
            if(!aWord.date){
                aWord.date = 0;
            }
            return aWord;
        }catch(e){
            return null;
        }
    },



    importFrom : function(obj) {
    // takes an array of words currently
    // should allow for a more general object which includes settings later.      
      var key;
      var theWords;

      if (typeof obj === "object") {

        
        if (obj instanceof Array) {
           theWords = obj;
        } else {
           theWords = obj.words;
           // TODO 
           // add import of settings
        }


        // import array of words
        var n = theWords.length;
        var aWord;
      
        for(var i = 0; i < n; i++){
          aWord = theWords[i];
	  key = this.putWord(aWord);
        }

        _invalidateIndex();

      }

    },




    loadWords : function(theWords) {
        this.importFrom(theWords);
    },







    keysOfAllWords : function() {
        if (_indexNeedsRecalculation()) {
            _keysOfAllWords = [];
            var keyRegex = new RegExp("^"+dbName+"\\-wd\\-\\d+$");
            for (var i = 0; i < localStorage.length; i++){
                var key = localStorage.key(i);
                // check it starts with <name>-wd-
                if(keyRegex.test(key)){
                    _keysOfAllWords.push(key);
                }
            }
            // _setNumberOfWords(_keysOfAllWords.length);
            // as putWord() updates n
            _indexHasBeenUpdated();

        }
        return _keysOfAllWords;
    },





    allWords : function() {
        var keys = this.keysOfAllWords();
        var words = [];
        for(var i = 0; i < keys.length; i++){
            var str = localStorage.getItem(keys[i]);
            words.push(JSON.parse(str));
        }
        return words;
    },



    allWordsWithTag : function(tag) {
        var stringToMatch = tag+' ';
        // we assume that tags are separated by space
        // adding a space to the stringToMatch makes sure that we have a full match
        // otherwise we might have a match if tag is a prefix of another tag.
        var keys = this.keysOfAllWords();
        var words = [];
        for(var i = 0; i < keys.length; i++){
            var strWord = localStorage.getItem(keys[i]);
            var word = JSON.parse( strWord );
            if (word.hasOwnProperty('tags')) {
                if ((word.tags+' ').indexOf(stringToMatch)>-1) {
                    words.push(word)
                }
            };
        }
        return words;
    },




    allWordsWithAnyTagOf : function(aTagList) {

        // we assume that tags are separated by space
        // adding a space to the stringToMatch makes sure that we have a full match
        // otherwise we might have a match if tag is a prefix of another tag.

        var tagList = aTagList.trim().split(' ');

        var keys = this.keysOfAllWords();
        var words = [];
        for(var i = 0; i < keys.length; i++){
            var strWord = localStorage.getItem(keys[i]);
            var word = JSON.parse( strWord );
            if (word.hasOwnProperty('tags')) {

                for (var k = 0; k < tagList.length; k++){
                    if ((word.tags+' ').indexOf(tagList[k]+' ')>-1) {
                    words.push(word);
                    break; // no need for more checks as we have found a match
                    }
                }
            };
        }
        return words;
    },





    getSettings : function() {
        
        var key = dbName + "-settings";

        var value = localStorage.getItem(key);

        // lazy initialisation
        if (value===null) {
            // define default value for settings
            value = { "delay": 8640000,
                      "numberOfOptions": 4,
                      "factorForDelayValue": [1,1,3,7,45,90,360,1000],
                      "defaultInitialStepValue" : _defaultInitialStepValue,
                      "sessionExpiryTimeInSeconds" : 1800,
                      "suggestedNumberOfWordsInASession" : 20,
                      "lowestStepValue" : -10000
                      };
            // One day = 24h * 60m * 60s * 1000 ms = 86'400'000 ms (milliseconds)
            // the delay has been shortened to 1 day/10 for test purposes.
            // this is 2h 24 min.
            // the value is used to calculate the new date after a
            // word has been answered correctly.

            // "defaultInitialStepValue : -1 means that words means
            // that words are available to be picked and sent to
            // learn/repeat mode.

            this.putSettings(value);
            return value;
        } else {
            return JSON.parse(value);
        }
    }









    };  // end of literal LWdb object




}; // end of LWdb function definition


module.exports = LWdb;

