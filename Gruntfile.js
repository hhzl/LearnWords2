var fs = require('fs'), 
    path = require('path'), 
    browserify = require('browserify'),
    Jasmine = require('jasmine'),
    Papa = require('papaparse');

module.exports = function(grunt) {

  var WEB_ROOT = 'public',
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
    csv2json: {
      data: {
        src: path.join('data','csv','**/*.csv'),
        dest: path.join('data','json')
      }
    },
    "jasmine":{
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
        src: path.join('data','json','**'),
        dest: WEB_ROOT
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

  // Custom tasks

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
            console.log(dirPath + " already exists");
          }
        }else{
          try{
            fs.accessSync(dirPath, fs.constants.F_OK);
            console.log(dirPath + " already exists");
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
        var data = fs.readFileSync(f,'utf-8');
        var result = Papa.parse(data,{
          dynamicTyping: true,
          encoding: 'utf8',
          skipEmptyLines: true
        });
        if(result.errors.length == 0){
          var json = [];
          for(var j = 1; j < result.data.length; j++){
            var obj = {};
            for(var k = 0; k < result.data[0].length; k++){
              if(k < result.data[j].length){
                // first row is header
                obj[result.data[0][k]] = result.data[j][k];
              }
            }
            json.push(obj);
          }
          var dest = path.join(this.files[i].dest,path.basename(f,'.csv')+'.json');
          mkDirs(this.files[i].dest);
          fs.writeFileSync(dest,JSON.stringify(json),{
            encoding:'utf8',
            flags:'w+'
          });
          console.log('Wrote ' + dest);    
        }else{
          console.log(result.errors);
        }
      }
    }

  });

  grunt.registerTask('build', ['clean:build','js']);
  grunt.registerTask('demo',['build','csv2json','copy']);
  grunt.registerTask('test', ['clean:test','jasmine']);

  // Default task(s).
  grunt.registerTask('default', ['demo','test','connect','watch']);

};
