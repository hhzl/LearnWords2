
function BoxOfQuestions(db) {

        // assign database
	this.db = db;
	this.name = db.dbName;



        // initialize values
        var _question = null; // no current question
        var _wordsToRepeat = null; // words which are eligible to be repeated.
                                   // initialisation to null forces calculation 
                                   // on first call of wordsToRepeat()
        var that = this;








        this.question = function(){
            // gives back a question to ask
            if (!_question) { 
                 // _question is null, go for a new one.
                 var wds = this.wordsToRepeat();
                 if (wds != null) {_question = that.chooseRandomObject(wds)}
            }; 
            return _question 
        };







        this.answer = function(){
            return (this.question()).translate;
        };






        this._questionHasBeenProcessed = function(){

               _question = null; 

               // This will trigger a new question, when LW.question()
               // is called the next time.

               
	       
        };



        this._getRandomInt = function(min, max){
             // Returns a random integer between min (inclusive) and max (inclusive)
             // Using Math.round() will give you a non-uniform distribution!
             
    		return Math.floor(Math.random() * (max - min + 1)) + min;
	};


	this.chooseRandomObject = function(anArray){
                return anArray[that._getRandomInt(0,anArray.length-1)];
	};



        this.moveQuestionBackwards = function(){
            if (_question) { // we have a question


                // set new date for asking the question again;
                // this has to be a a delay period later.

                _question.date = new Date().valueOf() + (that.db.getSettings()).delay;


                // put the question back at the correct step

                var s = that.db.getSettings();

                if (s.offerLearnMode) { _question.step = 1;
                                       // step 0 is the learnmode, thus do not put
                                       // it at step 0 
                                       // step 1 is the lowest step of the learn mode.
                                      }
                else { // treat all the steps the same way, as repeat mode
                       // thus the lowest step value is 0
                       _question.step = 0; 
                     
                 }


                // An alternative which is not implemented:
                // 
                // Set new step value to step - 1
                // With the result being not less than 1 or 0 depending on offerLearnMode.


                that.db.putWord(_question);

                // As the question has a new later date it is no more 
                // a current question

                that._questionHasBeenProcessed();
            }
        };





       this.moveQuestionForward = function(){
 
            if (_question) { // we have a question
                 var s = that.db.getSettings();

                // calculate new date. This depends on which step the question is.
                // And the delay calculation factor for that particular step.
                _question.date = new Date().valueOf() + 
                                 s.delay * s.factorForDelayValue[_question.step];

                // With repeated calls to this method 
                // the following will move the question up 
                // just one step beyond the last step.
                // A step value beyond the last step value will prevent the
                // question appearing in the wordsToRepeat collection
                // the next time wordsToRepeat is calculated.

                _question.step = _question.step + 1;


                that.db.putWord(_question);
 
                // As the question has a new later date it is no more 
                // a current question

                that._questionHasBeenProcessed();

               
            }  
       };





       this.wordsToRepeat = function(){

          var lowestStep;
          var todayNow = new Date().valueOf();

          var s = that.db.getSettings();

          if (s.offerLearnMode) { 
                                  lowestStep = 1
                                  // 1 is lowest step for repeat mode
               }
          else { // treat all the steps the same way.
                 // we only have a repeat mode
                 // thus the lowest step value is 0

                 lowestStep = 0; 
          }          


          function isToBeRepeated(aWord) {
               return (aWord.step >= lowestStep) && (todayNow >= aWord.date);
          }

          

          if (_question == null || _wordsToRepeat == null) { 
                // _question == null means that either a question has never
                // been asked before or that a question has been asked and
                // processed but no new question yet has been picked.
                // In both cases a new _wordsToRepeat collection is necessary.

                _wordsToRepeat = (that.db.allWords()).filter(isToBeRepeated)
          };

          return _wordsToRepeat;
       };

}


BoxOfQuestions.prototype.importFrom = function(anArrayOfObjects){
     this.db.importFrom(anArrayOfObjects);
};






BoxOfQuestions.prototype.getAnswerOptions = function(numberOfOptions){
  throw new Error("not yet implemented");
};



BoxOfQuestions.prototype.config = function(config){
  throw new Error("not yet implemented");
};



BoxOfQuestions.prototype.status = function(){
  // give the number of words in the whole box
  // and the number of words in wordsToRepeat

  var status = {};
  status.numberOfWords = this.db.numberOfWords();

  // FIXME add more content to status
  
  return status
};




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
                      "factorForDelayValue": [1,1,3,7,45,90,360,1000],
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


