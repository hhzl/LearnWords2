"use strict";

var LWdb = require('./LWdb');


function BoxOfQuestions(db) {
	this.name = db.name;
	this.db = db;
        var _question = null; // no current question
        var that = this;

        this.question = function(){
            // gives back a question to ask
            // if _question is null then go for a new one.

            // FIXME 
            // question is hard wired!
            if (!_question) {
                 _question = that.db.getWord(1);
                 return _question
            } else
            {
              return _question // existing value
            }
        };



        this.moveQuestionBackwards = function(){
            if (_question) { // we have a question

                _question.date = new Date().valueOf() + (that.db.getSettings()).delay;
                _question.step = 0;

                that.db.putWord(_question);

                // as the question has a new later date it is no more 
                // a current question
               _question = null; 
            }
        };
}


BoxOfQuestions.prototype.importFrom = function(anArrayOfObjects){
     this.db.importFrom(anArrayOfObjects);
};




BoxOfQuestions.prototype.wordsToRepeat = function(){
  throw new Error("not yet implemented");
};



BoxOfQuestions.prototype._chooseRandomObject = function(anArray){
  throw new Error("not yet implemented");
};



BoxOfQuestions.prototype.answer = function(){
  throw new Error("not yet implemented");
};



BoxOfQuestions.prototype.getAnswerOptions = function(numberOfOptions){
  throw new Error("not yet implemented");
};



BoxOfQuestions.prototype.moveQuestionForward = function(){
  throw new Error("not yet implemented");
};



BoxOfQuestions.prototype.config = function(config){
  throw new Error("not yet implemented");
};



BoxOfQuestions.prototype.status = function(){
  throw new Error("not yet implemented");
};


module.exports = BoxOfQuestions;

