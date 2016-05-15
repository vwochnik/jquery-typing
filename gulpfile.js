var gulp = require("gulp"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    cleanCSS = require("gulp-clean-css");

gulp.task("minify-js", function() {
  return gulp.src("src/*.js")
    .pipe(uglify({
      preserveComments: "license"
    }))
    .pipe(rename({
      extname: ".min.js"
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task("minify-css", function() {
  return gulp.src("src/*.css")
    .pipe(cleanCSS())
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task("default", ["minify-js", "minify-css"]);
