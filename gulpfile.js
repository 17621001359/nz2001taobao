let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let connect = require('gulp-connect');
let sass = require("gulp-sass");

gulp.task("watchall", async ()=>{
    //压缩html的    
    gulp.watch("./src/*.html",async ()=>{
        gulp.src("./src/*.html")
        .pipe(htmlmin({
            collapseWhitespace:true
        }))
        .pipe(gulp.dest("./dist"));
    });
    //sass编译 
    gulp.watch("./src/*.scss",async ()=>{
       gulp.src("./src/*.scss")
       .pipe(sass())
       .pipe(gulp.dest("./dist/css"));
    });
});   

gulp.task('connect', function() {
  connect.server({
    root: './dist',  //root表示启动的服务器根目录，等同于phpstudy 的www目录
    livereload: true
  });
});
