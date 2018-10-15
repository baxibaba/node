var gulp = require('gulp')

gulp.task('default', function () {
    console.log('hello world')
})

/**
 * 匹配需要打包的文件
 */

gulp.src(['*.js', '*.css', '*.html'])
    .pipe(gulp.dest('dist'))
