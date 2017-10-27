const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const exec = require('gulp-exec');
const browserify = require('browserify');
const babelify = require('babelify');

const fs = require('fs');

const conf = {

    browserify : {
        entries: ['web/index.js']
    },

    bablify : {
        presets: [[require.resolve('babel-preset-es2015')]],
        global: true,
        plugins: [require.resolve("babel-plugin-transform-object-assign")]
    },

    linkedModules : {
        'jeneric-core' : '@jeneric/core',
        'jeneric-app' : '@jeneric/app',
        'jeneric-web' : '@jeneric/web'
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

gulp.task('link', () => {

    let commands = [];
    commands.push('rm -R node_modules/@jeneric');

    for(let moduleName in conf.linkedModules) {

        let packageName = conf.linkedModules[moduleName];

        commands.push('cd ../' + moduleName + ' && npm unlink && npm link');
        commands.push('npm link ' + packageName);
        commands.push('echo "linked: ' + packageName + '"');
    }

    let stream = gulp.src('./');

    for(let command of commands) {
        stream = stream.pipe(exec(command));
    }

    stream = stream.pipe(exec.reporter(reportOptions));

    return stream;
});

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

gulp.task('watch', function() {
    gulp.watch(['./web/**/*.js', './node_modules/@jeneric/**/*.js'],  gulp.series('js', 'js-uglify'));
});

gulp.task('default', gulp.series('js', 'js-uglify', 'watch'));