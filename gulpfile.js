var gulp = require('gulp'),
	babel = require('gulp-babel'),
    stylus = require('gulp-stylus');

gulp.task('build', function (callback) {
	return gulp.src('./src/OmniStateTools.jsx')
		.pipe(babel({
			presets: ['react']
		}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('compress', function () {
	gulp.src('./src/OmniStateTools.styl')
		.pipe(stylus({
			compress: true
		}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['compress', 'build']);
