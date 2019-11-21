/*
* @Author: TomChen
* @Date:   2019-01-03 20:43:06
* @Last Modified by:   TomChen
* @Last Modified time: 2019-01-04 20:09:33
*/

/*
	可以响应并返回文件
 */

var http = require('http');
var fs   = require('fs');

var server = http.createServer(function(req,res){
	var urlStr = req.url;
	console.log('req.url:::',urlStr);
	if(urlStr == '/favicon.ico'){
		res.end('favicon.ico');
	}
	if(urlStr.search(/\?/) != -1){
		var parm = url.parse(urlStr,true).query;
		//根据数据做处理....
		var json = JSON.stringify(parm);
		res.end(json);
	}	
	var filePath = './'+urlStr;
	fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data);
		}else{
			res.statusCode = 404;
			res.end('<h1>I love You </h1><p>JingJing</p>');
		}
	});
});
/*
局域网测试
server.listen(3000,'10.214.59.98',function(){
	console.log("Sever is running at http://10.214.59.98:3000");
})
*/
server.listen(3000,"10.40.27.87",function(){
	console.log("Sever is running at http://10.40.27.87 :3000");
})