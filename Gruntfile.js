const fs = require('fs'), 
    path = require('path'), 
    browserify = require('browserify'),
    AnkiExport = require('anki-apkg-export').default,
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
    csv2anki: {
      data: {
        src: path.join('data','csv','**/*.csv'),
        dest: path.join(WEB_ROOT,'data','anki')
      }
    },
    csv2json: {
      data: {
        src: path.join('data','csv','**/*.csv'),
        dest: path.join('data','json')
      }
    },
    convertJson2html: {
      data: {
        src: path.join('data','json','**/*.json'),
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
        src: path.join('data','json','**'),
        dest: WEB_ROOT
      },
      pictures: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: path.join('data','pictures','b1','**'),
        dest: path.join(WEB_ROOT,'data','html','b1')
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
          // result.data is array of arrays
          // row with index 0 is header
          var arrayOfObjects = [];
          var propertyName;
          for(var j = 1; j < result.data.length; j++){
            var obj = {};
            for(var k = 0; k < result.data[0].length; k++){
              if(k < result.data[j].length){
                propertyName = result.data[0][k];
                obj[propertyName] = result.data[j][k];
              }
            }
            arrayOfObjects.push(obj);
          }
          var dest = path.join(this.files[i].dest,path.basename(f,'.csv')+'.json');
          mkDirs(this.files[i].dest);
          fs.writeFileSync(dest,JSON.stringify(arrayOfObjects),{
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

  grunt.registerMultiTask('csv2anki','Converts CSV to Anki',function(){

    var done = this.async();

    var promises = [];
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
          // result.data is array of arrays
          // row with index 0 is header
          var arrayOfObjects = [];
          var propertyName;
          for(var j = 1; j < result.data.length; j++){
            var obj = {};
            for(var k = 0; k < result.data[0].length; k++){
              if(k < result.data[j].length){
                propertyName = result.data[0][k];
                obj[propertyName] = result.data[j][k];
              }
            }
            arrayOfObjects.push(obj);
          }

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

        }else{
          console.log(result.errors);
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

    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];
        var data = fs.readFileSync(f,'utf-8');
        var json = JSON.parse(data);

        var html = ['<!DOCTYPE html>'];
	html.push(`
<html>
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<style>
</style>
</head>
<body>
<table>
`);

        html.push('<thead><tr>');
        for(var key in json[0]){
          html.push('<th>'+ key + '</th>');
        }
        html.push('</tr></thead>');
        

        html.push('<tbody>');

        json.forEach(function(element){
            html.push('<tr>');
            for(var key in element){
               if(key == "picture"){
                  if (element.picture) {html.push(`<td><img src="${element.picture}" /></td>`)}
                  else {html.push('<td></td>')};
               }else{
                  html.push('<td>'+ element[key] + '</td>');
               }

            }
            html.push('</tr>\n')}
        );

        html.push('</tbody>');

        html.push(`</table>
</body>
</html>
`);

        var dest = path.join(this.files[i].dest,path.basename(f,'.json')+'.html');
        mkDirs(path.dirname(dest));
        fs.writeFileSync(dest, html.join(''));
        console.log(`Created ${dest}`);
      }
    }

  });

  grunt.registerTask('json2html',['convertJson2html','copy:pictures']);
  grunt.registerTask('data',['clean:data','csv2json','csv2anki','json2html']);
  grunt.registerTask('build', ['clean:build','js']);
  grunt.registerTask('demo',['build','data','copy:data']);
  grunt.registerTask('test', ['clean:test','jasmine']);

  // Default task(s).
  grunt.registerTask('default', ['demo','test','connect','watch']);

};
