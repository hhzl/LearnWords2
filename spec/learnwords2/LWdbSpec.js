// test data
var wordList = [
  {
    "word": "apple",
    "translate": "der Apfel"
  },
  {
    "word": "pear",
    "translate": "die Birne"
  },
  {
    "word": "lemon",
    "translate": "die Zitrone"
  },
  {
    "word": "banana",
    "translate": "die Banane"
  },
  {
    "word": "orange",
    "translate": "die Orange"
  },
  {
    "word": "strawberry",
    "translate": "die Erdbeere"
  },
  {
    "word": "raspberry",
    "translate": "die Himbeere"
  },
  {
    "word": "blueberry",
    "translate": "die Brombeere"
  },
  {
    "word": "guava",
    "translate": "die Guava"
  },
  {
    "word": "pawpaw",
    "translate": "die Papaya"
  }
];


var aWord =   {
    "word": "melon",
    "translate": "die Melone"
  };

var anotherWord =
  {
    "word": "apricot",
    "translate": "die Aprikose"
  }
;



describe("LearnWords2 - App model", function() {

describe("BoxOfQuestions", function() {
  var db;


  beforeEach(function() {
    questions  = new BoxOfQuestions("LWquestions");
  });


  it("should be able to create a BoxOfQuestions object", function() {

    expect(questions).not.toBe(null);
    expect(questions).not.toBe(undefined);

      });


   it("should be able to process configuration information", function() {
    // the configuration 
    var aConfigObj = {"algorithm": "Leiter", "boxes": 5};
    questions.config(aConfigObj);     
    // add expect code here    


   });


  it("should be able to load questions", function() {
    var n = questions.size();
    questions.addQuestions(arrOfQuestions);
    
    expect(questions.size).not.toBe(n + arrOfQuestions.size);
    });



  it("should be able to choose a next question, give options for answers and process the answer", function() {
    var q, a, opt, aChoice;

    q = questions.currQuestion();
    a = questions.currAnswer();
    opt = questions.currAnswerOptions(); // includes the correct answer
   
    questions.processAnswer(aChoice);  // after this there will be a new current question.
    

    // add expect code here
    });


   it("should be able to give status information", function() {
    // the configuration 
    
    var r = questions.status();
     
    // add expect code here    


   });




});



describe("Database LWdb", function() {
  var db;


  beforeEach(function() {
    // first create an instance in order to clear all words
    // this should probably later go to 'tear down'
    db = new LWdb("LearnWords");
    db.removeWords();

    db = new LWdb("LearnWords");
  });


  it("should be able to create a DB", function() {

    expect(db).not.toBe(null);
    expect(db).not.toBe(undefined);

    expect(db.name).toBe("LearnWords");
  });


  it("should be able to answer if persistent storage is available", function() {
 
    expect(db.persistenStorageOK()).not.toBe(false);

  });


 it("should be able to reinitialize the persistent storage", function() {
    db.initialize();
    expect(db.numberOfWords).toBe(10);
  });



describe("LWdb deals with words", function() {

  it("should be able to answer the number of words", function() {
 
    expect(db.numberOfWords()).not.toBe(null);
    expect(db.numberOfWords()).not.toBe(undefined);

  });


  it("should be able to store a new word", function() {
    // Inserts a new document, or new version of an existing document
    var n = db.numberOfWords();

    db.putWord(11,aWord);
    expect(db.numberOfWords()).toBe(n+1);

  });


  it("should be able to get a word", function() {
    var theKeyOfaWord = 11;
    db.putWord(11,aWord);
    var r = db.getWord(theKeyOfaWord);
    console.log(r);
    expect(r.word).toBe("melon");
  });


 it("should be able to answer a list of all keys of all words", function() {
    var r = db.keysOfAllWords();
    expect(r.length).toBe(db.numberOfWords());

  });


 it("should be able to answer a list of all words", function() {
    var r = db.allWords();
    expect(r.length).toBe(db.numberOfWords());
  });


 it("should be able to import words", function() {
    db.resetStorage();
    expect(db.numberOfWords).toBe(0);
    db.importFrom(wordlist);
    expect(db.numberOfWords).toBe(10);
  });


});



describe("LWdb deals with settings", function() {


 it("should be able to answer settings", function() {
    var settings = db.getSettings();
    console.log('settings', settings);
    expect(settings).not.toBe(null);
  });


 it("should be able to store settings", function() {
    // test needs improvement
    var settings = db.getSettings();
    settings.anAttribute2 = "something";
    db.storeSettings(settings);
    settings = db.getSettings();
    expect(settings.anAttribute2).toBe("something");
  });

});





});
});
