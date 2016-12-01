var http = require("http");
var fs = require("fs");
var events = require("events");
var emitter = new events.EventEmitter();

var mbuf = new Buffer('aaaabbb');
var nbuf = new Buffer("aaaabbb");
var json = mbuf.toJSON(nbuf);
console.log(mbuf);
console.log("json =  " + json.toString());

// fs.readFile('hello.js',function(err,data){
// 	if (err) {
// 		emitter.emit('a',1,2,3,5);
// 	} else {
// 		var json = mbuf.toJSON(mbuf);
// 		console.log("json =  " + json);
// 	}
// });
var read = fs.createReadStream("hello.js");
var write = fs.createWriteStream("output.txt");
read.pipe(write);

emitter.addListener('a', function(){
    console.log("wrong");
});

emitter.on('a',function(a,b){
    console.log("wrong again" + a + b);
});
http.createServer(function (request, response){
	//发送Http头部
	//HTTP 状态值：200：OK
	//内容类型：text/plain
	response.writeHead(200,{'Content-Type': 'text/plain'});

	//发送响应数据"Hello World"
	response.end('Hello World\n');
}).listen(1234);


//终端打印如下信息
console.log('Server running at http://127.0.0.1:1234/');