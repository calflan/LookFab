var gulp = require('gulp');
var sass = require('gulp-sass');

var input = 'css/sass.scss'
var output = 'css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('default', function() {

});

gulp.task('sass', function() {
	return gulp
   // Find `sass.scss` file in the `css/` folder
   .src(input)
   // Run Sass on file
   .pipe(sass(sassOptions).on('error', sass.logError))
   // Write the resulting CSS in the output folder
   .pipe(gulp.dest(output));
});