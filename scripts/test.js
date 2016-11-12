var Jasmine = require('jasmine');

// executes Jasmine tests
var runner = new Jasmine();
runner.loadConfigFile('spec/support/jasmine.json');
runner.execute();