module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          'src/js/*.js'
        ],
        dest: 'public/js/main.min.js'
      },
    },
    uglify: {
      options: {
        mangle: true,
        sourceMap: true
      },
      js: {
        files: {
          'public/js/main.min.js': ['public/js/main.min.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/js/*.js'],
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('serve', [ 'connect:app', 'watch' ]);

 };
