var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./controller');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


var routes = require('./routes');
    routes(app);
    app.listen(port);
    console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);

var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "nodejs_api"
});

conn.connect(function (err){
    if(err) throw err;
});

module.exports = conn;