var fs = require('fs');
var path = require('path');

var browserify = require('browserify');
var Jasmine = require('jasmine');

module.exports = function(grunt) {

  var BUILD_DIR = 'build';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      options: {
        force: true
      },
      test: [BUILD_DIR + '/**']
    },
    watch:{
      options: {
        livereload: true,
      },
      test: {
        files: ['src/**/*.js','spec/**/*.js'],
        tasks: ['test']
      }
    }
  });

  // Load grunt tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Custom tasks

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

  grunt.registerTask('test',function(){

    var output = path.join(BUILD_DIR,'jasmine-app-bundle.js');
    var config = path.join('spec','support','jasmine.json');

    mkDirs(path.dirname(output));

    var runner = new Jasmine();
    runner.loadConfigFile(config);

    var b = browserify({
      basedir: '.',
      entries: runner.helperFiles.concat(runner.specFiles),
      noParse: [],
      browserField: false,
      debug: true
    });

    var done = this.async();
    var outputFile = fs.createWriteStream(output);
    outputFile.on('finish',function(){
      console.log('\tWrote ' + output);
      done();
    });
    b.bundle().pipe(outputFile);    

  });

  // Default task(s).
  grunt.registerTask('default', ['clean:test','test','watch']);

};
