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

      var myApp = new LW.BoxWithQuestions('learnwords', {"loadWordsFrom" : "aRelativePathToJSONfile"});

or

    var myApp = new LW.BoxWithQuestions('learnwords', {"loadWordsFrom" : "aRelativePathToJSONfile", 
                                                "reinitializeDB" : "true"});

or

    var myApp = new LW.BoxWithQuestions({"dbName": "John-learnwords", 
                                  "loadWordsFrom" : "aRelativePathToJSONfile", 
                                  "reinitializeDB" : "true"});



## Status

* Jasmine specs have started, see branch [JasmineInBrowser](https://github.com/hhzl/LearnWords2/tree/JasmineInBrowser), run ``SpecRunner.html``
* Work towards [release 0.1](https://github.com/hhzl/LearnWords2/milestone/1) in progress. The release will be about specification set up and some first specs implemented. No fully working code.
* So the project has just started and is not ready for any use.


