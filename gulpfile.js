const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');

gulp.task('optimize-authors', function() {
  const src = '_assets/authors/*';
  const dest = 'assets/authors';
  gulp.src(src)
    .pipe(changed(dest))
    .pipe(imageResize({
      width: 250,
      height: 250,
      crop: true,
      upscale: false
    }))
    .pipe(imagemin())
    .pipe(gulp.dest(dest));
});

gulp.task('optimize-covers', function() {
  const src = '_assets/cover-images/*';
  const dest = 'assets/cover-images';
  return gulp.src(src)
    .pipe(changed(dest))
    .pipe(imagemin())
    .pipe(gulp.dest(dest));
});

gulp.task('optimize-images', function() {
  const src = '_assets/images/*';
  const dest = 'assets/images';
  return gulp.src(src)
    .pipe(changed(dest))
    .pipe(imagemin())
    .pipe(gulp.dest(dest));
});

gulp.task('default', ['optimize-authors', 'optimize-covers', 'optimize-images']);
