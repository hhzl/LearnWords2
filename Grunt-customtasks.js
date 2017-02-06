

  // ================================================================================
  // Custom tasks
  // ================================================================================


function defineCustomTasks(grunt,p) {

    const fs = require('fs'), 
    path = require('path'),
    browserify = require('browserify'),
    LWjson2html = require("./src/data-conversion/LWjson2html"),
    LWjson2htmlSlides = require("./src/data-conversion/LWjson2htmlSlides"),
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
