/* LearnWords2 --  Gruntfile.js

Aim: 
   Define the tasks for the grunt task runner.
   http://gruntjs.com/

Date:
   23rd February 2017




Contents of the file:

    - The "wrapper" function
    - Project and task configuration
    - Loading Grunt plugins and tasks
    - Custom tasks



Structure of the file:


  This file contains a single function which takes the 
  grunt task runner as an argument:


    function(grunt) {

        grunt.initConfig(aHugeConfigurationObjectForTheTasks);
        // When a task is run, Grunt looks for its configuration 
        // under a property of the same name.


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




Available tasks
Available tasks
                clean  Clean files and folders. *                              
               jshint  Validate files with JSHint. *                           
              connect  Start a connect web server. *                           
                 copy  Copy files. *                                           
                watch  Run predefined tasks whenever watched files change.     
             dir2json  Flatten a folder to a JSON file representing its        
                       contents *                                              
                   js  Builds bundle for JavaScript component *                
              jasmine  Creates bundle for Jasmine tests *                      
        json2htmlList  Converts JSON to HTML *                                 
    json2htmlSpelling  Converts JSON to a HTML presentation with spelling demo 
                       *                                                       
            imagesize  creates a file descriptions.csv in picture/c10 with     
                       image sizes *                                           
    json2htmlCardList  Converts JSON to HTML *                                 
             json2odg  Converts JSON to a LO Draw file *                       
             csv2json  Converts CSV to JSON *                                  
             json2csv  Converts JSON to CSV *                                  
            json2yaml  Converts JSON to YAML *                                 
             csv2anki  Converts CSV to Anki *                                  
           htmlreport  Alias for "csv2json", "json2htmlList", "copy:pictures"  
                       tasks.                                                  
            htmlcards  Alias for "csv2json", "json2htmlCardList",              
                       "copy:pictures_cards" tasks.                            
 spellingpresentation  Alias for "csv2json", "json2htmlSpelling",              
                       "copy:pictures" tasks.                                  
            odgreport  Alias for "clean:odg", "csv2json", "json2odg",          
                       "copy:pictures_odg" tasks.                              
                 data  Alias for "clean:data", "csv2json", "csv2anki",         
                       "htmlreport" tasks.                                     
                build  Alias for "clean:build", "jshint:es5", "js" tasks.      
                 demo  Alias for "build", "data", "copy:data", "copy:js" tasks.
                 test  Alias for "clean:test", "jasmine" tasks.                
              default  Alias for "demo", "test", "connect", "watch" tasks. 

Tasks run in the order specified. Arguments may be passed to tasks that accept
them by using colons, like "lint:files". Tasks marked with * are "multi tasks"
and will iterate over all sub-targets if no argument is specified.

The list of available tasks may change based on tasks directories or grunt
plugins specified in the Gruntfile or via command-line options.

For more information, see http://gruntjs.com/




*/



var path = require('path');


module.exports = function(grunt) {


  var p = grunt.file.readYAML('./Grunt_parameters_ini.yml');

  if (p.INPUT_DIR) {console.log('INPUT_DIR=',p.INPUT_DIR)} 
  else {console.log('INPUT_DIR UNDEFINED')};

  if (p.OUTPUT_DIR) {console.log('OUTPUT_DIR=',p.OUTPUT_DIR)} 
  else {console.log('OUTPUT_DIR UNDEFINED')};

  if (p.WEB_ROOT) {console.log('WEB_ROOT=',p.WEB_ROOT)} 
  else {console.log('WEB_ROOT UNDEFINED')};


  // =========================================================  
  // Project configuration.
  // =========================================================  

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      options: {
        force: true
      },
      data: [path.join(p.WEB_ROOT,'data'),p.OUTPUT_DIR],
      odg:  [path.join(p.OUTPUT_DIR,'odg')],
      build: [path.join(p.DIST_DIR,'**')],
      js: [path.join(p.BUILD_DIR,'**')],
      test: [path.join(p.BUILD_DIR,'jasmine-bundle.js')]
    },

    jshint: {
      es5: ['src/*.js'],
      es6: {options: {
                          esversion: 6
                     }, 
           files: {
                    src: ['Gruntfile.js', 'src/data-conversion/*.js']
                  }
           }
    },
    csv2anki: {
      data: {
        src: path.join(p.INPUT_DIR,'csv','**/*.csv'),
        dest: path.join(p.OUTPUT_DIR,'anki')
      }
    },

    csv2json: {
      data: {
        src: path.join(p.INPUT_DIR,'csv','**/*.csv'),
        dest: path.join(p.INPUT_DIR,'json')
      }
    },

    json2csv: {
      data: {
        src: path.join(p.INPUT_DIR,'json','**/*.json'),
        dest: path.join(p.INPUT_DIR,'csv')
      }
    },

    imagesize: {
      data: {
        src:  [path.join(p.INPUT_DIR,'pictures','c10','*.*'),
               '!'+path.join(p.INPUT_DIR,'pictures','c10','description.csv')],
        dest: path.join(p.INPUT_DIR,'pictures','c10')
      }
    },

    dir2json: {
      data: {
        root: path.join(p.INPUT_DIR,'json'),
        dest: path.join(p.INPUT_DIR,'single-json/all.json')
      }
    },

    json2yaml: {
      data: {
        src: path.join(p.INPUT_DIR,'json','**/*.json'),
        dest: path.join(p.OUTPUT_DIR,'yaml')
      }
    },

    json2htmlList: {
      data: {
        src: path.join(p.INPUT_DIR,'json','**/*.json'),
        dest: path.join(p.OUTPUT_DIR,'html')
      }
    },

    json2htmlCardList: {
      data: {
        src: path.join(p.INPUT_DIR,'json','wordlist_animals*.json'),
        dest: path.join(p.OUTPUT_DIR,'cards')
      }
    },
    json2htmlSpelling: {
      data: {
        src: path.join(p.INPUT_DIR,'json','**/*.json'),
        dest: path.join(p.OUTPUT_DIR,'html')
      }
    },

    json2odg: {
      data: {
        src: path.join(p.INPUT_DIR,'json','wordlist_animals*.json'),
        dest: path.join(p.OUTPUT_DIR,'odg')
      }
    },


    jasmine:{
      browser: {
        src: path.join('spec','support','Jasmine.json'),
        dest: path.join(p.BUILD_DIR,'jasmine-bundle.js')
      }
    },
    js:{
      dist: {
        options:{
          debug: false
        },
        src: [path.join('src','index.js')],
        dest: path.join(p.DIST_DIR,'LW.js')
      },
      debug: {
        options: {
          debug: true
        },
        src: [path.join('src','index.js')],
        dest: path.join(p.DIST_DIR,'LW-debug.js')
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
        files: [path.join(p.WEB_ROOT,'**','*.html')]
      }
    },
    connect:{
      test: {
        options: {
          base: {
            path: p.WEB_ROOT,
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
            path: p.WEB_ROOT,
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
        src: path.join(p.INPUT_DIR,'json','**'),
        dest: path.join(p.WEB_ROOT,'data','json')
      },
     pictures: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: path.join(p.INPUT_DIR,'pictures','c10','**'),
        dest: path.join(p.OUTPUT_DIR,'html','c10')
      },
     pictures_cards: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: path.join(p.INPUT_DIR,'pictures','c10','**'),
        dest: path.join(p.OUTPUT_DIR,'cards','c10')
      },
     pictures_odg: {
        expand: true,
        flatten: true,
        filter: 'isFile',
        src: path.join(p.INPUT_DIR,'pictures','c10','**'),
        dest: path.join(p.OUTPUT_DIR,'odg','pictures','c10')
      },
      js: {
        expand: true,
        flatten: true,
        src: path.join(p.DIST_DIR,'*'),
        dest: path.join(p.WEB_ROOT,'js')
      }
    }
  });



  // ====================================================================
  // Load grunt tasks
  // ====================================================================

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-dir2json');



  // ================================================================================
  // Custom tasks
  // ================================================================================


  // load custom tasks
  require('./Grunt-customtasks.js')(grunt,p);
  require('./Grunt-customtasks-reports.js')(grunt);  
  require('./Grunt-customtasks-data-conversion.js')(grunt);





  // =========================================================================================
  // Definition of tasks as sequences of other tasks.
  // =========================================================================================


  // The following means that the htmlreport task is defined as the call to the
  // convertJson2html task followed by the copy:pictures task.
 
  grunt.registerTask('htmlreport',['csv2json','json2htmlList','copy:pictures']);
  grunt.registerTask('htmlcards',['csv2json','json2htmlCardList','copy:pictures_cards']);

  grunt.registerTask('spellingpresentation',['csv2json','json2htmlSpelling','copy:pictures']);

  grunt.registerTask('odgreport',['clean:odg','csv2json','json2odg','copy:pictures_odg']);


  grunt.registerTask('data',['clean:data','csv2json','csv2anki','htmlreport']);
  grunt.registerTask('build', ['clean:build','jshint:es5','js']);
  grunt.registerTask('demo',['build','data','copy:data','copy:js']);

  // deactivate the jasmine tests as there is a problem with the browser version
  // directly call ``jasmine`` from the CLI to get the node version
  // grunt.registerTask('test', ['clean:test','jasmine']);
  grunt.registerTask('test', ['clean:test']);


  // The default task is executed if grunt is called without giving a task name
  // grunt.registerTask('default', ['demo','test','connect','watch']);
  // connect and watch task disabled because of the deactivation of the jasmine tests in the browser
  grunt.registerTask('default', ['demo','test']);


};
