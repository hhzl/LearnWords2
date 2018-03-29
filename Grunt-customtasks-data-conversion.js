function defineCustomTasksDataConversion(grunt) {
    "use strict";



    const fs = require('fs'), 
    path = require('path'),

    LWcsvString2JSON = require("./src/data-conversion/LWcsvString2JSON"),
    AnkiExport = require('anki-apkg-export').default,
    Papa = require("papaparse"),
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










  grunt.registerMultiTask('json2csv','Converts JSON to CSV',function(){
    // Grunt provides a normalized list of src/destination files in this.files
    for(var i = 0; i < this.files.length; i++){
      var src = this.files[i].src;
      for(var h = 0; h < src.length; h++){
        var f = src[h];


        var csvString = Papa.unparse(grunt.file.read(f));
        // grunt.log.write(csvString);

        var dest = path.join(this.files[i].dest,path.basename(f,'.json')+'.csv');

        grunt.file.write(dest,csvString);
        grunt.log.write(`\n write file to dest=${dest}`);

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

    var picturesPath = "data/pictures/";
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
            var front = wordObj.word;  // this refers to the 'front' of the "card".
            var back = wordObj.translate; // this refers to the 'back' of the "card".
            var tags = wordObj.tags;
            var tagsObj = {};
            if(tags && tags.length > 0){
              tagsObj.tags = tags.trim().split(" ");
            };
            var pictureFileNamePath = picturesPath+wordObj.picture;
            var pathComponents = pictureFileNamePath.split("/");
            var pictureFileName = pathComponents[pathComponents.length-1]; // the last item

            // the content of the 'front' field refers to the picture through a HTML img tag
            // depending on the use case the content front and back field have to be adapted.
            // For example just add the picture to the front (no English label).

            front = '<img src="'  + pictureFileName + '"/><br />'+ front;
            grunt.verbose.write("front="+front+"\n");

            apkg.addCard(front, back, tagsObj);

            // the picture file needs to be added separatly
            apkg.addMedia(pictureFileName, fs.readFileSync(pictureFileNamePath));
            // the picture files get numbered in the apkg file and an index file called 
            // 'media' in JSON format is created
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
