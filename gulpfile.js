var  controllersList = [
  'js/routeController.js',
  'js/homeController.js',
  'js/div1Controller.js',
  'js/div2Controller.js',
  'js/div3Controller.js'
];

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('concatControllers', function() {
  return gulp.src(controllersList )
    .pipe(concat('controllers.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('uglifyControllers', function() {
  return gulp.src(controllersList )
    .pipe(concat('controllers.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});


gulp.task('default', function(){
  return console.log('Choose your method');
});
