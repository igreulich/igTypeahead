module.exports = function(grunt) {
  var jshintConfig = {
    jshintrc: 'true',
    files: {
      src: ['./src/igTypeahead.js']
    }
  };

  var uglifyConfig = {
    min: {
      files: {
        './dist/igTypeahead.min.js': ['./src/igTypeahead.js']
      }
    }
  };

  var copyConfig = {
    main: {
      expand: true,
      src: 'src/*',
      dest: 'dist/',
      flatten: true
    }
  };

  grunt.initConfig({
    jshint: jshintConfig,
    uglify: uglifyConfig,
    copy: copyConfig
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('dist', ['jshint', 'uglify', 'copy']);
}
