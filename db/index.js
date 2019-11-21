//! This will interact with my schema.sql file

// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.status(200).json({
//     message:'Handling GET requests to /index.js'
//   });
// });

////

var mysql      = require('mysql');
var connection = mysql.createConnection({
  // host     : 'localhost',
  user     : 'root',
  password: '', // must have empty password designated by empty string if no password exists
  // password : 'secret',
  database : 'cowList',
  // port: 3000
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

// connection.query('SELECT 1', function (error, results, fields) {
//   if (error) throw error;
//   //connected
//   console.log('Aloha! You have connected to the database, cowList!')
// });

// connection.end(function(err) {
//   // The connection is terminated now
//   console.log('A hui hou! Until we meet again! The connection has been terminated but this is not goodbye!')
// });

module.exports = connection;