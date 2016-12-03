# LearnWords2
A vocabulary learning component using the Leitner system

## Aim

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

## Intended usage

![learnwords2-layers](docs/learnwords2-layers.png)

- LWdb is the data access layer.
- LWBoxOfQuestions contains the application logic for a Leitner box


Code:

````JavaScript
"use strict";
var LW = function(){

	var db = new LWdb('learnWords');

	db.loadWords(....)

	var box = new LWBoxOfQuestions(db);

	return box
}();
````


The construction above is an IIFE.
This is a function without a name which is only run once, just after the definition.
The return value of the function is of interest. It is assigned to the global LW object.

So the access to everything goes through ``LW.subobject``  or ``LW.method()``.



 
TODO: add examples



## Specification and tests with Jasmine

### In the browser

- on the command line do

     grunt

- then open ``SpecRunner.html``


### On the command line with node

     npm test


## Status

* Jasmine specs are set up and work both in the browser and on the command line.
* The LWdb (database layer) specification is set up and implemented with an MVP set of specs. 
* [release 0.1beta](https://github.com/hhzl/LearnWords2/milestone/1) released.
* The [next release 0.2](https://github.com/hhzl/LearnWords2/milestone/2) will focus on the Leitner box.



