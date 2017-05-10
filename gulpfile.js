var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    less = require('gulp-less'),
    rev = require('gulp-rev'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    useref =require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify =require('gulp-uglify'),
    revCollector = require('gulp-rev-collector')



// 处理css
gulp.task('css',function(){
    gulp.src('./public/less/main.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(rev())
    .pipe(gulp.dest('./release/public/css'))
    .pipe(rev.manifest())
    .pipe(rename('css-manifest.json'))
    .pipe(gulp.dest('./release/rev'))

})


// 处理图片
gulp.task('image', function () {

        gulp.src(['./public/images/**/*', './uploads/*'], {base: './'})
        .pipe(imagemin())
        .pipe(rev())
        .pipe(gulp.dest('./release'))
        .pipe(rev.manifest())
        .pipe(rename('image-manifest.json'))
        .pipe(gulp.dest('./release/rev'));

});


// js
gulp.task('useref', function () {

        gulp.src('./index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.js', rev()))
        .pipe(gulp.dest('./release'))
        .pipe(rev.manifest())
        .pipe(rename('js-manifest.json'))
        .pipe(gulp.dest('./release/rev'));

});

// 其他
gulp.task('others',function(){
    gulp.src(['./api/*', './public/fonts/*', './public/libs/*', './views/*.html'], {base: './'})
    .pipe(gulp.dest('release'))
})

// 替换
gulp.task('revCollector',function(){
    gulp.src(['./release/rev/*.json','./release/index.html'])
    .pipe(revCollector())
    .pipe(gulp.dest('./release'))


})
