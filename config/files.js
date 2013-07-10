/* Exports an object that defines
 *  all of the paths & globs that the project
 *  is concerned with.
 *
 * The "configure" task will require this file and
 *  then re-initialize the grunt config such that
 *  directives like <config:files.js.app> will work
 *  regardless of the point you're at in the build
 *  lifecycle.
 *
 * You can find the parent object in: node_modules/lineman/config/files.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('files', {
	coffee: {
		amd: [
			"Modules/**/*.coffee"
		],
		app: [
			"app/js/app.coffee"
		]
	},
	js: {
		vendor: [
			"vendor/js/require.js",
			"vendor/js/jquery.js",
			"vendor/js/can.jquery.js",
			"vendor/js/underscore.js",
			"vendor/js/**/*.js"
		]
	}
});
