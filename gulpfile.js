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

gulp.task('optimize-covers', _optimizeCovers());

function _optimizeCovers() {
  const defaultOptions = {
    upscale: false
  };
  const files = [
    {
      glob: 'thumbnail_*',
      dest: 'xs',
      options: {
        width: 480,
        crop: true
      }
    },
    {
      glob: 'thumbnail_*',
      dest: 'sm',
      options: {
        width: 737,
        height: 143,
        crop: true
      }
    },
    {
      glob: 'thumbnail_*',
      dest: 'md',
      options: {
        width: 720,
        crop: true
      }
    }
  ];

  // copy desktop cover images
  gulp.src('_assets/cover-images/*')
    .pipe(changed('assets/cover-images'))
    .pipe(imagemin())
    .pipe(gulp.dest('assets/cover-images'));

  // resize cover images
  return files.map(function(file) {
    const src = `_assets/cover-images/${file.glob}`;
    const dest = `assets/cover-images/${file.dest}`;
    const taskName = `cover-resize-${file.dest}`;
    gulp.task(taskName, function() {
      return gulp.src(src)
        .pipe(changed(dest))
        .pipe(imageResize(Object.assign({}, defaultOptions, file.options)))
        .pipe(imagemin())
        .pipe(gulp.dest(dest));
    });
    return taskName;
  });
}

gulp.task('optimize-images', function() {
  const src = '_assets/images/*';
  const dest = 'assets/images';
  return gulp.src(src)
    .pipe(changed(dest))
    .pipe(imagemin())
    .pipe(gulp.dest(dest));
});

gulp.task('default', ['optimize-authors', 'optimize-covers', 'optimize-images']);
