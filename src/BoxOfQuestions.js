"use strict";

var LWdb = require('./LWdb');


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






module.exports = BoxOfQuestions;
