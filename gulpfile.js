var gulp            = require('gulp'),
    clean           = require('gulp-clean'),
    changed         = require('gulp-changed'),
    htmlmin         = require('gulp-htmlmin'),
    pump            = require('pump'),
    cleancss        = require('gulp-clean-css'),
    uglify          = require('gulp-uglify'),
    rename          = require('gulp-rename'),
    // imagemin        = require('gulp-imagemin')
    browserSync     = require('browser-sync'),    // 静态服务器
    sequence        = require('run-sequence');
  ;

var config = {
    src: "web",
    dist: "build"
}

/**
 * 清理目标目录
 */
gulp.task('clean', function(cb) {
    pump([
        gulp.src(config.dist),
        clean()
    ], cb)
})

/**
 * 执行html压缩
 */
gulp.task('minify:html', [], function(cb) {

    pump([
        // 获取原目录下所有的html文件
        gulp.src(config.src + "/**/*.html"),
        // 每次打包时，只打包内容发生改变的文件
        changed(config.dist, { extension:'.html' }),
        // 执行html压缩
        htmlmin({
            removeComments: true,               // 清除HTML注释
            collapseWhitespace: true,           // 压缩空格
            collapseBooleanAttributes: true,    // 省略布尔属性的值 <input checked="true"/> => <input checked>
            removeEmptyAttributes: true,        // 删除所有空格作属性值 <input id=""> => <input>
            removeScriptTypeAttributes: true,   // 删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,// 删除<style>和<link>的type="text/css"
            minifyJS: true,                     // 压缩页面JS
            minifyCSS: true                     // 压缩页面CSS
        }),
        // 输出至目标目录
        gulp.dest(config.dist)

    ], cb);

});

gulp.task('js',function(cb){
    pump([
        gulp.src(config.src + '/**/*.js'),
        uglify(),
        // rename({suffix: '.min'}),
        gulp.dest(config.dist)
    ], cb)
  });

  gulp.task('css',function(cb){
    pump([
        gulp.src(config.src + '/**/*.css'),
        cleancss(),
        // rename({suffix: '.min'}),
        gulp.dest(config.dist)
    ], cb)
  });

  // gulp.task('minify:image',function(cb){
  //   pump([
  //     gulp.src(config.src + "/**/*.{png,jpg,gif,ico,jpeg}"),
  //     imagemin({
  //         optimizationLevel: 5,   //类型：Number  默认：3  取值范围：0-7（优化等级）
  //         progressive: true,      //类型：Boolean 默认：false 无损压缩jpg图片
  //         interlaced: true,       //类型：Boolean 默认：false 隔行扫描gif进行渲染
  //         multipass: true,        //类型：Boolean 默认：false 多次优化svg直到完全优化
  //         svgoPlugins: [{removeViewBox: false}],  //不要移除svg的viewbox属性
  //         use: [pngquant()]       //使用pngquant深度压缩png图片的imagemin插件
  //     }),
  //     // 输出至目标目录
  //     gulp.dest(config.dist)
  //   ], cb)
  // });



  gulp.task('server', function(){
    //初始化项目跟目录为'./'（也可以使用代理proxy: "yourlocal.dev"）
    browserSync({
      //不显示在浏览器中的任何通知。
      notify: false,
      server: {
        baseDir: config.dist,   // 启动服务的目录 默认 index.html
        index: 'index.html'    // 自定义启动文件名
      },
    //   https:true,  //是否启动https服务
      port: 3333,
      open: 'external',   // 决定Browsersync启动时自动打开的网址 external 表示 可外部打开 url, 可以在同一 wifi 下不同终端测试
      injectChanges: true // 注入CSS改变
    });
    //监听html文件的变化，自动重新载入
    gulp.watch(config.dist + '/**/*.html').on('change', browserSync.reload);
    //监听css文件的变化，自动重新载入
    gulp.watch(config.dist + '/**/*.css').on('change', browserSync.reload);
    //监听js文件的变化，自动重新载入
    gulp.watch(config.dist + '/**/*.js').on('change', browserSync.reload);
  });

/**
 * 监控
 */
gulp.task('watch', [], function(cb) {
    gulp.watch(config.src + "/**/*.html", ['minify:html']);
    gulp.watch(config.src + "/**/*.css", ['css']);
    gulp.watch(config.src + "/**/*.js", ['js']);
    // gulp.watch(config.src + "/img/*", ['minify:image']);
});

/**
 * 开始执行
 */
gulp.task('default', function(cb) {
    sequence('clean', 'js','css','minify:html', 'watch', cb);
});
