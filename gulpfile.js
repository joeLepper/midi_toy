var gulp = require('gulp')
  , refresh = require('gulp-livereload')
  , plumber = require('gulp-plumber')
  , browserify = require('browserify')
  , transform = require('vinyl-transform')
  , http = require('http')
  , st = require('st')
  , spawn = require('child_process').spawn

var bundle = transform(function (filepath) {
  return browserify(filepath
  , { fullPaths: false
    , debug: true
    }
  )
  .bundle()
})

gulp.task('build', function () {
  return gulp.src('./index.js')
    .pipe(plumber())
    .pipe(bundle)
    .pipe(gulp.dest('./public'))
    .pipe(refresh())
})

gulp.task('experiment', function () {
  return gulp.src('./experiment.js')
    .pipe(plumber())
    .pipe(bundle)
    .pipe(gulp.dest('./public'))
    .pipe(refresh())
})

gulp.task('sequencer', function () {
  return gulp.src('./sequencer.js')
    .pipe(plumber())
    .pipe(bundle)
    .pipe(gulp.dest('./public'))
    .pipe(refresh())
})

gulp.task('server', function ()  {
  console.log('AT YOUR SERVICE')
  refresh.listen()
  spawn('node', ['midi_server.js'], { stdio: 'inherit' })
})

gulp.task('watch', function () {
  gulp.watch('./index.js', ['build'])
  gulp.watch('./experiment.js', ['experiment'])
  gulp.watch('./sequencer.js', ['sequencer'])
})

gulp.task('copy', function () {
  gulp.src('./node_modules/x-gif/dist/x-gif.html')
    .pipe(gulp.dest('./public'))
})

gulp.task('default', ['server', 'copy', 'build', 'experiment', 'sequencer', 'watch'])



