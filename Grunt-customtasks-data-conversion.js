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
    // This task may be adapted to specific file Anki card front and back configuration needs.

    var done = this.async();
    var picFileName = '';
    var audioFileName = '';
    var picFilePath = this.files[0].picinputdir;  // see Gruntfile.js  csv2anki config
    var audioFilePath = this.files[0].audioinputdir; // see Gruntfile.js  csv2anki config

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
  
          grunt.verbose.writeln("create deck: " + apkgName);

          for(var j = 0; j < arrayOfObjects.length; j++){
            var wordObj = arrayOfObjects[j];

	    picFileName = wordObj.picture;
	    audioFileName = wordObj.audio;

            apkg.addMedia(picFileName, fs.readFileSync(picFilePath+'/'+picFileName));
            apkg.addMedia(audioFileName, fs.readFileSync(audioFilePath+'/'+audioFileName));


            var front = wordObj.word;
            var back = wordObj.translate;
            var tags = wordObj.tags;
            var tagsObj = {};
            if(tags && tags.length > 0){
              tagsObj.tags = tags.trim().split(" ");
            }
   
            // Redefine front and back field for specific TeachMeWords purpose
            // Adapt the code below for other needs.
            // Later use a conversion type flag in Grunt_parameters_ini.yml
            // might be used for different conversion type needs

            front = '[sound:'+audioFileName+']';
            back = '<img src="'+picFileName+'"/>';
            grunt.verbose.writeln(front+','+back);  

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
