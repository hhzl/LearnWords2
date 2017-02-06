

  // ================================================================================
  // Custom tasks
  // ================================================================================


function defineCustomTasks(grunt,p) {

    const fs = require('fs'), 
    path = require('path'),
    browserify = require('browserify'),
    LWcsvString2JSON = require("./src/data-conversion/LWcsvString2JSON"),
    LWjson2html = require("./src/data-conversion/LWjson2html"),
    LWjson2htmlSlides = require("./src/data-conversion/LWjson2htmlSlides"),
    AnkiExport = require('anki-apkg-export').default,
    yaml = require('js-yaml'),
    Jasmine = require('jasmine');





  "use strict";
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





  grunt.registerMultiTask('js','Builds bundle for JavaScript component', function(){

    var opts = this.options({ 
      debug: false 
    });
    
    grunt.verbose.write("debug: " + opts.debug);

    var output = this.files[0].dest;

    mkDirs(p.DIST_DIR);

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


};

module.exports = defineCustomTasks;
