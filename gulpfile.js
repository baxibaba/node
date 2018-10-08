var gulp  = require('gulp')

gulp.task('default',function(){
    console.log('hello world')
})

/**
 * 匹配需要打包的文件
*/

gulp.src(['js/*.js','css/*.css','*.html'])
    .pipe(gulp.dest('dist'))
gulp.task('mytask',['one','two','three'])