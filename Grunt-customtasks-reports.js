// ================================================================================
// Custom tasks -- reports
// ================================================================================



function defineCustomTasksReports(grunt) {
    "use strict";

    const path = require('path');

    const LWjson2html = require("./src/data-conversion/LWjson2html"),
          LWjson2htmlSlides = require("./src/data-conversion/LWjson2htmlSlides"),
          LWjson2odg = require("./src/data-conversion/LWjson2odg");






  grunt.registerMultiTask('json2htmlList','Converts JSON to HTML',function(){

    var html = grunt.file.read('templates/report.html');

    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];
        
        var json = JSON.parse(grunt.file.read(f));

        var tableString = LWjson2html(json);

        var basename = path.basename(f,'.json');
        var dest = path.join(this.files[i].dest,basename+'.html');

        var report  = html.replace('${wordListName}',basename);

        grunt.file.write(dest, report.replace('${table}',tableString));

        grunt.verbose.write(`Created ${dest}`);
      }
    }

  });










  grunt.registerMultiTask('json2htmlSpelling','Converts JSON to a HTML presentation with spelling demo',function(){

    var html = grunt.file.read('templates/learning-to-spell.html');

    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];
 
        var json = JSON.parse(grunt.file.read(f));

        var slides = LWjson2htmlSlides(json);

        var dest = path.join(this.files[i].dest,path.basename(f,'.json')+'-spelling.html');

        grunt.file.write(dest, html.replace('${slides}',slides));
        grunt.verbose.write(`Created ${dest}`);
      }
    }

  });







  grunt.registerMultiTask('json2odg','Converts JSON to a LO Draw file',function(){

    var drawText = grunt.file.read('templates/animals_pictures_and_words.fodg');

    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];
 
        var json = JSON.parse(grunt.file.read(f));

        var drawText = LWjson2odg(json,drawText);

        var fname = path.basename(f,'.json')+'.fodg';
        var dest = path.join(this.files[i].dest,fname);
        drawText  = drawText.replace('.filename.',fname);
        grunt.file.write(dest, drawText);
        grunt.verbose.write(`Created LibreOffice Draw document: ${dest}`);
      }
    }

  });








};


module.exports = defineCustomTasksReports;
