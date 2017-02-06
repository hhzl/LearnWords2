/* LearnWords2 --  Gruntfile.js

Aim: 
   Define the tasks for the grunt task runner.
   http://gruntjs.com/

Date:
   3rd February 2017




Contents of the file:

    - The "wrapper" function
    - Project and task configuration
    - Loading Grunt plugins and tasks
    - Custom tasks



Structure of the file:


  This file contains a single function which takes the 
  grunt task runner as an argument:


    function(grunt) {

        grunt.initConfig(aHugeConfigurationObjectForTheTasks);
        // When a task is run, Grunt looks for its configuration 
        // under a property of the same name.


        // load tasks from published grunt modules, 
        // for example the task 'grunt-contrib-clean' 
        // which cleans up directories
    
        grunt.loadNpmTasks('grunt-contrib-clean');
        ... load more modules



        // define custom tasks.
        grunt.registerMultiTask('js','Builds bundle for JavaScript component LW.js', function(){
          ...
        };
    
        ... more custom tasks



        // define tasks as a sequence of other tasks
        grunt.registerTask('build', ['clean:build','js']);
        ...

    }




Available tasks
                clean  Clean files and folders. *                              
               jshint  Validate files with JSHint. *                           
              connect  Start a connect web server. *                           
                 copy  Copy files. *                                           
                watch  Run predefined tasks whenever watched files change.     
                   js  Builds bundle for JavaScript component *                
              jasmine  Creates bundle for Jasmine tests *                      
             csv2json  Converts CSV to JSON *                                  
             csv2anki  Converts CSV to Anki *                                  
            json2yaml  Converts JSON to YAML *                                 
        json2htmlList  Converts JSON to HTML *                                 
    json2htmlSpelling  Converts JSON to a HTML presentation with spelling demo *
 
           htmlreport  Alias for "json2htmlList", "copy:pictures" tasks.       
 spellingpresentation  Alias for "json2htmlSpelling", "copy:pictures" tasks.   
                 data  Alias for "clean:data", "csv2json", "csv2anki",         
                       "htmlreport" tasks.                                     
                build  Alias for "clean:build", "jshint:es5", "js" tasks.      
                 demo  Alias for "build", "data", "copy:data", "copy:js" tasks.
                 test  Alias for "clean:test", "jasmine" tasks.                
              default  Alias for "demo", "test", "connect", "watch" tasks.     

Tasks run in the order specified. Arguments may be passed to tasks that accept
them by using colons, like "lint:files". Tasks marked with * are "multi tasks"
and will iterate over all sub-targets if no argument is specified.

The list of available tasks may change based on tasks directories or grunt
plugins specified in the Gruntfile or via command-line options.

For more information, see http://gruntjs.com/




*/





const fs = require('fs'), 
    path = require('path'), 
    browserify = require('browserify'),
    AnkiExport = require('anki-apkg-export').default,
    Jasmine = require('jasmine'),	
    yaml = require('js-yaml'),
    LWcsvString2JSON = require("./src/data-conversion/LWcsvString2JSON"),
    LWjson2html = require("./src/data-conversion/LWjson2html"),
    LWjson2htmlSlides = require("./src/data-conversion/LWjson2htmlSlides");







module.exports = function(grunt) {

  var INPUT_DIR = 'data',
      WEB_ROOT = 'public',
      BUILD_DIR = path.join(WEB_ROOT,'js'),
      DIST_DIR = 'dist';



  // =========================================================  
  // Project configuration.
  // =========================================================  

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      options: {
        force: true
      },
      data: [path.join(WEB_ROOT,'data')],
      build: [path.join(DIST_DIR,'**')],
      js: [path.join(BUILD_DIR,'**')],
      test: [path.join(BUILD_DIR,'jasmine-bundle.js')]
    },
    jshint: {
      es5: ['src/*.js'],
      es6: ['Gruntfile.js', 'src/data-conversion/*.js']
    },
    csv2anki: {
      data: {
        src: path.join(INPUT_DIR,'csv','**/*.csv'),
        dest: path.join(WEB_ROOT,'data','anki')
      }
    },
    csv2json: {
      data: {
        src: path.join(INPUT_DIR,'csv','**/*.csv'),
        dest: path.join(INPUT_DIR,'json')
      }
    },
    json2yaml: {
      data: {
        src: path.join(INPUT_DIR,'json','**/*.json'),
        dest: path.join(WEB_ROOT,'data','yaml')
      }
    },
    json2htmlList: {
      data: {
        src: path.join(INPUT_DIR,'json','**/*.json'),
        dest: path.join(WEB_ROOT,'data','html')
      }
    },

    json2htmlSpelling: {
      data: {
        src: path.join(INPUT_DIR,'json','**/*.json'),
        dest: path.join(WEB_ROOT,'data','html')
      }
    },


    jasmine:{
      browser: {
        src: path.join('spec','support','Jasmine.json'),
        dest: path.join(BUILD_DIR,'jasmine-bundle.js')
      }
    },
    js:{
      dist: {
        options:{
          debug: false
        },
        src: [path.join('src','index.js')],
        dest: path.join(DIST_DIR,'LW.js')
      },
      debug: {
        options: {
          debug: true
        },
        src: [path.join('src','index.js')],
        dest: path.join(DIST_DIR,'LW-debug.js')
      }
    },
    watch:{
      options: {
        livereload: true
      },
      test: {
        files: [path.join('src','**','*.js'),path.join('spec','**','*.js')],
        tasks: ['build','test']
      },
      html: {
        files: [path.join(WEB_ROOT,'**','*.html')]
      }
    },
    connect:{
      test: {
        options: {
          base: {
            path: WEB_ROOT,
            options: {
              index: 'SpecRunner.html'
            }
          },
          hostname: '*',
          livereload: true,
          open: true,
          useAvailablePort: true,
        }
      },
      demo: {
        options: {
          base: {
            path: WEB_ROOT,
            options: {
              index: 'demo.html'
            }
          },
          hostname: '*',
          livereload: true,
          open: true,
          useAvailablePort: true,
        }
      }
    },
    copy: {
      data: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: path.join(INPUT_DIR,'json','**'),
        dest: path.join(WEB_ROOT,'data','json')
      },
     pictures: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: path.join(INPUT_DIR,'pictures','c10','**'),
        dest: path.join(WEB_ROOT,'data','html','c10')
      },
      js: {
        expand: true,
        flatten: true,
        src: path.join(DIST_DIR,'*'),
        dest: path.join(WEB_ROOT,'js')
      }
    }
  });



  // ====================================================================
  // Load grunt tasks
  // ====================================================================
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');




  // Helper function for custom tasks

var mkDirs = function (p) {

    "use strict";

    function f(dir,i){
      if(i < dir.length){
        var cwd = dir.slice(0,i+1);
        var dirPath = cwd.join(path.sep);
        if(/v0\.1\d\.\d+/.test(process.version)){
          // node version is 0.1x.x
          if(!fs.existsSync(dirPath)){
            fs.mkdirSync(dirPath);
          }else{
            grunt.verbose.write(dirPath + " already exists");
          }
        }else{
          try{
            fs.accessSync(dirPath, fs.constants.F_OK);
            grunt.verbose.write(dirPath + " already exists");
          }catch(e){
            // directory doesn't exist
            fs.mkdirSync(dirPath);
            grunt.verbose.write("mkdir " + dirPath);
          }
        }
        f(dir,i+1);
      }
    }
    f(p.split(path.sep),0);
  }






  // ================================================================================
  // Custom tasks
  // ================================================================================


  grunt.registerMultiTask('js','Builds bundle for JavaScript component', function(){

    var opts = this.options({ 
      debug: false 
    });
    
    grunt.verbose.write("debug: " + opts.debug);

    var output = this.files[0].dest;

    mkDirs(DIST_DIR);

    grunt.verbose.write("files:\t" + this.filesSrc.join('\n\t'));

    var b = browserify({
      basedir: '.',
      entries: this.filesSrc,
      noParse: [],
      browserField: false,
      debug: opts.debug,
      standalone: 'LW'
    });

    // prevents file from being loaded into bundle
    b.exclude("node-localstorage");
    b.ignore('fs');

    var done = this.async();
    var outputFile = fs.createWriteStream(output);
    outputFile.on('finish',function(){
      grunt.verbose.write('Wrote ' + output);
      done();
    });
    b.bundle().pipe(outputFile);    

  });










  grunt.registerMultiTask('jasmine','Creates bundle for Jasmine tests',function(){

    var output = this.files[0].dest;
    var config = this.filesSrc[0];

    grunt.verbose.write("config: " + config);

    mkDirs(path.dirname(output));

    var runner = new Jasmine();
    runner.loadConfigFile(config);

    var entries = runner.helperFiles.concat(runner.specFiles);

    grunt.verbose.write("files:\t" + entries.join('\n\t'));

    var b = browserify({
      basedir: '.',
      entries: entries,
      noParse: [],
      browserField: false,
      debug: true
    });

    // prevents file from being loaded into bundle
    b.exclude('node-localstorage');
    b.ignore('fs');

    var done = this.async();
    var outputFile = fs.createWriteStream(output);
    outputFile.on('finish',function(){
      grunt.verbose.write('Wrote ' + output);
      done();
    });
    b.bundle().pipe(outputFile);    

  });










  grunt.registerMultiTask('csv2json','Converts CSV to JSON',function(){

    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];

        var aCSVstring = fs.readFileSync(f,'utf-8');

        var arrayOfObjects = LWcsvString2JSON(aCSVstring);
       
        if (arrayOfObjects.length !== 0) {
    
            var dest = path.join(this.files[i].dest,path.basename(f,'.csv')+'.json');
            mkDirs(this.files[i].dest);

            fs.writeFileSync(dest,JSON.stringify(arrayOfObjects),{
                encoding:'utf8',
                flags:'w+'
              });
            grunt.verbose.write('Wrote ' + dest);    
        }
      }
    }
  });






  grunt.registerMultiTask('csv2anki','Converts CSV to Anki',function(){

    var done = this.async();

    var promises = [];
    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];
        var aCSVstring = fs.readFileSync(f,'utf-8');

        var arrayOfObjects = LWcsvString2JSON(aCSVstring);

        if (arrayOfObjects.length !== 0) {
          var apkgName = path.basename(f,'.csv');
          var apkg = new AnkiExport(apkgName);
  
          grunt.verbose.write("create deck: " + apkgName);

          for(var j = 1; j < arrayOfObjects.length; j++){
            var wordObj = arrayOfObjects[j];
            var front = wordObj.word;
            var back = wordObj.translate;
            var tags = wordObj.tags;
            var tagsObj = {};
            if(tags && tags.length > 0){
              tagsObj.tags = tags.trim().split(" ");
            }
            apkg.addCard(front, back, tagsObj);
          }

          var dest = path.join(this.files[i].dest,path.basename(f,'.csv')+'.apkg');

          var writeApk = function(dest){
            return function(zip){
              mkDirs(path.dirname(dest));
              fs.writeFileSync(dest, zip, 'binary');
              grunt.verbose.write('Package has been generated: ' + dest);
            };
          };

          var p = apkg.save()
            .then(writeApk(dest))
            .catch(err => {
              grunt.log.write(err.stack || err); 
            });
          promises.push(p);

        }
      }
    }

    // wait until all *.apk files have been written to end task
    Promise.all(promises).then(
      function(zips){
        done();
      },
      function(){
        console.err(arguments);
      });

  });









  grunt.registerMultiTask('json2yaml','Converts JSON to YAML',function(){

    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];
        var aDataString = fs.readFileSync(f,'utf-8');
        var jsonObject = JSON.parse(aDataString);

        var yamlFileHeader = '---\n';
        var resultString = yamlFileHeader + yaml.safeDump(jsonObject);

        var fileName = path.basename(f,'.json');
        var dest = path.join(this.files[i].dest,fileName+'.yml');
 
        mkDirs(path.dirname(dest));
        fs.writeFileSync(dest, resultString);

        grunt.verbose.write(`Created ${dest}`);
      }
    }

  });











  grunt.registerMultiTask('json2htmlList','Converts JSON to HTML',function(){

    var html = fs.readFileSync('templates/report.html','utf-8');

    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];
        var data = fs.readFileSync(f,'utf-8');
        var json = JSON.parse(data);

        var tableString = LWjson2html(json);

        var basename = path.basename(f,'.json');
        var dest = path.join(this.files[i].dest,basename+'.html');
        mkDirs(path.dirname(dest));

        var report  = html.replace('${wordListName}',basename);
        fs.writeFileSync(dest, report.replace('${table}',tableString));

        grunt.verbose.write(`Created ${dest}`);
      }
    }

  });








  grunt.registerMultiTask('json2htmlSpelling','Converts JSON to a HTML presentation with spelling demo',function(){

    var html = fs.readFileSync('templates/learning-to-spell.html','utf-8');

    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];
        var data = fs.readFileSync(f,'utf-8');
        var json = JSON.parse(data);

        var slides = LWjson2htmlSlides(json);

        var dest = path.join(this.files[i].dest,path.basename(f,'.json')+'-spelling.html');
        mkDirs(path.dirname(dest));
        fs.writeFileSync(dest, html.replace('${slides}',slides));
        grunt.verbose.write(`Created ${dest}`);
      }
    }

  });







  // =========================================================================================
  // Definition of tasks as sequences of other tasks.
  // =========================================================================================


  // The following means that the htmlreport task is defined as the call to the
  // convertJson2html task followed by the copy:pictures task.
 
  grunt.registerTask('htmlreport',['json2htmlList','copy:pictures']);

  grunt.registerTask('spellingpresentation',['json2htmlSpelling','copy:pictures']);

  grunt.registerTask('data',['clean:data','csv2json','csv2anki','htmlreport']);
  grunt.registerTask('build', ['clean:build','jshint:es5','js']);
  grunt.registerTask('demo',['build','data','copy:data','copy:js']);
  grunt.registerTask('test', ['clean:test','jasmine']);

  // The default task is executed if grunt is called without giving a task name
  grunt.registerTask('default', ['demo','test','connect','watch']);

};
