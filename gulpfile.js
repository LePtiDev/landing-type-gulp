// Gulp
const { src, dest } = require("gulp");

// scss
const sass = require('gulp-sass')(require('sass'));

// html 
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");

// files
const fs = require('fs');

// Global variables
const path = './src/';
const dirBuildName = "dist"

// Generate CSS form SCSS
function generateCSS(cb) {
  src(path + 'scss/init.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({
      basename: "app"
    }))
    .pipe(dest(dirBuildName))
  cb();
}

// Generate HTML 
function generateHTML(cb){
  fs.readdir(path + 'views/', (err, files) => {
    files.forEach(file => {
      src(path + 'views/' + file)
      .pipe(ejs({
        global: {
          cssLink: "app.css",
        },
        data: require(path + "functions/" + file.substr(0, file.lastIndexOf(".")) + ".js")
      }))
      .pipe(rename({
        extname: ".html"
      }))
      .pipe(dest("dist"));
    });
  });
  cb();
}

exports.css = generateCSS;
exports.html = generateHTML;