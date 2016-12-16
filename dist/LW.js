function BoxOfQuestions(db) {


        // private variables

        var _question = null; // no current question
        var _wordsToRepeat = null; // words which are eligible to be repeated.
                                   // initialisation to null forces calculation 
                                   // on first call of wordsToRepeat()






        // private methods

        var _questionHasBeenProcessed = function(){

               _question = null; 

               // This will trigger a new question, when LW.question()
               // is called the next time.
	       
        };





        var _getRandomInt = function(min, max){
             // Returns a random integer between min (inclusive) and max (inclusive)
             // Using Math.round() will give you a non-uniform distribution!
             
    		return Math.floor(Math.random() * (max - min + 1)) + min;
	};












        // ===============================================================================
        // literal object
        // ===============================================================================


        return {


	db : db,

	name : db.dbName,





	chooseRandomObject : function(anArray){
                return anArray[_getRandomInt(0,anArray.length-1)];
	},




        question : function(){
            // gives back a question to ask
            if (!_question) { 
                 // _question is null, go for a new one.
                 var wds = this.wordsToRepeat();
                 if (wds != null) {_question = this.chooseRandomObject(wds)}
            }; 
            return _question 
        },








        answer :function(){
            return (this.question()).translate;
        },






       moveQuestionBackwards : function(){
            if (_question) { // we have a question


                // set new date for asking the question again;
                // this has to be a a delay period later.

                _question.date = new Date().valueOf() + (this.db.getSettings()).delay;


                // put the question back at the correct step

                var s = this.db.getSettings();

                if (s.offerLearnMode) { _question.step = 1;
                                       // step 0 is the learnmode, thus do not put
                                       // it at step 0 
                                       // step 1 is the lowest step of the repeat mode.
                                      }
                else { // treat all the steps the same way, as repeat mode
                       // thus the lowest step value is 0
                       _question.step = 0; 
                     
                 }


                // An alternative which is not implemented:
                // 
                // Set new step value to step - 1
                // With the result being not less than 1 or 0 depending on offerLearnMode.


                this.db.putWord(_question);

                // As the question has a new later date it is no more 
                // a current question

                _questionHasBeenProcessed();
            }
        },








       moveQuestionForward : function(){
 
            if (_question) { // we have a question
                 var s = this.db.getSettings();

                // calculate new date. This depends on which step the question is.
                // And the delay calculation factor for that particular step.
                _question.date = new Date().valueOf() + 
                                 s.delay * s.factorForDelayValue[_question.step];

                // With repeated calls to this method 
                // the following will move the question up. 
                // 

                _question.step = _question.step + 1;

                // The assumption is that long delay values for higher steps 
                // prevent an access error for 
                //     s.factorForDelayValue[stepNumber]

                this.db.putWord(_question);
 
                // As the question has a new later date it is no more 
                // a current question

                _questionHasBeenProcessed();

               
            }  
       },






      importFrom : function(anArrayOfObjects){
       this.db.importFrom(anArrayOfObjects);
       },








       getAnswerOptions : function(numberOfOptions){
          // simple implementation : choose from all available words
          // As we use ECMA5script findIndex is not available.
          // We have to duplicate the effort in keeping an array of id
          // numbers called idsOfOptions and an array of objects called
          // options.

          var n = (db.getSettings()).numberOfOptions;
          
          var options = [];
        
          if (db.numberOfWords() >= n) {
             
             var q = this.question();
             options.push(q);

	     var idsOfOptions = [];
             idsOfOptions.push(q._id);
             
             var anOption;
             var allWords =  this.db.allWords();  
            
             do {
                // choose option from all words.
                anOption = this.chooseRandomObject(allWords);

                if (idsOfOptions.indexOf(anOption._id) == -1) {
                        // the new option is not included yet
			idsOfOptions.push(anOption._id);
                        options.push(anOption)
               }
           
             } while (options.length < n);


          };
          return options
       },







       config : function(config){
          throw new Error("not yet implemented");
       },







       status : function(){
         // give the number of words in the whole box
         // and the number of words in wordsToRepeat

         var status = {};
         status.numberOfWords = this.db.numberOfWords();

          // FIXME add more content to status
  
         return status
       },








       wordsToRepeat : function(){

          var lowestStep;
          var todayNow = new Date().valueOf();

          var s = this.db.getSettings();

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

                _wordsToRepeat = (this.db.allWords()).filter(isToBeRepeated)
          };

          return _wordsToRepeat;
       }



      }

}






// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// NOTE: pay special attention to how the number of Words is calculated
// FIXME
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



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






var LWdb = function(name) {

    // functional style, 
    // closure, returns an LWdb object

    var dbName = name;

    // private variables

    var _keysOfAllWords = [];

    var _numberOfWords = 0;

    
    var recalculateIndex = true; 





    // private methods


    var _wdKeyFor = function(anInteger) { 
        return dbName+'-wd-'+anInteger;
    };



    var _setNumberOfWords = function(n) {
        var key = dbName+'-numberOfWords';
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
        return recalculateIndex
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
        
        var key = dbName + '-settings';
        return localStorage.setItem(key,JSON.stringify(anObject));  
    },






    removeWords : function() {
        var keys = this.keysOfAllWords(); 
        for (var i = 0; i < keys.length; i++){
            localStorage.removeItem(keys);
        }
        _setNumberOfWords(0);
    },






    destroy : function(anObject) {

         var aKeyPrefix = dbName;  
         _removeObjects(aKeyPrefix);
    },



      persistentStorageOK : function() {
        return !!localStorage;
      },




      isOK : function() {
         return this.persistentStorageOK();
      },






    numberOfWords : function() {
     
       var key = dbName+'-numberOfWords';
        var r = 0;

        if (this.isOK()) {
            r = localStorage.getItem(key);
            if (r == null) {
                localStorage.setItem(key,'0'); 
                r = '0';
            };
          r = parseInt(r);
        }; 
        _numberOfWords = r;
        return r;
    },








    putWord : function(aWord) {

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
    },







    getWord : function(anInteger) {
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
    },



    importFrom : function(theWords) {
      
      var key;
      var n = theWords.length;

      var aWord;
      
      for(var i = 0; i < n; i++){
        aWord = theWords[i];
	key = this.putWord(aWord);
      }

      _invalidateIndex();

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
        };
        _indexHasBeenUpdated();
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





    getSettings : function() {
        
        var key = dbName + '-settings';

        var value = localStorage.getItem(key);

        // lazy initialisation
        if (value==null) { 
            // define default value for settings    
            value = { "delay": 8640000, 
                      "numberOfOptions": 4,
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
    }









    }  // end of literal LWdb object




}; // end of LWdb function definition



