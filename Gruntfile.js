module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        options: {
          separator: ';',
          sourceMap: true
        },
        src: [
          'src/js/**/*.js'
        ],
        dest: 'public/js/superdom.min.js'
      }
    },
    uglify: {
      options: {
        mangle: true,
        sourceMap: true,
        sourceMapIncludeSources : true,
        sourceMapIn : 'public/js/superdom.min.js.map'
      },
      js: {
        files: {
          'public/js/superdom.min.js': ['public/js/superdom.min.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/js/**/*.js'],
        tasks: ['concat:js', 'uglify:js'],
        options: {
          livereload: true,
        }
      }
    },
    connect: {
      app: {
        options: {
          port: 9001,
          base: './public',
          middleware: function(connect, options, middlewares) {
            middlewares.unshift(require('connect-livereload')());
            return middlewares;
          }
        }
      }
    },
    jasmine: {
      src: 'src/js/*.js',
      options: {
        specs: 'spec/*Spec.js',
        helpers: 'spec/helper.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('serve', ['connect:app', 'watch']);
  grunt.registerTask('test', ['jasmine']);

 };
