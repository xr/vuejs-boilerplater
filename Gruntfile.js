module.exports = function (grunt) {
	// Bootstrap the tasks need by grunt
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	var config = {
		pkg: grunt.file.readJSON('package.json'),
		clean: ["dev", "release"],
		jshint: {
			all: ['client/app/**/*.js']
		},
		copy: {
			dev: {
				files: [
					{
						cwd: 'client/app/',
						src: '**/*',
						dest: 'dev/app/',
						expand: true
					},
					{
						src: 'client/css/styles.css',
						dest: 'dev/css/styles.css'
					},
					{
						src: 'client/index.html',
						dest: 'dev/index.html'
					}
				]
			}
		},
		watch: {
			client: {
				files: ['client/app/**/*.js', 'client/css/**/*.css', 'client/*.html'],
				tasks: ['dev'],
				options: {
					spawn: false,
				},
			},
			tests: {
				// TODO
			}
		},
		requirejs: {
			dev: {
				options: {
					baseUrl: 'client/app',
					mainConfigFile: 'client/app/main.js',
					name: 'main',
					optimize: 'none',
					out: 'dev/app/main.js',

				}
			},
			release: {
				options: {
					baseUrl: 'client/app',
					mainConfigFile: 'client/app/main.js',
					name: 'main',
					out: 'dist/app/main.js',

				}
			}
		}
	};
	// configuration
	grunt.initConfig(config);

	// Tasks
	grunt.registerTask('dev', ['clean', 'jshint', 'copy:dev', 'requirejs:dev', 'watch:client']);
	grunt.registerTask('default', ['dev']);
}
