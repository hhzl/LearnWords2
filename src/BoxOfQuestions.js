"use strict";

var LWdb = require('./LWdb');


function BoxOfQuestions(db) {


        // private variables

        var _question = null; // no current question
        var _wordsToRepeat = null; // words which are eligible to be repeated.
                                   // initialisation to null forces calculation 
                                   // on first call of wordsToRepeat()

        var _status = {};
        var _sessionExpiryTimeInSeconds = 1800;               


 

        // private methods

        var _questionHasBeenProcessed = function(){

               _question = null; 

               // This will trigger a new question, when LW.question()
               // is called the next time.
	       
        };












        var _updateSessionInfo = function(sessionExpiryTimeInSeconds){
               // update session info in the _status object

               // _status.sessionStartDateMS
               // _status.sessionLastActivityDateMS
               // _status.sessionIsNew


               var dateTimeNow = (new Date()).valueOf();  // milliseconds



              
               function createNewSession() {
                     _status.sessionStartDateMS = dateTimeNow;
                     _status.sessionLastActivityDateMS = _status.sessionStartDateMS;
                     _status.sessionStartDate = (new Date(dateTimeNow)).toJSON();
                     _status.sessionLastActivityDate = _status.sessionStartDate
                     _status.sessionIsNew = true;
               }





               function dateTimeDifferenceInSeconds(dateA, dateB) {
                      // calculate dateA - dateB
                      return (dateA - dateB)/ 1000
               };
 




               // if (sessionStartDateProperty does not exist)
               if (!_status.hasOwnProperty("sessionStartDate")) {
                     // app has just started up. Thus we have no session yet.
                     createNewSession();
                     return _status
               }
              

               // check if session is expired ; 1800 seconds; 
               var previousActivityDate = _status.sessionLastActivityDateMS;
               if (dateTimeDifferenceInSeconds(dateTimeNow,previousActivityDate) > sessionExpiryTimeInSeconds) {
                     createNewSession();
                     return _status
               };


               // we have an active session; just update sessionLastActivityDate
               _status.sessionLastActivityDateMS = (new Date()).valueOf();
               _status.sessionLastActivityDate = (new Date(_status.sessionLastActivityDateMS)).toJSON();
              return _status
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
      
        version: '0.2.3beta',

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
            var q = this.question();
            // the answer text is either in a property 'translate' or 'answer'
            if (q.translate) {return q.translate}
            else {return q.answer}
            // FIXME needs to be properly parameterized.
        },






       moveQuestionBackwards : function(){
            if (_question) { // we have a question


                // set new date for asking the question again;
                // this has to be a a delay period later.

                _question.date = new Date().valueOf() + (this.db.getSettings()).delay;


                _question.step = 0; 
                     

                this.db.putWord(_question);

                // As the question has a new later date it is no more 
                // a current question

                _questionHasBeenProcessed();
            }
        },



       answerWasWrong : function(){this.moveQuestionBackwards()},


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



       answerWasCorrect : function(){this.moveQuestionForward()},



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
         // give the number of words in the whole box,
         // the number of words in the wordsToRepeat array and
         // information about the session which was updated by _updateSessionInfo()

         _status.numberOfWords = this.db.numberOfWords();

         if (_wordsToRepeat) {_status.noOfWordsToRepeat = _wordsToRepeat.length};
  
         return _status
       },








       addMoreWordsForLearning : function(n){
          // update n words with step value < 0 to have a step value of 0
          var lowestStepValue = this.db.getSettings().lowestStepValue;
          var candidatesToAdd = this.wordsWithStepValue(lowestStepValue,-1);
          
          // sort according to step value descending, e.g. -1,-2,-3 ...
          // sort is in place
          candidatesToAdd.sort(function(a,b) {return a.step < b.step});


          var numberOfWordsToAdd;
          // if not enough words are left to add only add what is available
          if (n < candidatesToAdd.length) { numberOfWordsToAdd = n}
          else {numberOfWordsToAdd = candidatesToAdd.length};


          // Update db with new step values

          for (var i = 0; i < numberOfWordsToAdd; i++){
             (candidatesToAdd[i]).step = 0;
             db.putWord(candidatesToAdd[i]);
          }


       }, 









       wordsToRepeat : function(){

          // calculate the array with words which are to be learned/repeated during a sessio

          // all words with step value 0 and above are considered.
          var lowestStep = 0;  

          // words with a date value >= todayNow are considered
          var todayNow = new Date().valueOf(); 


          // the function with the condition for inclusion into the result array
          function isToBeRepeated(aWord) {         
               return (aWord.step >= lowestStep) && (todayNow >= aWord.date);
          }
          
          

          if (_question == null || _wordsToRepeat == null ) { 
                // _question == null means that either a question has never
                // been asked before or that a question has been asked and
                // processed but no new question yet has been picked.
                // In both cases a new _wordsToRepeat collection is necessary.

                _wordsToRepeat = (this.db.allWords()).filter(isToBeRepeated)

                _sessionExpiryTimeInSeconds = (this.db.getSettings()).sessionExpiryTimeInSeconds;
                _updateSessionInfo(_sessionExpiryTimeInSeconds);

                if (_status.sessionIsNew) {
                   // the opportunity to check if we have enough _wordsToRepeat
                   var suggestedNumberOfWordsInASession = (this.db.getSettings()).suggestedNumberOfWordsInASession;

                   if (_wordsToRepeat.length < suggestedNumberOfWordsInASession) {
                      // we need to 
                      this.addMoreWordsForLearning(suggestedNumberOfWordsInASession - _wordsToRepeat.length); 
                      // and recalulate
                      _wordsToRepeat = (this.db.allWords()).filter(isToBeRepeated)
                   };

                   _status.sessionIsNew = false;
                }

          };

          return _wordsToRepeat;
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
