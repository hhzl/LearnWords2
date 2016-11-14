"use strict";

var LWdb = require('./LWdb');

function BoxOfQuestions(name) {
	this.name = name;
	this.db = new LWdb(name);
}


BoxOfQuestions.prototype.config = function(config){
  throw new Error("not yet implemented");
};


BoxOfQuestions.prototype.config = function(config){
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