const gulp = require('gulp');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const babelify = require('babelify');
const rename = require('gulp-rename');
const fs = require('fs');

const conf = {

    browserify : {
        entries: ['./web-app/app/index.js']
    },

    bablify : {
        presets: [require.resolve('babel-preset-es2015')],
        global: true
    }

};

gulp.task('js', () => {

    return browserify(conf.browserify)
        .transform('babelify', conf.bablify)
        .bundle()
        .pipe(fs.createWriteStream('web-app/web/bundle.js'));

});

gulp.task('js-uglify', () => {

    return gulp.src('./web-app/web/bundle.js')
        .pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('./web-app/web/'));

});

gulp.task('reload', function () {
    return gulp.src('./**/*.html').pipe(connect.reload());
});

gulp.task('connect', function() {
    return connect.server({
        root: 'web-app/web/',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch(['./web-app/app/*.js', './node_modules/@jeneric/**/*.js'],  gulp.series('js', 'js-uglify', 'reload'));
});

gulp.task('default', gulp.series('js', 'js-uglify', gulp.parallel('connect', 'watch')));