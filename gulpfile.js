var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var cleanDest = require('gulp-dest-clean');
var uglify = require('gulp-uglify');
var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});


//buid
gulp.task('ionic-build',function(){
    
    console.log(
      "prepairing ionic application "+
      "\n @author akbar.pambudi"
    );
    
         
              
                 
          gulp.src('app/scss/main.scss')
                  .pipe(sass())
                  .on('error',sass.logError)
                  .pipe(cleanDest('www/build/css'))
                  .pipe(gulp.dest('www/build/css'));
                  
          gulp.src(['app/js/*.properties.js','app/js/**/*.properties.js','app/js/**/**/*.properties.js'])
              .pipe(concat('app.properties.js'))
              .pipe(cleanDest('www/build/js'))
              .pipe(gulp.dest('www/build/js'));
         
          gulp.src(['app/js/*.ang.js','app/js/**/*.ang.js','app/js/**/**/*.ang.js'])
              .pipe(concat('app.js'))
              //.pipe(uglify())
              .pipe(rename({extname:'.min.js'}))
              .pipe(gulp.dest('www/build/js'));
         
         gulp.src(['app/template/*.html','app/template/**/*.html'])
              .pipe(cleanDest('www/build/template'))
              .pipe(gulp.dest('www/build/template'));
    
});
