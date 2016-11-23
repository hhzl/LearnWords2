var fs = require('fs');
var path = require('path');

var browserify = require('browserify');
var Jasmine = require('jasmine');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.event.on('watch', function(action, filepath) {
    grunt.config('jshint.all.src', filepath);
  });

  grunt.registerTask('test',function(){

    var output = path.join('build','jasmine-app-bundle.js');
    var config = path.join('spec','support','LearnWords2.json');

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
  grunt.registerTask('default', ['test','watch']);

};