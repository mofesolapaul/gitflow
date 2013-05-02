module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Client Unit Testing
    qunit: {
      all: {
        options: {
          urls: [
            'http://localhost:8000/test/test.html'
          ]
        }
      }
    },

    connect: {
      test: {
        options: {
          port: 8000,
          base: '.'
        }
      },
      server: {
        options: {
          port: 8000,
          base: '.',
          keepalive: true
        }
      }
    },

    exec: {
      'build': {
        command: 'echo "Building site. (not actually though)"'
      }
    }

  });

  // Load our plugins
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-exec');

  // Register tasks
  grunt.registerTask('default', ['connect:test', 'qunit']);
  grunt.registerTask('server', ['connect:server']);
  grunt.registerTask('test', ['connect:test', 'qunit']);
  grunt.registerTask('build', ['exec:build']);

};