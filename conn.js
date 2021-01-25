var mysql = require('mysql');

const dotenv = require('dotenv');
dotenv.config();

var conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

conn.connect(function (err){
    if(err) throw err;
});

module.exports = conn;


// config.js 
// const dotenv = require('dotenv');
// const result = dotenv.config();
// if (result.error) {
//   throw result.error;
// }
// const { parsed: envs } = result;
// console.log(envs);
// module.exports = envs;


// config.js

