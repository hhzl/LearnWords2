/* LearnWords2 --  Gruntfile.js

Aim: 
   Define the tasks for the grunt task runner.
   http://gruntjs.com/

Date:
   6th February 2017




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
                clean  Clean files and folders. *                              
               jshint  Validate files with JSHint. *                           
              connect  Start a connect web server. *                           
                 copy  Copy files. *                                           
                watch  Run predefined tasks whenever watched files change.     
                   js  Builds bundle for JavaScript component *                
              jasmine  Creates bundle for Jasmine tests *                      
             csv2json  Converts CSV to JSON *                                  
             csv2anki  Converts CSV to Anki *                                  
            json2yaml  Converts JSON to YAML *                                 
        json2htmlList  Converts JSON to HTML *                                 
    json2htmlSpelling  Converts JSON to a HTML presentation with spelling demo *
 
           htmlreport  Alias for "json2htmlList", "copy:pictures" tasks.       
 spellingpresentation  Alias for "json2htmlSpelling", "copy:pictures" tasks.   
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
  console.log('OUTPUT_DIR=',p.OUTPUT_DIR);
  console.log('WEB_ROOT=',p.WEB_ROOT);

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
      build: [path.join(p.DIST_DIR,'**')],
      js: [path.join(p.BUILD_DIR,'**')],
      test: [path.join(p.BUILD_DIR,'jasmine-bundle.js')]
    },
    jshint: {
      es5: ['src/*.js'],
      es6: ['Gruntfile.js', 'src/data-conversion/*.js']
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

    json2htmlSpelling: {
      data: {
        src: path.join(p.INPUT_DIR,'json','**/*.json'),
        dest: path.join(p.OUTPUT_DIR,'html')
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




  // ================================================================================
  // Custom tasks
  // ================================================================================


  // load custom tasks
  require('./Grunt-customtasks.js')(grunt,p);
  require('./Grunt-customtasks-reports.js')(grunt);  
  require('./Grunt-customtasks-data-conversion.js')(grunt)





  // =========================================================================================
  // Definition of tasks as sequences of other tasks.
  // =========================================================================================


  // The following means that the htmlreport task is defined as the call to the
  // convertJson2html task followed by the copy:pictures task.
 
  grunt.registerTask('htmlreport',['json2htmlList','copy:pictures']);

  grunt.registerTask('spellingpresentation',['json2htmlSpelling','copy:pictures']);

  grunt.registerTask('data',['clean:data','csv2json','csv2anki','htmlreport']);
  grunt.registerTask('build', ['clean:build','jshint:es5','js']);
  grunt.registerTask('demo',['build','data','copy:data','copy:js']);
  grunt.registerTask('test', ['clean:test','jasmine']);

  // The default task is executed if grunt is called without giving a task name
  grunt.registerTask('default', ['demo','test','connect','watch']);

};
