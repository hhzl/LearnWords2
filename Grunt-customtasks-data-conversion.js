function defineCustomTasksDataConversion(grunt,p) {

    const fs = require('fs'), 
    path = require('path'),
    LWcsvString2JSON = require("./src/data-conversion/LWcsvString2JSON"),
    AnkiExport = require('anki-apkg-export').default,
    yaml = require('js-yaml');




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



};

module.exports = defineCustomTasksDataConversion;
