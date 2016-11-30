"use strict";

var LWdb = require('./LWdb');

function BoxOfQuestions(db) {
	this.name = db.name;
	this.db = db;
        this.noOfSteps = 3;
}


BoxOfQuestions.prototype.config = function(config){
  throw new Error("not yet implemented");
};


BoxOfQuestions.prototype.setNumberOfSteps = function(aNumber){

  // the following is fine if the number of steps is increased.
  this.noOfSteps = aNumber;

  // decide what happens when the number of steps is decreased.

  // FIXME
  // is this necessary here?
  // the step information actually is only needed for calculating the new delay
  // and that information is accessible through the index.
  // trigger more action?.
  // this.recalculateIndexes();
  
};



BoxOfQuestions.prototype.recalculateIndexes = function(config){
  throw new Error("not yet implemented");
};


BoxOfQuestions.prototype.size = function(config){
  throw new Error("not yet implemented");
};


BoxOfQuestions.prototype.currQuestion = function(config){
  throw new Error("not yet implemented");
};


BoxOfQuestions.prototype.status = function(config){
  throw new Error("not yet implemented");
};


module.exports = BoxOfQuestions;

