var BoxOfQuestions = require('../../src/BoxOfQuestions');

xdescribe("BoxOfQuestions", function() {
    
  beforeEach(function() {
    questions  = new BoxOfQuestions("LWquestions");
  });


  it("should be able to create a BoxOfQuestions object", function() {

    expect(questions).not.toBe(null);
    expect(questions).not.toBe(undefined);

    expect(questions).toBeObject();

  });


  it("should be able to process configuration information", function() {
    // the configuration 
    var aConfigObj = {"algorithm": "Leiter", "boxes": 5};
    questions.config(aConfigObj);     

    // expect code here
    fail("Implement me!");
  });


  it("should be able to load questions", function() {
    var n = questions.size();
    // FIXME: pass data
    var arrOfQuestions = [];
    questions.addQuestions(arrOfQuestions);
  
    expect(questions.size()).toBe(n + arrOfQuestions.length);
    fail("Implement me!");

  });


  it("should be able to choose a next question, give options for answers and process the answer", function() {
    var q, a, opt, aChoice;

    q = questions.currQuestion();
    a = questions.currAnswer();
    opt = questions.currAnswerOptions(); // includes the correct answer
   
    questions.processAnswer(aChoice);  // after this there will be a new current question.

    // add expect code here
    fail("Implement me!");

  });


  it("should be able to give status information", function() {
    // the configuration 
  
    var r = questions.status();
   
    // add expect code here    
    fail("Implement me!");

  });

});
