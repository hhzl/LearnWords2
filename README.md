# LearnWords2
A vocabulary learning component using the Leitner system

## Aim

This project aims at implementing the Non-GUI part of a system like 
https://github.com/e1r0nd/LearnWords

## Setup done so far

    npm install
    npm test

added .gitignore file.

## Intended usage

````JavaScript
var LW = function(){

	var db = new LWdb('learnWords');

	db.loadWords(....)

	var box = new LWBoxOfQuestions(db);

	return box
}();
````

- LWdb is the data access layer.
- LWBoxOfQuestions contains the application logic for a Leitner box



## Status

* Jasmine specs have started, see branch [JasmineInBrowser](https://github.com/hhzl/LearnWords2/tree/JasmineInBrowser), run ``SpecRunner.html``
* Work towards [release 0.1](https://github.com/hhzl/LearnWords2/milestone/1) in progress. The release will be about the LWdb specification set up and a MVP set of specs implemented. 
* The project is not ready for use.


