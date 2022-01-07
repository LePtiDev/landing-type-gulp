const { src, dest } = require("gulp");

// scss
const dartSass = require('dart-sass');
const gulpSass = require('gulp-sass');
const sass = gulpSass( dartSass );

const path = './src/';
const dirBuildName = "dist"

// Copy element in the directory "dirBuilName"
function copy(cb) {
  src([path + '**/*.js', path + '**/*.html'])
    .pipe(dest(dirBuildName));
  cb();
}

// Generate CSS form SCSS
function generateCSS(cb) {
  src(path + 'scss/init.css')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(dirBuildName))
  cb();
}



exports.copy = copy;
exports.css = generateCSS;