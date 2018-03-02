# LearnWords2
A vocabulary learning component for flash cards using the Leitner system

## Aim

The aim of the project is twofold
1. Provide a JavaScript library which keeps a collection of vocabulary questions in a database. 
2. Provide data conversion and report functions for lists of words to learn.

It does not provide a GUI though it has a demo how a GUI could be constructed. 

A vocabulary question may be picked at random and then depending on the answer a new date is noted for the question to be asked again. The time interval increases if the question has been answered correctly. To do this a step (or level) value is maintained for each question to determine the time period after which the question might be asked again.

This is known as [spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition).

HTML and LibreOffice Draw reports are provided for flash cards to be printed (experimental feature).

![Leitner system](docs/230px-Leitner_system_alternative.svg.png)


![learnwords2-layers](docs/LW2-context.png)


## Setup 


The command ``grunt-cli`` is a prerequisite.

Global installation is done with

````	
npm install -g grunt-cli
````


Installation of LearnWords2

````	
git clone https://github.com/hhzl/LearnWords2.git
cd LearnWords2
npm install
grunt
````


Then change into the ``LearnWords2`` directory and do

````
npm install
````


Draft of more documentation [here](https://github.com/hhzl/LearnWords2/blob/master/docs/Developer_notes.md#2018-01-30). 


Note: 
The ``grunt`` command generates the files in the ``dist`` directory. These JavaScript files are the debug and minified versions of the LearnWords2 library (``dist/LW.js`` and ``dist/LW-debug.js``). They are copied to the ``public/js`` directory so the demo and Jasmine tests are using the "latest version" (i.e. derived from the JavaScript in ``src``) of the library. The directory `public/data/json` contains the output data to be used by the library.



____
To use the library:

```
<script src="<path>/LW.js"></script>
```
The file ``public/demo.html`` illustrates this.


## API

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


## Input data

Input data are CSV files with words and pictures in the directory `data/csv`.


## Export data

Export data in as HTML report and Anki database are generated and put into `public/data`.
The data to be used by the library is in `public/data/json`.



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


## Credits

Anatol Marezhanyi, for the https://github.com/e1r0nd/LearnWords project
which implements data storage, Leitner box mechanism and a GUI.

The project here is based on ideas and originally on code from LearnWords but
1. implements the non-gui part only to allow other projects to use a library
2. is rewritten to a large extent
3. adds data conversion functions for word list preparation and production of printed flash cards.


## Status

* Jasmine specs are set up and work both in the browser and on the command line.
* The LWdb (database layer) specification is set up and implemented with an MVP set of specs. 
* [release 0.2.2-beta](https://github.com/hhzl/LearnWords2/releases/tag/v0.2.2-beta) has a MVP implementation for the Leitner box and may be used for development work.
* Documentation [update](https://github.com/hhzl/LearnWords2/blob/master/docs/Developer_notes.md) in progress
* release 0.3.1 will come soon.



