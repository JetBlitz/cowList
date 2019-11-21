// this will spin up this Express application, which will make handling REQUESTS easier

const express = require('express'); // use the package we just installed
const app = express(); // execute the express package so we can use its methods

//! What is app.METHOD(path, callback [, callback ...])
//NOTE: Routes an HTTP request, where METHOD is the HTTP method of the request, such as GET, PUT, POST, and so on, in lowercase. Thus, the actual methods are app.get(), app.post(), app.put(), and so on.

const cowsRoutes = require('../api/routes/cows'); //requests are forwarded to this file if the URL it is targeting is /cows

app.use('/cows', cowsRoutes); // app is a middleware that does things. For this middleware, only the cows path will be targeted: to target only the '/cows' file, pass that as the FIRST ARGUMENT. The secound argument will be my handler that listens and anything that STARTS with '/cows' URL will be FORWARDED to the cowsRoutes for processing

// app.use((req, res, next) => {
//   res.status(200).json({ //send a json response saying, everything is ok, via a status code; this is a method that takes a number
//     message: 'It works!' // this will send this message through stringification because JSON does it automatically
//   });
// }); //use is a method that sets up middleware. So an incoming request has to go through app.use and with whatever we pass into it; the thing we pass into it can be of different FORMATS -- it can be like an arrow function where you get the req, res, next and execute it to MOVE that request to the next middleware on line.

app.get('/', function (req, res) { // '/' is the root route, which is the application's home page. GET retrieves data  and should have NO OTHER EFFECT.
  res.send('Hello World! We are in the root route of app.js since my target is /')
});

app.post('/', function (req, res) { //POST requests the server to ACCEPT the entity enclosed in the request as NEW data; the data POSTed can be a message to a bulletin board or an item to ADD to a DATABASE
  res.send('Got a POST request! We are in the root route of app.js')
});

app.put('/user', function (req, res) { // this UPDATES an already EXISTING resource at the supplied URI. If it does not point to an existing resource, then the server CAN CREATE the resource with that URI
  res.send('Got a PUT request at /user')
});

app.delete('/user', function (req, res) { // deletes the specified resource
  res.send('Got a DELETE request at /user')
});

module.exports = app;