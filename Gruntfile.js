module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),

        // handlebars task
        handlebars: {
            compile: {
                options: {
                    amd: true,
                    namespace: 'Templates',
                    partialsUseNamespace: true,
                    processName: function (filePath) {
                        var file = filePath.replace(/.*\/(\w+)\.hbs/, '$1');
                        return file;
                    }
                },
                files: {
                    'scripts/templates.js': ['templates/*.hbs']
                }
            }
        },
    });

    // Load handlebars plugin.
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Default task(s).
    grunt.registerTask('default', ['handlebars']);

};