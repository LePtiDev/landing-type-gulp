const { src, dest } = require("gulp");

const path = './src/';
const dirBuildName = "dist"

function copy(cb) {
  src([path + '**/*.js', path + '**/*.html'])
    .pipe(dest(dirBuildName));
  cb();
}

exports.copy = copy;