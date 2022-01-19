// Gulp
const { src, dest, watch } = require("gulp");

// Scss
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-minify-css');
const rename = require("gulp-rename");

// Generate CSS from SCSS
function generateCSS(cb) {
  src('./src/scss/init.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename('app.min.css'))
    .pipe(dest("./src/assets"))
  cb();
}

function watchFiles(cb) {
  watch('./src/scss/**/*.scss', generateCSS);
}

exports.css = generateCSS;
exports.watch = watchFiles;