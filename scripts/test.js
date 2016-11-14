var fs = require('fs');
var path = require('path');

var browserify = require('browserify');
var Jasmine = require('jasmine');


/**
 * Creates directories in p if they don't exist
 */
function mkDirs(p){

  function f(dir,i){
    if(i < dir.length){
      var cwd = dir.slice(0,i+1);
      try{
        fs.accessSync(cwd.join(path.sep));
      }catch(e){
        // directory doesn't exist
        fs.mkdirSync(cwd.join(path.sep));
        console.log("mkdir " + cwd.join(path.sep));
      }
      f(dir,i+1);
    }
  }
  f(p.split(path.sep),0);
}



/**************************************************************************
 * Main
 **************************************************************************/

// output of bundle
var output = path.join('build','jasmine-app-bundle.js');
mkDirs(path.dirname(output));
try{
  fs.accessSync(output);
  // file exists so delete it
  fs.unlink(output);
}catch(e){}

var runner = new Jasmine();
runner.loadConfigFile('spec/support/jasmine.json');


// runs browserify on appEntries
var b = browserify({
  basedir: './..',
  entries: runner.helperFiles.concat(runner.specFiles),
  noParse: [],
  browserField: false,
  debug: true
});

// create output file for browserify
var outputFile = fs.createWriteStream(output);
outputFile.on('finish',function(){
  
  console.log(new Date().toISOString() + " - Wrote new bundle to " + output);
  // executes Jasmine tests after file has been written
  runner.execute();
});
b.bundle().pipe(outputFile);