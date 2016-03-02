var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');

gulp.task('default', function() {
  // place code for your default task here

  gulp.src("raw_images/*")
    .pipe(imageResize({
      width: 2048,
      quality: 0.5,
      imageMagick: true
    }))
    .pipe(rename(function (path){
      path.basename += "-2x";
    }))
    .pipe(gulp.dest('images'));

    gulp.src("raw_images/*")
      .pipe(imageResize({
        width: 1024,
        quality: 0.5,
        imageMagick: true
      }))
      .pipe(rename(function (path){
        path.basename += "-1x";
      }))
      .pipe(gulp.dest('images'));

});
