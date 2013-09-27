/* jshint node:true */
'use strict';

module.exports = function (grunt) {

  var pre = [
    'src/pre.js',
    'src/shared.js',
    'src/serializer.js',
    'src/serializer/*',
    'src/selector.js',
    'src/logger/*',
    'src/transport.js'
  ];

  var post = ['src/client.js', 'src/post.js'];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= pkg.license %> */\n\n'
    },
    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
      node: {
        src: pre.concat(['src/transport/elasticsearch-node.js'], post),
        dest: 'dist/elasticsearch-node.js'
      }
    },
    nodeunit: {
      all: [
        'test/unit/*.test.js'
      ],
      options: {
        reporter: 'default'
      }
    },
    jshint: {
      source: {
        src: [
          'Gruntfile.js',
          'src/**/*.js',
        ],
        options: {
          jshintrc: 'src/.jshintrc'
        }
      },
      tests: {
        src: [
          'test/**/*.js'
        ],
        options: {
          jshintrc: 'test/.jshintrc'
        }
      }
    },
    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        logo: '<%= pkg.logo %>',
        options: {
          paths: 'src',
          themedir: '../yuidoc-bootstrap-theme',
          helpers: [
            '../yuidoc-bootstrap-theme/helpers/helpers.js'
          ],
          outdir: 'docs'
        }
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');


  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit']);
  grunt.registerTask('test', ['nodeunit']);

};