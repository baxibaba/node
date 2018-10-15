var gulp = require('gulp')
var rename = require('gulp-rename')
var less = require('gulp-less')

gulp.task('less_common',function(){
    console.log("开始编译less")
    gulp.src('./style.less')
    .pipe(less())
    .pipe(rename({
        basename:"sytle.min",
        extname:".css"
    }))
    .pipe(gulp.dest('../../dist/style/'))
})