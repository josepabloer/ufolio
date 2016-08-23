var  controllersList = [
  'js/controllers/homeController.js',
  'js/controllers/div1Controller.js',
  'js/controllers/div2Controller.js',
  'js/controllers/div3Controller.js',
];

var  servicesList = [
  'js/services/UsuarioService.js'
];

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//Controllers
gulp.task('concatControllers', function() {
  return gulp.src(controllersList )
    .pipe(concat('controller-bundle.js'))
    .pipe(gulp.dest('assets/'));
});

//Services
gulp.task('concatServices', function() {
  return gulp.src(servicesList )
    .pipe(concat('service-bundle.js'))
    .pipe(gulp.dest('assets/'));
});


gulp.task('concat', ['concatControllers', 'concatServices']);

gulp.task('uglifyControllers', function() {
  return gulp.src(controllersList )
    .pipe(concat('controllers.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});



gulp.task('default', function(){
     gulp.watch('js/**/*.js',['concat']);
});
