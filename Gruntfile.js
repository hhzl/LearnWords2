var fs = require('fs');
var path = require('path');

var browserify = require('browserify');
var Jasmine = require('jasmine');

module.exports = function(grunt) {

  var BUILD_DIR = 'build';
  var DIST_DIR = 'dist';
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      options: {
        force: true
      },
      build: [path.join(DIST_DIR,'**')],
      test: [path.join(BUILD_DIR,'**')]
    },
    "jasmine":{
      browser: {
        src: path.join('spec','support','jasmine.json'),
        dest: path.join(BUILD_DIR,'jasmine-bundle.js')
      }
    },
    js:{
      dist: {
        options:{
          debug: false
        },
        src: [path.join("src","**.js")],
        dest: path.join(DIST_DIR,"LW-lib.js")
      },
      debug: {
        options: {
          debug: true
        },
        src: [path.join("src","**.js")],
        dest: path.join(DIST_DIR,"LW-lib-debug.js")
      }
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

  grunt.registerMultiTask('js','Builds bundle for JavaScript component', function(){

    var opts = this.options({ 
      debug: false 
    });
    
    console.log("debug: " + opts.debug);

    //var output = path.join(DIST_DIR,'app-bundle'+ (opts.debug ? '-debug' : '')+'.js');
    var output = this.files[0].dest;

    mkDirs(DIST_DIR);

    console.log("files:\t" + this.filesSrc.join('\n\t'));

    var b = browserify({
      basedir: '.',
      entries: this.filesSrc,
      noParse: [],
      browserField: false,
      debug: opts.debug
    });

    // prevents file from being loaded into bundle
    b.external("node-localstorage");

    var done = this.async();
    var outputFile = fs.createWriteStream(output);
    outputFile.on('finish',function(){
      console.log('Wrote ' + output);
      done();
    });
    b.bundle().pipe(outputFile);    

  });

  grunt.registerMultiTask('jasmine','Creates bundle for Jasmine tests',function(){

    var output = this.files[0].dest;
    var config = this.filesSrc[0];

    console.log("config: " + config);

    mkDirs(path.dirname(output));

    var runner = new Jasmine();
    runner.loadConfigFile(config);

    var entries = runner.helperFiles.concat(runner.specFiles);

    console.log("files:\t" + entries.join('\n\t'));

    var b = browserify({
      basedir: '.',
      entries: entries,
      noParse: [],
      browserField: false,
      debug: true
    });

    // prevents file from being loaded into bundle
    b.external("node-localstorage");

    var done = this.async();
    var outputFile = fs.createWriteStream(output);
    outputFile.on('finish',function(){
      console.log('Wrote ' + output);
      done();
    });
    b.bundle().pipe(outputFile);    

  });

  grunt.registerTask('build', ['clean:build','js']);
  grunt.registerTask('test', ['clean:test','jasmine']);

  // Default task(s).
  grunt.registerTask('default', ['build','test','watch']);

};
