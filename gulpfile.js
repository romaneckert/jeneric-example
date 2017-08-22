const gulp = require('gulp');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const exec = require('gulp-exec');
const browserify = require('browserify');
const babelify = require('babelify');

const fs = require('fs');

const conf = {

    browserify : {
        entries: ['./web/index.js']
    },

    bablify : {
        presets: [[require.resolve('babel-preset-es2015')]],
        global: true,
        plugins: [require.resolve("babel-plugin-transform-object-assign")]
    }

};

const reportOptions = {
    err: true,
    stderr: true,
    stdout: true
}

const errorHandler = (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
};

gulp.task('refresh', () => {
    exec('rm -R node_modules/@jeneric && npm install', errorHandler);
});

gulp.task('link_jeneric_core', () => {

    let command = 'cd ../jeneric-core' +
        ' && npm unlink' +
        ' && npm link';

    return gulp.src('./')
        .pipe(exec(command))
        .pipe(exec.reporter(reportOptions));
});

gulp.task('link_modules', () => {

    let command = 'rm -R node_modules/@jeneric' +
        ' && npm link @jeneric/core';

    return gulp.src('./')
        .pipe(exec(command))
        .pipe(exec.reporter(reportOptions));
});

gulp.task('link', gulp.series('link_jeneric_core', 'link_modules'));

gulp.task('js', () => {

    return browserify(conf.browserify)
        .transform('babelify', conf.bablify)
        .bundle()
        .pipe(fs.createWriteStream('public/index.js'));

});

gulp.task('js-uglify', () => {

    return gulp.src('./public/index.js')
        .pipe(uglify())
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('./public/'));

});

gulp.task('reload', function () {
    return gulp.src('./**/*.html').pipe(connect.reload());
});

gulp.task('connect', function() {
    return connect.server({
        root: 'public/',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch(['./web-app/app/*.js', './node_modules/@jeneric/**/*.js'],  gulp.series('js', 'js-uglify', 'reload'));
});

gulp.task('default', gulp.series('js', 'js-uglify', gulp.parallel('connect', 'watch')));