"use strict";
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
//    3rd December 2016
//
// ----------------------------------------------------------------------



if (typeof localStorage === "undefined" || localStorage === null) {
  // we run in node thus we need to have a simulation of LocalStorage
  var LocalStorage = require('node-localstorage').LocalStorage;
  global.localStorage = new LocalStorage('./scratch');
}




var LWdb = function(dbName) {

    this.dbName = dbName;
    this._keysOfAllWords = [];
    
    // private
    var recalculateIndex = true; 

    var that = this;


    var _wdKeyFor = function(anInteger) { 
        return that.dbName+'-wd-'+anInteger;
    };

    var _setNumberOfWords = function(n) {
        var key = that.dbName+'-numberOfWords';
        localStorage.setItem(key,n);
        recalculateIndex = true;
    };


    var _incNumberOfWords = function() {
        var n = that.numberOfWords();
        _setNumberOfWords(n + 1);
        recalculateIndex = true;
    };

    this._invalidateIndex = function() {
        recalculateIndex = true;
    };

    this._indexNeedsRecalculation = function() {
        return recalculateIndex
    };

    this._indexHasBeenUpdated = function() {
        recalculateIndex = false;
    };

    var _removeObjects = function(aKeyPrefix){
        if (that.isOK) {
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







    LWdb.prototype.persistentStorageOK = function() {
        return !!localStorage;
    };



    LWdb.prototype.isOK = function() {
        return this.persistentStorageOK();
    };



    LWdb.prototype.numberOfWords = function() {
     
       var key = this.dbName+'-numberOfWords';
        var r = 0;

        if (this.isOK) {
            r = localStorage.getItem(key);
            if (r == null) {
                localStorage.setItem(key,'0'); 
                r = '0';
            };
          r = parseInt(r);
        }; 
        return r;
    };



    LWdb.prototype.putWord = function(aWord) {

        if(!aWord._id){
            throw "_id is required in a word";
        }
        if(!aWord.step){
            aWord.step = 0;
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
        if (value == null) {
            _incNumberOfWords();
        };
        // console.log('storageKey is=', storageKey, 'word is=', copy.word);
        return storageKey;
    };




    LWdb.prototype.getWord = function(anInteger) {
        var storageKey = _wdKeyFor(anInteger);
        try{
            var aWord = JSON.parse(localStorage.getItem(storageKey));
            if(!aWord.step){
                aWord.step = 0;
            }
            if(!aWord.date){
                aWord.date = 0;
            }
            return aWord;
        }catch(e){
            return null;
        }
    };


LWdb.prototype.importFrom = function(theWords) {
      
      var key;
      var n = theWords.length;

      var aWord;
      
      for(var i = 0; i < n; i++){
        aWord = theWords[i];
	key = this.putWord(aWord);
      }

      this._invalidateIndex();

    }



    LWdb.prototype.loadWords = function(theWords) {
        this.importFrom(theWords);
    }



    LWdb.prototype.keysOfAllWords = function() {
        if (this._indexNeedsRecalculation()) {
            this._keysOfAllWords = [];
            var keyRegex = new RegExp("^"+this.dbName+"\\-wd\\-\\d+$");
            for (var i = 0; i < localStorage.length; i++){
                var key = localStorage.key(i);
                // check it starts with <name>-wd-
                if(keyRegex.test(key)){
                    this._keysOfAllWords.push(key);
                }
            }
        };
        this._indexHasBeenUpdated();
        return this._keysOfAllWords;
    };



    LWdb.prototype.allWords = function() {
        var keys = this.keysOfAllWords();
        var words = [];
        for(var i = 0; i < keys.length; i++){
            var str = localStorage.getItem(keys[i]);
            words.push(JSON.parse(str));
        }
        return words;
    };



    LWdb.prototype.getSettings = function() {
        
        var key = this.dbName + '-settings';

        var value = localStorage.getItem(key);

        // lazy initialisation
        if (value==null) { 
            // define default value for settings    
            value = { "delay": 8640000, 
                      "factorForDelayValue": [1,1,3,7],
                      "offerLearnMode": false
                      };
            // One day = 24h * 60m * 60s * 100μs
            // the delay has been shortened to 1 day/100 for test purposes.
            // this is used to calculate the new date after a
            // word has been answered correctly.
            this.putSettings(value);
            return value
        } else {
            return JSON.parse(value)
        }
    };



    LWdb.prototype.putSettings = function(anObject) {
        
        var key = this.dbName + '-settings';
        return localStorage.setItem(key,JSON.stringify(anObject));  
    };



    LWdb.prototype.removeWords = function() {
        var keys = this.keysOfAllWords(); 
        for (var i = 0; i < keys.length; i++){
            localStorage.removeItem(keys);
        }
        _setNumberOfWords(0);

    };



    LWdb.prototype.destroy = function(anObject) {

         var aKeyPrefix = this.dbName;  
         _removeObjects(aKeyPrefix);
    };


};

module.exports = LWdb;

