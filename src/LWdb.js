"use strict";

function LWdb(name) {
	this.name = name;
        try {this.isOK = 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {this.isOK = false;}
}


LWdb.prototype.open = function() {
  // something 
  throw new Error("not yet implemented");
};


LWdb.prototype.persistenStorageOK = function() {
	return this.isOK
};


LWdb.prototype.numberOfWords = function() {
  // something 
  var key = this.name+'-numberOfWords';
  var r = 0;

  if (this.isOK) {r = localStorage.getItem(key);
		  if (r == null) {localStorage.setItem(key,'0'); r = '0'};
		  r = parseInt(r);
  }; 
  return r
};


LWdb.prototype.incNumberOfWords = function() {
  // something 
  var n = this.numberOfWords();
  n = n + 1;
  var key = this.name+'-numberOfWords';
  localStorage.setItem(key,n);
};


LWdb.prototype.wdKeyFor = function(anInteger) {
  // 
  return this.name+'-wd-'+anInteger;
};


LWdb.prototype.putWord = function(anInteger, anObject) {
  // 
  var storageKey = this.wdKeyFor(anInteger);
  // try to get the word to check if it already exists
  var value = localStorage.getItem(storageKey); 

  // save the word
  localStorage.setItem(storageKey, JSON.stringify(anObject));

  // if the word has not existed before increment the number of words
  if (value == null) {this.incNumberOfWords()} 
};



LWdb.prototype.postWord = function(anObject) {
  // something 
  throw new Error("not yet implemented");  
};


LWdb.prototype.getWord = function(anInteger) {
  var storageKey = this.wdKeyFor(anInteger);
  return JSON.parse(localStorage.getItem(storageKey)); 
  
};



LWdb.prototype.keysOfAllWords = function(anObject) {
  // something 
  throw new Error("not yet implemented");  
};


LWdb.prototype.allWords = function(anObject) {
  // something 
  throw new Error("not yet implemented");  
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
                        // needs attention
			var key;
			var st; 
			var stIndex = '';
			var keyDeleted = false;
      console.log('removeWords');
			// go through all keys starting with 'learnWords'
			for (var i = 0; i < localStorage.length; i++){
			  key = localStorage.key(i);
    			  st = localStorage.getItem(key);
                          // check for st.startsWith
			  if (key.lastIndexOf(this.name+'-wd',0) === 0) {
				console.log(key);
				localStorage.removeItem(key)};
				keyDeleted = true;
			};
			// if (keyDeleted) {this.removeWords()};
			// this is a hack, not fine - too much recursion.
                        // instead get all keys first into an array, then delete.
			key = this.name+'-numberOfWords';
			localStorage.setItem(key,'0');

		}



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