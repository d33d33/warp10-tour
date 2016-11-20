module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    clean: {
      dist: ['dist'],
    },
    less: {
      dist: {
        options: {
          banner: '/*! /!\\ GENERATED \n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'dist/css/main.css': 'app/style/main.less'
        }
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/',
          src: ['**', '!style'],
          dest: 'dist/'
        }, {
          expand: true,
          cwd: 'node_modules/milligram/dist/',
          src: ['**'],
          dest: 'dist/css/'
        }, {
          expand: true,
          cwd: 'node_modules/normalize.css/',
          src: ['*.css'],
          dest: 'dist/css/'
        }, {
          expand: true,
          cwd: 'node_modules/jquery/dist/',
          src: ['jquery.min.*'],
          dest: 'dist/js/'
        }, {
          expand: true,
          cwd: 'node_modules/jquery-resizable-dom/dist/',
          src: ['jquery-resizable.min.*'],
          dest: 'dist/js/'
        }, {
          expand: true,
          cwd: 'node_modules/codemirror/lib/',
          src: ['*.js'],
          dest: 'dist/js/'
        }, {
          expand: true,
          cwd: 'node_modules/codemirror/lib/',
          src: ['*.css'],
          dest: 'dist/css/'
        }, {
          expand: true,
          cwd: 'node_modules/json-formatter-js/dist/',
          src: ['*'],
          dest: 'dist/js/'
        }, {
          src: ['lessons.js'],
          dest: 'dist/js/'
        }, {
          expand: true,
          cwd: 'node_modules/d3/',
          src: ['d3.min.js*'],
          dest: 'dist/js/'
        }, {
          expand: true,
          cwd: 'node_modules/c3/',
          src: ['c3.min.js*'],
          dest: 'dist/js/'
        }, {
          expand: true,
          cwd: 'node_modules/c3/',
          src: ['c3.min.css*'],
          dest: 'dist/css/'
        }, {
          src: ['lessons.js'],
          dest: 'dist/js/'
        }]
      }
    },
    execute: {
        lessons: {
            src: ['bundleLessons.js']
        }
    },
    watch: {
      dev: {
        files: ['lessons/**/*', 'app/**/*'],
        tasks: ['lessons', 'dist'],
        options: {
          atBegin: true,
        },
      },
      lessons: {
        files: ['lessons/**/*'],
        tasks: ['lessons'],
        options: {
          atBegin: true,
        },
      }
    },
    'http-server': {
        dev: {
          root: 'dist',
          port: 8080
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-execute');

  grunt.registerTask('default', ['clean:dist', 'lessons', 'dist']);
  grunt.registerTask('dist', ['copy:dist', 'less:dist']);
  grunt.registerTask('lessons', ['execute:lessons']);
  grunt.registerTask('dev', ['clean:dist', 'watch:dev']);
  grunt.registerTask('serve', ['http-server']);
};
