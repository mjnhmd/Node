
var express = require("express");
var app = express();
var fs = require("fs");

app.get("/",function (req, res) {
    res.sendFile( __dirname+ "/table.html");
});

app.get("/process_get",function (req,res) {
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.send(JSON.stringify(response));
});


var server = app.listen(1234,function () {
    var address= server.address().address;
    var port = server.address().port;

    console.log("address = " + address + "   port = " + port);
    console.log("server = " + server.address());
});
