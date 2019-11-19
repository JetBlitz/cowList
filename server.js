// import http from "http";
// const http = require('http'); // this creates an HTTP module/server; creates a server
//! Don't use http above since it creates ANOTHER server that has NO routes so it doesn't work when I go to localhost:3000
const app = require('./app'); // after creating app.js and adding app.use, which will send a status code, now I can import the app file I just finished setting up. Go into my terminal below and activate the server via 'node server.js' (keep that terminal on since that keeps it alive) and then open up a browser and type in 'localHost: 3000' . You will see our message there. //NOTE: app is being made into a server



/////
const port = 3000;

// const port = process.env.PORT || 3000; //creates a port automatically; env is an environement variable where port is made. process.env accesses node.js and this would be set on the server you deploy on most hosting providers. However, if there is no environment provided by the hosting providers it will use port 3000.


// const server = http.createServer(app); // a requestListener parameter is used in which the function is executed every time the server gets a request. This handles REQUESTS from the USER as well as the RESPONSE back to the USER.

//! Don't use http or server above since it creates ANOTHER server that has NO routes so it doesn't work when I go to localhost:3000. app.js is already working. NOTE: I forgot to add 'app' as an argument into createServer.

app.listen(port); // start the APP server, and pass the port as an argument.

console.log('app server is running in the terminal');
console.log(`To get started, visit: http://localhost:${port}`)

///////

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(3000);
//////

// Start & Initialize Web Server ///////////////////////////////////////////////

// const port = 3000;
// app.listen(port, () => {
//   console.log('CRUDdy Todo server is running in the terminal');
//   console.log(`To get started, visit: http://localhost:${port}`);
// });

// Todo.initialize();