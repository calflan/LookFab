// Assign gulp dependencies to the variable 'gulp'
var gulp = require('gulp');

// Assign gulp's sass comiling dependencies to the variable 'sass'
var sass = require('gulp-sass');

// Assign css minifier to the variable 'cssmin'
var cssmin = require('gulp-cssmin');

// Assign JavaScript minifier to the variable 'jsmin'
var jsmin = require('gulp-jsmin');

// Assign gulp's renaming dependencies to the variable 'rename'
var rename = require('gulp-rename');

// Assign the sass file that is to be compiled, to the variable 'sassInput'
var sassInput = 'css/sass.scss'

/*
* Assign the directory 'css' (which is where the
* resulting minified css file will be outputted),
* to the variable 'sassOutput'
*/
var sassOutput = 'css';

// Grab the JS files and assign them to the variable 'jsInput'
var jsInput = [
	'js/validation.js',
	'js/tabs.js'
];

/*
* Assign the directory 'js' (which is where the
* resulting minified JS files will be outputted),
* to the variable 'jsOutput'
*/
var jsOutput = 'js';


// Assign error logs to the the variable 'errors'
var errors = {
	// Log errors in the console
	errLogToConsole: true,
	// Display expanded errors
	outputStyle: 'expanded'
};


/*
* This task will run the 'default' task along with the
* 'sass' and 'js' tasks below, even when the default task does
* not contain anything. This means that the 'gulp' command
* can be used to run all of the tasks at the same time,
* instead of running 'gulp sass', then 'gulp js' for example.
*/
gulp.task('default', ['sass', 'js'], function() {

});


/*
* This task is ran to compile the sass file into a
* minified css file, so that it can be read by the HTML.
*
* It takes the 'input' variable and compiles the sass it
* contains. Then it minifies and stores the resulting CSS in the 'output'
* variable.
*/
gulp.task('sass', function() {
	return gulp
   // Find `sass.scss` file in the `css/` folder
   .src(sassInput)

   // Run Sass on file and log any errors
   .pipe(sass(errors).on('error', sass.logError))

   // Run 'gulp-cssmin' on the file to minify the outputting css
   .pipe(cssmin())

   // Append the suffix '.min' to the file to show that this is the minified version
   .pipe(rename({suffix: '.min'}))

   // Write the resulting CSS in the output destination
   .pipe(gulp.dest(sassOutput));

});

gulp.task('js', function() {
	return gulp
   // Find `js` folder
   .src(jsInput)

   // Run 'jsmin' on the file to minify the outputting JavaScript
   .pipe(jsmin())

   // Append the suffix '.min' to the file to show that this is the minified version
   .pipe(rename({suffix: '.min'}))

   // Write the resulting JS in the output destination
   .pipe(gulp.dest(jsOutput));

});
