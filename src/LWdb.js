"use strict";


var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');


function LWdb(name) {
    this.name = name;
}



LWdb.prototype.open = function() {
    // something 
    throw new Error("not yet implemented");
};



LWdb.prototype.persistentStorageOK = function() {
    return this.isOK;
};



LWdb.prototype.numberOfWords = function() {
    // something 
    var key = this.name+'-numberOfWords';
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



LWdb.prototype.setNumberOfWords = function(n) {
    var key = this.name+'-numberOfWords';
    localStorage.setItem(key,n);
};



LWdb.prototype.incNumberOfWords = function() {
    // something 
    var n = this.numberOfWords();
    this.setNumberOfWords(n + 1);
};



LWdb.prototype.wdKeyFor = function(anInteger) { 
    return this.name+'-wd-'+anInteger;
};



LWdb.prototype.put = function(word) {

    var anInteger = this.numberOfWords()+1;

    // FIXME: Should this be a deep clone?
    var copy = {};
    for(var key in word){
        copy[key] = word[key];
    }
    copy._id = anInteger;

    // get storage key 
    var storageKey = this.wdKeyFor(anInteger);
    // try to get the word to check if it already exists
    var value = localStorage.getItem(storageKey); 

    // save the word
    localStorage.setItem(storageKey, JSON.stringify(copy));

    // if the word has not existed before increment the number of words
    if (value == null) {
        this.incNumberOfWords();
    } 
};



LWdb.prototype.getWord = function(anInteger) {
    var storageKey = this.wdKeyFor(anInteger);
    return JSON.parse(localStorage.getItem(storageKey)); 
};



LWdb.prototype.keysOfAllWords = function() {
    var keys = [];
    var keyRegex = new RegExp("^"+this.name+"\\-wd\\-\\d+$");
    for (var i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        // check it starts with <name>-wd-
        if(keyRegex.test(key)){
            keys.push(key);
        }
    }
    return keys;
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
    // IMPLEMENTATION NEEDS ATTENTION
    var key = this.name + '-settings';

    var value = localStorage.getItem(key);
    if (value==null) { value = '{"anAttribute": "value"}'};
    var res = JSON.parse(value);
    console.log('LWdb getSettings', res); 
    return res;
};



LWdb.prototype.storeSettings = function(anObject) {
    
    var key = this.name + '-settings';
    return localStorage.setItem(key,JSON.stringify(anObject));  
};




LWdb.prototype.removeWords = function() {
    var keys = this.keysOfAllWords(); 
    for (var i = 0; i < keys.length; i++){
        localStorage.removeItem(keys);
    }
    this.setNumberOfWords(0);

};



LWdb.prototype.resetStorage = function(anObject) {
  // something 
  throw new Error("not yet implemented");  
};



// -------------------------------------------------------------
// API as provided by LearnWords1
LWdb.prototype.readItem = function(key) {
  // something 
  throw new Error("not yet implemented");

};

LWdb.prototype.removeItem = function(key) {
  // something 
  throw new Error("not yet implemented");

};

LWdb.prototype.storeItem = function(key, value) {
  // something 
  throw new Error("not yet implemented");
};

LWdb.prototype.init = function(key) {
  // something 
  throw new Error("not yet implemented");
};

module.exports = LWdb;

