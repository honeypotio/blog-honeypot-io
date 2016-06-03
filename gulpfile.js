var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');

gulp.task('resize-author-images', function() {
  return gulp.src('authors/src/*')
    .pipe(imageResize({ 
      width : 250,
      height : 250,
      crop : true, 
      upscale : false
    }))
    .pipe(gulp.dest('authors/temp'));
});

gulp.task('compress-author-images', ['resize-author-images'], function() {
  gulp.src('authors/temp/*')
  .pipe(imagemin())
  .pipe(gulp.dest('authors/'))
});

gulp.task('optimize-author-images', ['compress-author-images']);
