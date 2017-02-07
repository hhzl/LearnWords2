function defineCustomTasksDataConversion(grunt) {
    "use strict";



    const fs = require('fs'), 
    path = require('path'),

    LWcsvString2JSON = require("./src/data-conversion/LWcsvString2JSON"),
    AnkiExport = require('anki-apkg-export').default,
    yaml = require('js-yaml');








  grunt.registerMultiTask('csv2json','Converts CSV to JSON',function(){
    // Grunt provides a normalized list of src/destination files in this.files
    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];

        var arrayOfObjects = LWcsvString2JSON(grunt.file.read(f));
       
        if (arrayOfObjects.length !== 0) {
    
            var dest = path.join(this.files[i].dest,path.basename(f,'.csv')+'.json');
            grunt.file.write(dest, JSON.stringify(arrayOfObjects));
            grunt.verbose.write('Wrote ' + dest);    
        }
      }
    }
  });











  grunt.registerMultiTask('json2yaml','Converts JSON to YAML',function(){

    // Grunt provides a normalized list of src/destination files in this.files

    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];

        var jsonObject = JSON.parse(grunt.file.read(f));

        var yamlFileHeader = '---\n';
        var resultString = yamlFileHeader + yaml.safeDump(jsonObject);

        var fileName = path.basename(f,'.json');
        var dest = path.join(this.files[i].dest,fileName+'.yml');
 
        grunt.file.write(dest, resultString);

        grunt.verbose.write(`Created ${dest}`);
      }
    }

  });











  grunt.registerMultiTask('csv2anki','Converts CSV to Anki',function(){

    var done = this.async();

    var promises = [];
    // Grunt provides a normalized list of src/destination files in this.files
    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];

        var arrayOfObjects = LWcsvString2JSON(grunt.file.read(f));

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
              grunt.file.mkdir(path.dirname(dest));
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



};


module.exports = defineCustomTasksDataConversion;
