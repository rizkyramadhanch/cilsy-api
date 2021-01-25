var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "192.168.1.79",
    user: "root",
    password: "12345678",
    database: "nodejs_api"
});

conn.connect(function (err){
    if(err) throw err;
});

module.exports = conn;
