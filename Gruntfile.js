/* LearnWords2 --  Gruntfile.js

Aim: 
   Define the tasks for the grunt task runner.

Date:
   2nd February 2017


Structure of the file:


  This file contains a single function which takes the 
  grunt task runner as an argument:


    function(grunt) {

        grunt.initConfig(aHugeConfigurationObjectForTheTasks);



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





*/





const fs = require('fs'), 
    path = require('path'), 
    browserify = require('browserify'),
    AnkiExport = require('anki-apkg-export').default,
    Jasmine = require('jasmine'),	
    LWcsvString2JSON = require("./src/LWcsvString2JSON"),
    LWjson2html = require("./src/LWjson2html");




module.exports = function(grunt) {

  var INPUT_DIR = 'data',
      WEB_ROOT = 'public',
      BUILD_DIR = path.join(WEB_ROOT,'js'),
      DIST_DIR = 'dist';
  
  // Project configuration.
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
    convertJson2html: {
      data: {
        src: path.join(INPUT_DIR,'json','**/*.json'),
        dest: path.join(WEB_ROOT,'data','html')
      }
    },

    convertjson2htmlSpelling: {
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

  // Load grunt tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Helper function for custom tasks

  function mkDirs(p){
    function f(dir,i){
      if(i < dir.length){
        var cwd = dir.slice(0,i+1);
        var dirPath = cwd.join(path.sep);
        if(/v0\.1\d\.\d+/.test(process.version)){
          // node version is 0.1x.x
          if(!fs.existsSync(dirPath)){
            fs.mkdirSync(dirPath);
          }else{
            //console.log(dirPath + " already exists");
          }
        }else{
          try{
            fs.accessSync(dirPath, fs.constants.F_OK);
            //console.log(dirPath + " already exists");
          }catch(e){
            // directory doesn't exist
            fs.mkdirSync(dirPath);
            console.log("mkdir " + dirPath);
          }
        }
        f(dir,i+1);
      }
    }
    f(p.split(path.sep),0);
  }



  // Custom tasks


  grunt.registerMultiTask('js','Builds bundle for JavaScript component', function(){

    var opts = this.options({ 
      debug: false 
    });
    
    console.log("debug: " + opts.debug);

    var output = this.files[0].dest;

    mkDirs(DIST_DIR);

    console.log("files:\t" + this.filesSrc.join('\n\t'));

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
    b.exclude('node-localstorage');
    b.ignore('fs');

    var done = this.async();
    var outputFile = fs.createWriteStream(output);
    outputFile.on('finish',function(){
      console.log('Wrote ' + output);
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
            console.log('Wrote ' + dest);    
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
  
          console.log("create deck: " + apkgName);

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
              console.log('Package has been generated: ' + dest);
            };
          };

          var p = apkg.save()
            .then(writeApk(dest))
            .catch(err => {
              console.log(err.stack || err); 
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





  grunt.registerMultiTask('convertJson2html','Converts JSON to HTML',function(){

    var html = fs.readFileSync('templates/report.html','utf-8');

    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];
        var data = fs.readFileSync(f,'utf-8');
        var json = JSON.parse(data);

        var tableString = LWjson2html(json);

        var dest = path.join(this.files[i].dest,path.basename(f,'.json')+'.html');
        mkDirs(path.dirname(dest));
        fs.writeFileSync(dest, html.replace('${table}',tableString));
        console.log(`Created ${dest}`);
      }
    }

  });








  grunt.registerMultiTask('convertjson2htmlSpelling','Converts JSON to a HTML presentation',function(){

    var html = fs.readFileSync('templates/learning-to-spell.html','utf-8');

    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];
        var data = fs.readFileSync(f,'utf-8');
        var json = JSON.parse(data);

        var slides = [];
        var slideNo = 1;
 
        json.forEach(function(element){
            for(var key in element){
               if(key == "picture"){

                  if (element.picture) {
                     slideNo += 1;
                     slides.push(`<div class="slide hidden" id="slide-${slideNo}">\n`);
                     slides.push('<section class="slide-content">\n');
                     slides.push(`<img src="${element.picture}" />\n`)
                     slides.push('</section>\n</div>\n\n');

                     for (var i=1, len=element.word.length; i<=len; i++) {
                     slideNo += 1;
                     slides.push(`<div class="slide hidden" id="slide-${slideNo}">\n`);
                     slides.push('<section class="slide-content">\n');
                     slides.push(`<img src="${element.picture}" />\n<br />`)
                     slides.push(`<span class="bigLetters">${(element.word).substring(0,i)}</span>\n`)
                     slides.push('</section>\n</div>\n\n');
                     }
                     slides.push('<!-- - - - - - - - - - - - - - - - - - - - - - - - -->\n\n');
                  };
               }   
            }  
            }  
        );

        slides = slides.join('');

        var dest = path.join(this.files[i].dest,path.basename(f,'.json')+'-spelling.html');
        mkDirs(path.dirname(dest));
        fs.writeFileSync(dest, html.replace('${slides}',slides));
        console.log(`Created ${dest}`);
      }
    }

  });





  // =========================================================================================
  // Definition of tasks as sequences of other tasks.
  // =========================================================================================


  // The following means that the json2html task is defined as the call to the
  // convertJson2html task followed by the copy:pictures task.
 
  grunt.registerTask('json2html',['convertJson2html','copy:pictures']);

  grunt.registerTask('json2htmlSpelling',['convertjson2htmlSpelling','copy:pictures']);

  grunt.registerTask('data',['clean:data','csv2json','csv2anki','json2html']);
  grunt.registerTask('build', ['clean:build','js']);
  grunt.registerTask('demo',['build','data','copy:data','copy:js']);
  grunt.registerTask('test', ['clean:test','jasmine']);

  // The default task is executed if grunt is called without giving a task name
  grunt.registerTask('default', ['demo','test','connect','watch']);

};
