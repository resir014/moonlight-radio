module.exports = function (grunt) {
  // Load all tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    // Project configuration
    pkg: grunt.file.readJSON('package.json'),

    // Optimise/minify images
    imagemin: {
      publish: {
        options: {
          optimizationLevel: 3,
          progressive: true,
          interlaced: true,
          svgoPlugins: [{ removeViewBox: false }]
        },
        files: [{
          expand: true,
          cwd: 'public',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public'
        }]
      }
    },

    // Lint SCSS files
    scsslint: {
      test: [
        '_scss/**/*.scss'
      ],
      options: {
        bundleExec: true,
        config: '.scss-lint.yml'
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
          require('pixrem')(),
          require('autoprefixer')({ browsers: 'last 2 versions' }),
          require('cssnano')({ preset: 'default' })
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },

    // Builds Jekyll website to `_site` directory
    jekyll: {
      options: {
        bundleExec: true
      },
      build: {
        options: {
          dest: '_site',
          config: '_config.yml'
        }
      },
      serve: {
        options: {
          drafts: true,
          serve: true
        }
      }
    },

    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:resir014/moonlight-radio.git',
          branch: 'gh-pages'
        }
      }
    }
  })

  // Default task
  grunt.registerTask('default', ['test'])

  // Lint SCSS files
  grunt.registerTask('test', ['scsslint'])

  // Start a local server
  grunt.registerTask('serve', ['jekyll:serve'])

  // Minify images
  grunt.registerTask('optimise', ['imagemin'])

  // Publish to GH pages
  grunt.registerTask('publish', ['optimise', 'jekyll:build', 'buildcontrol:pages'])
}
