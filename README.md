# LearnWords2
A vocabulary learning component using the Leitner system

## Aim

This project aims at implementing the Non-GUI part of a system like 
https://github.com/e1r0nd/LearnWords

## Setup for branch 'JasmineInBrowser'

````	
git clone https://github.com/hhzl/LearnWords2.git
cd LearnWords2
npm install
npm install -g grunt-cli
````

Note that maybe you have to do

    sudo npm install -g grunt-cli


## Intended usage

````JavaScript
"use strict";
var LW = function(){

	var db = new LWdb('learnWords');

	db.loadWords(....)

	var box = new LWBoxOfQuestions(db);

	return box
}();
````

- LWdb is the data access layer.
- LWBoxOfQuestions contains the application logic for a Leitner box

The construction above is an IIFE.
This is a function without a name which is only run once, just after the definition.
The return value of the function is of interest. It is assigned to the global LW object.

So the access to everything goes through ``LW.subobject``  or ``LW.method()``.
 
TODO: add examples



## Specification and tests with Jasmine

### In the browser

- on the command line do

     npm test

- then open ``SpecRunner.html``


### On the command line with node

     clear
     node scripts/test.js


## Status

* Jasmine specs are set up.
* Work towards [release 0.1](https://github.com/hhzl/LearnWords2/milestone/1) in progress. 
* The LWdb specification set is mostly set up and a MVP set of specs implemented. 
* The project will soon be ready for use.

