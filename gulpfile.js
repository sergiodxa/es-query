var eslint     = require('gulp-eslint');
var gulp       = require('gulp');

// rutas de donde leer archivos en las distintas tareas
// y donde dejar los archivos generados
var paths = {
  src: {
    eslint: ['./methods/**/*.js', './index.js'],
  }
}

gulp.task('eslint', function () {
  return gulp
    .src(paths.src.eslint)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('watch', function () {
  gulp.watch([paths.src.eslint], ['eslint']);
});

gulp.task('default', ['eslint', 'watch']);