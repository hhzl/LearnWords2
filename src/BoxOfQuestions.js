"use strict";

var LWdb = require('./LWdb');


function BoxOfQuestions(db) {


        // private variables

        var _question = null; // no current question
        var _wordsToRepeat = null; // words which are eligible to be repeated.
                                   // initialisation to null forces calculation 
                                   // on first call of wordsToRepeat()

         var _status = {};




        // private methods

        var _questionHasBeenProcessed = function(){

               _question = null; 

               // This will trigger a new question, when LW.question()
               // is called the next time.
	       
        };




        var _updateSessionInfo = function(){
               // FIXME
               // update session info
              
               // if (sessionStartDateProperty does not exist)
               // then create and set it. Set lastActivity property as well;
               // set "newSession" to true and return _status

 
               // if ((timeNow - lastActivity) > 30min) 
               // then we have a new session ; set sessionStartDateProperty
               // set "newSession" to true and return _status

               // Set lastActivity property
               // set "newSession" to false and return _status
              
        };



        var _getRandomInt = function(min, max){
             // Returns a random integer between min (inclusive) and max (inclusive)
             // Using Math.round() will give you a non-uniform distribution!
             
    		return Math.floor(Math.random() * (max - min + 1)) + min;
	};



        var _shuffle =function(a) {
			 var j, x, i;
		    for (i = a.length; i; i--) {
		        j = Math.floor(Math.random() * i);
		        x = a[i - 1];
		        a[i - 1] = a[j];
		        a[j] = x;
		    };
                    return a		   
	};








        // ===============================================================================
        // literal object
        // ===============================================================================


        return {
       
        version: '0.2.1',

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
                // FIXME learnMode has a new interpretation
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
          return _shuffle(options)
       },







       config : function(config){
          throw new Error("not yet implemented");
       },







       status : function(){
         // give the number of words in the whole box
         // and the number of words in wordsToRepeat

         _status.numberOfWords = this.db.numberOfWords();

          // FIXME add more content to status
  
         return _status
       },








       wordsToRepeat : function(){

          var lowestStep = 0;  // all words with step value 0 and above are considered.
          var todayNow = new Date().valueOf();


          function isToBeRepeated(aWord) {         
               return (aWord.step >= lowestStep) && (todayNow >= aWord.date);
          }
          
          

          if (_question == null || _wordsToRepeat == null ) { 
                // _question == null means that either a question has never
                // been asked before or that a question has been asked and
                // processed but no new question yet has been picked.
                // In both cases a new _wordsToRepeat collection is necessary.

                _wordsToRepeat = (this.db.allWords()).filter(isToBeRepeated)

                _updateSessionInfo();

                // FIXME
                // check if we have a new session
                // if yes we need to check if we have enough _wordsToRepeat
                // if not we need to add some more addMoreWordsForLearning(n) 
                // then recalculate _wordsToRepeat

          };

          return _wordsToRepeat;
       },




       addMoreWordsForLearning : function(n){
          // FIXME
          // update n words with step value < 0 to have a step value of 0
          var s = this.wordsWithStepValue(-10000,-1);
          // FIXME
          // s.sort according to step value descending, highest first.
          // set step value of the first n words to 0
       }, 




       wordsWithStepValue : function(from, to){
          var toValue;

          if ( typeof(to) == "undefined" || to == null ) {toValue = from}
          else {toValue = to}

          function stepValueInRange(aWord) {         
               return (aWord.step >= from) && (aWord.step <= toValue);
          }
          

          return (this.db.allWords()).filter(stepValueInRange);
       }




      }

}



module.exports = BoxOfQuestions;
