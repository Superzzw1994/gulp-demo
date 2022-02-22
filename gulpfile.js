const {dest, src, watch, series, parallel} = require('gulp')
const minHtml = require('gulp-htmlmin')
const ts = require('gulp-typescript')
const tsProject = ts.createProject("tsconfig.json");
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const postcss = require('gulp-postcss')
const inject = require('gulp-inject')
const browserSync = require('browser-sync')
const del = require('del')
const htmlTask = () => {
    return src('./src/*.html', {
        base: './src'
    })
        .pipe(minHtml({
            collapseWhitespace: true
        }))
        .pipe(dest('./dist'))
}
const scssTask = () => src('./src/**/*.css', {
    base: './src'
}).pipe(postcss())
    .pipe(dest('./dist'));
const jsTask = () => {
    return src('./src/**/*.ts', {
        base: './src'
    })
        .pipe(tsProject())
        .pipe(babel())
        .pipe(sourcemaps.init())
        .pipe(terser({
            mangle: {
                toplevel: true
            }
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('./dist'))
}
const injectHtml = () => {
    return src("./dist/*.html", {base: './src'})
        .pipe(inject(src(["./dist/js/*.js", "./dist/css/*.css"]), {relative: true}))
        .pipe(dest('./dist'))
}
const bs = browserSync.create()
const serve = () => {
    watch('./src/*.html', series(htmlTask, injectHtml))
    watch('./src/js/*.ts', series(jsTask, injectHtml))
    watch('./src/css/*.scss', series(jsTask, scssTask, injectHtml))

    bs.init({
        port: 1994,
        open: true,
        files: "./dist/*",
        server: {
            baseDir: './dist'
        }
    })
}

const clean = () => del(['dist'])
const buildTask = series(clean, parallel(htmlTask, jsTask, scssTask), injectHtml)
const serveTask = series(buildTask, serve)
module.exports = {
    serveTask,
    buildTask
}
