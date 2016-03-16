var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    package = require('./package.json');

var paths = {
    output : 'assets/scripts/dist/',
    scripts : [
        'src/*.js',
    ]
};

var banner = [
  '/*! ',
  '<%= package.name %> ',
  'v<%= package.version %> | ',
  '(c) ' + new Date().getFullYear() + ' <%= package.author %> |',
  ' <%= package.homepage %>',
  ' */',
  '\n'
].join('');

/**
 * Add nice banner comment to script file, move it, rename it, uglify it
 */
gulp.task('scripts', function() {
    return gulp.src(paths.scripts[0])
        .pipe(plugins.plumber())
        .pipe(plugins.header(banner, { package : package }))
        .pipe(gulp.dest('dist/'))
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(plugins.uglify())
        .pipe(plugins.header(banner, { package : package }))
        .pipe(gulp.dest('dist/'));
});

/**
 * Make sure our JS doesn't suck balls
 */
gulp.task('lint', function () {
    return gulp.src(paths.scripts)
        .pipe(plugins.plumber())
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

 /**
 * Watch our JS files
 */
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts', 'lint']);
});


gulp.task('dev', ['watch']);
gulp.task('build', ['lint', 'scripts']);
gulp.task('default', ['dev']);