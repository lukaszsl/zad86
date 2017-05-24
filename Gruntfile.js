// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'sass/**/*.sass',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'css/style.css': 'sass/style.sass'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },

        jshint: {
            all: ['js/*.js']
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // define default task
    grunt.registerTask('default', ['sass', 'browserSync', 'jshint', 'watch']);
};