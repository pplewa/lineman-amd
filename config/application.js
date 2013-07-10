/* Exports an object that defines
 *  all of the configuration needed by the projects'
 *  depended-on grunt tasks.
 *
 * You can find the parent object in: node_modules/lineman/config/application.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('application', {
	//Override application configuration here. Common examples follow in the comments.

	// API Proxying
	//
	// During development, you'll likely want to make XHR (AJAX) requests to an API on the same
	// port as your lineman development server. By enabling the API proxy and setting the port, all
	// requests for paths that don't match a static asset in ./generated will be forwarded to
	// whatever service might be running on the specified port.
	//
	// server: {
	//   apiProxy: {
	//     enabled: true,
	//     host: 'localhost',
	//     port: 3000
	//   }
	// }

	// Sass
	//
	// Lineman supports Sass via grunt-contrib-sass, which requires you first
	// have Ruby installed as well as the `sass` gem. To enable it, comment out the
	// following line:
	//
	// enableSass: false

	appTasks: {
		dist: ["requirejs", "cssmin", "images:dist", "webfonts:dist", "homepage:dist"]
	},

	coffee: {
		glob_to_multiple: {
			options: { 
				bare: true 
			},
			expand: true,
			cwd: 'app/js/',
			src: '<%= files.coffee.amd %>',
			dest: 'generated/js/',
			ext: '.js'
		}
	},

	watch: {
		coffee: {
			files: [
				"app/js/<%= files.coffee.amd %>",
				"<%= files.coffee.app %>"
			]
		}
	},

	requirejs: {
		compile: {
			options: {
				baseUrl: "generated/js",
				paths: {
					js: ''
				},
				name: 'app',
				out: "<%= files.js.minified %>"
			}
		}
	}

});