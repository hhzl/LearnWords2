"use strict";


if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  global.localStorage = new LocalStorage('./scratch');
}


function LWdb(dbName) {
    this.dbName = dbName;
    this._keysOfAllWords = [];
    this.recalculateIndex = true;
}




LWdb.prototype.open = function() {
    // something
    // start with init code of LW1 
    throw new Error("not yet implemented");
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





LWdb.prototype.setNumberOfWords = function(n) {
    var key = this.dbName+'-numberOfWords';
    localStorage.setItem(key,n);
};





LWdb.prototype.incNumberOfWords = function() {

    var n = this.numberOfWords();
    this.setNumberOfWords(n + 1);
};





LWdb.prototype.wdKeyFor = function(anInteger) { 
    return this.dbName+'-wd-'+anInteger;
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
    };
    // console.log('storageKey is=', storageKey, 'word is=', copy.word);
    return storageKey;
};




LWdb.prototype.getWord = function(anInteger) {
    var storageKey = this.wdKeyFor(anInteger);
    return JSON.parse(localStorage.getItem(storageKey)); 
};


/*
LWdb.prototype.importFrom = function(theWords) {
           // FIXME: put / post?
			var i= 0;
			var arrayOfKeys = [];
                        var theDB = this;
                        var key;

			theWords.forEach(function(element){
				i = i + 1;
				// element.index = "index"+i;
				// element.step = 0;
				// element.date = 0;
                                // FIXME
				// theDB.put(theDB.name +'-'+element.index, element);
                                // XXXX
                                key = theDB.put(element);
                                console.log('importFrom key=',key);
				arrayOfKeys.push(element.index);
			});

            // FIXME: what happens when existing words are present?
            // this is about updating the index  
            console.log('importFrom theDB.numberOfWords()',theDB.numberOfWords());
            theDB.put(theDB.name + '-words', arrayOfKeys);
            theDB.index = arrayOfKeys; 

            console.log(arrayOfKeys.length + " words loaded");

	};
*/


LWdb.prototype.importFrom = function(theWords) {
      
      var key;
      var n = theWords.length;

      var aWord;
      
      for(var i = 0; i < n; i++){
        aWord = theWords[i];
	key = this.put(aWord);
      }

      this.invalidateIndex();

}

LWdb.prototype.loadWords = function(theWords) {
   this.importFrom(theWords);
}



LWdb.prototype.invalidateIndex = function() {
   this.recalculateIndex = true;
}




LWdb.prototype.keysOfAllWords = function() {
    if (this.recalculateIndex) {
        // calculate index
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
    this.recalculateIndex = false;
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
        value = {"factorForDelayValue": [0,1,3,7]};
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
    this.setNumberOfWords(0);

};





LWdb.prototype.destroy = function(anObject) {

     var aKeyPrefix = this.dbName;  
     this.removeObjects(aKeyPrefix);
};



LWdb.prototype.removeObjects = function(aKeyPrefix){
		if (this.isOK) {
			var key;
			var st; 
			var keysToDelete = [];

			// go through all keys starting with the name
			// of the database, i.e 'learnWords-index14'
			for (var i = 0; i < localStorage.length; i++){
				key = localStorage.key(i);
				st = localStorage.getItem(key);                             

				if (key.lastIndexOf(aKeyPrefix,0) === 0) {
				    keysToDelete.push(key);
				}
			}
			// now we have all the keys which should be deleted
			// in the array keysToDelete.
			
			keysToDelete.forEach(function(aKey){
				localStorage.removeItem(aKey);
		 	});
        }
	},




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

