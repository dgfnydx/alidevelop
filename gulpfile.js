/*
* @Author: dgf
* @Date:   2018-08-28 11:46:53
* @Last Modified by:   dgfnydx
* @Last Modified time: 2019-04-23 12:08:25
*/

var gulp = require("gulp");
var uglify = require("gulp-uglify");
var fs = require("fs");
var concat = require("gulp-concat");
var rename = require('gulp-rename');


gulp.task("jsmin", function() {
	console.log("<<<<<<<<<<<获取项目名称>>>>>>>>>>>")
	fs.readdir("ARProject/",function (err,data) {
	    if(err){
	        console.log(err);
	    }else {
	    	fs.exists("ARProject/" + data[1] + ".js", function(exists) {
	    		if(!exists) {
	    			writeFile(data[1]);
	    		} else {
	    			console.log("<<<<<<<开始js压缩>>>>>>>>")
	    			gulp.src("ARProject/*.js")
	    				.pipe(uglify({
	    					// mangle:true,//类型：Boolean 默认：true 是否修改变量名
				            // compress:true,//类型：Boolean 默认：true 是否完全压缩
				            // preserveComments:'all'//保留所有注释
	    				}))
	    				.on('error', createErrorHandler('uglify'))//压缩中遇到错误定位
	    				.pipe(gulp.dest("ARProject/" + data[1] + "/"))
	    		}
	    	});
	    }
	})
});

gulp.task("jsmin2", function() {
	console.log("<<<<<<<<<< antHelper压缩 >>>>>>>>>>");
	gulp.src("antHelper.js")
		.pipe(uglify())
		.on("error", createErrorHandler('uglify'))
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest("antHelper.min.js"))
})

function createErrorHandler(name) {
	return function (err) {
		delete err.cause.stack;
		console.error('Error from ' + name + ' in compress task', err.cause);
	};
};
// function copyFile(souceName){
//     console.log("<<<<<<<<<<读取AR模板文件>>>>>>>>>>>");
//     fs.readFile('template.js', 'utf-8', function(err, data) {
//         if (err) {
//             console.log("读取失败");
//         } else {
//             writeFile(data, souceName)
//             return data;
//         }
//     });
//     console.log("<<<<<<<<<<AR模板文件读取完成>>>>>>>>>>>");
// }

function writeFile(souceName){
   	var str = `AR.log("${souceName} AR v1.0");

AR.onload = function() {

};

AR.onbegin = function(clipId) {

};

AR.onend = function(clipId) {

};

AR.onclick = function(nodeId, x, y) {
	
};



`
    fs.writeFile("ARProject/" + souceName + ".js",str,'utf-8',function(error){
        if(error){
            throw error;
        }else{
            console.log(souceName + "项目JS文件创建成功");  
            gulp.src(["ARProject/" + souceName + ".js", "antHelper.js"])  //要合并的文件
                .pipe(concat(souceName + ".js"))  // 合并匹配到的js文件并命名为 "all.js"
                .pipe(gulp.dest("ARProject/"));
            gulp.watch("ARProject/*.js", ["jsmin"])  
        }
    });
}

gulp.task("run", ["jsmin"], function() {
	gulp.watch("ARProject/*.js", ["jsmin"]);
	// gulp.watch("antHelper.js", ["jsmin2"]);

})


