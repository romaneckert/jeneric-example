const gulp = require('gulp');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const babelify = require('babelify');
const rename = require('gulp-rename');
const fs = require('fs');
const exec = require('child_process').exec;

const conf = {

    browserify : {
        entries: ['./web-app/app/index.js']
    },

    bablify : {
        presets: [[require.resolve('babel-preset-es2015')]],
        global: true,
        plugins: [require.resolve("babel-plugin-transform-object-assign")]
    },

    linkedModules : {
        '@jeneric/core' : '../jeneric-core',
        '@jeneric/logger' : '../jeneric-logger',
        '@jeneric/entities' : '../jeneric-entities',
        '@jeneric/example' : '../jeneric-example',
    }

};

const errorHandler = (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
};

gulp.task('execute', () => {
    return exec('node ./node-app/index.js', errorHandler);
});


gulp.task('refresh', () => {
    exec('rm -R node_modules/@jeneric && npm install', errorHandler);
});

gulp.task('link', (cb) => {

    exec('cd ' + conf.linkedModules['@jeneric/core'] +
        ' && npm unlink' +
        ' && npm link' +
        ' && rm -R node_modules 2>&1' +
        ' && npm install', errorHandler);

    exec('cd ' + conf.linkedModules['@jeneric/logger'] +
        ' && npm unlink' +
        ' && npm link' +
        ' && rm -R node_modules 2>&1' +
        ' && npm install' +
        ' && npm link @jeneric/core', errorHandler);

    exec('cd ' + conf.linkedModules['@jeneric/entities'] +
        ' && npm unlink' +
        ' && npm link' +
        ' && rm -R node_modules 2>&1' +
        ' && npm install' +
        ' && npm link @jeneric/core', errorHandler);

    return exec('cd ' + conf.linkedModules['@jeneric/example'] +
        ' && npm unlink' +
        ' && npm link' +
        ' && rm -R node_modules 2>&1' +
        ' && npm install' +
        ' && npm link @jeneric/core' +
        ' && npm link @jeneric/logger' +
        ' && npm link @jeneric/entities', errorHandler);

});

gulp.task('js', () => {

    return browserify(conf.browserify)
        .transform('babelify', conf.bablify)
        .bundle()
        .pipe(fs.createWriteStream('web-app/web/index.js'));

});

gulp.task('js-uglify', () => {

    return gulp.src('./web-app/web/index.js')
        .pipe(uglify())
        .pipe(rename('index.min.js'))
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