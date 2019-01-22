let gulp = require('gulp');
let war = require('gulp-war');
let zip = require('gulp-zip');


gulp.task('war', function () {
  return gulp.src(["dist/netshop/**/*"])
    .pipe(zip('netshop.war'))
    .pipe(gulp.dest("./target"));
});

gulp.task('build-war', ['war']);
