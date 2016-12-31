# LearnWords2
A vocabulary learning component using the Leitner system

## Aim

This project supplies a JavaScript object which keeps a collection of vocabulary questions in a database. A vocabulary question may be picked at random and then depending on the answer a new date is noted for the question to be asked again. The time interval increases if the question has been answered correctly. To do this a step (or level) value is maintained for each question to determine the time period after which the question might be asked again.

This is known as [spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition).

![Leitner system](docs/230px-Leitner_system_alternative.svg.png)


This project aims at implementing the Non-GUI part of a system like 
https://github.com/e1r0nd/LearnWords

![learnwords2-layers](docs/LW2-context.png)


## Setup 

````	
git clone https://github.com/hhzl/LearnWords2.git
cd LearnWords2
npm install -g grunt-cli
npm install
````

Note that maybe you have to do

````
sudo npm install -g grunt-cli
sudo npm install
````

Running ``npm install`` or ``grunt build`` will generate a single JavaScript 
file (``dist/LW.js`` and ``dist/LW-debug.js``) of the entire library. 
To use the library you can include the path to this file in a script tag.

```
<script src="<path>/LW.js"></script>
```

The ``public/demo.html`` illustrates this.

## Intended usage

![learnwords2-layers](docs/learnwords2-layers.png)

- LWdb is the data access layer.
- LWBoxOfQuestions contains the application logic for a Leitner box


Code:

````JavaScript
"use strict";
var lw = function(){

	var db = LW.LWdb('learnWords');

	var box = LW.BoxOfQuestions(db);
         
        // configuration

        .......

        box.importFrom(wordlist);

	return box;
}();

````

The construction above (IIFE) returns the BoxOfQuestions object ready for use.


If there is no configuration of the db you could as well just do


````JavaScript
var lw = LW.BoxOfQuestions(LW.LWdb('learnWords'));
    lw.importFrom(wordlist);

````


Then access to everything goes through  ``lw.method()``.

````JavaScript

lw.importFrom(....);

lw.question();

lw.answer();
lw.answerOptions();

lw.moveQuestionBackwards();

lw.moveQuestionForward();

````

 
Note: If `lw.moveQuestionBackwards()` and `lw.moveQuestionForward()` are called repeatedly on the same question it has only an effect the first time. The next time `lw.question()` is called a new question is provided.

TODO: Add more usage examples.


## Specification and tests with Jasmine

### In the browser

- on the command line do

     ```
     grunt
     ```

- then a browser window will launch and bring you to a Jasmine test harness page
  which is usually [http://localhost:8000](http://localhost:8000)


### On the command line with node

     npm test


## Status

* Jasmine specs are set up and work both in the browser and on the command line.
* The LWdb (database layer) specification is set up and implemented with an MVP set of specs. 
* [release 0.2.2-beta](https://github.com/hhzl/LearnWords2/releases/tag/v0.2.2-beta) has a MVP implementation for the Leitner box and may be used for development work.



