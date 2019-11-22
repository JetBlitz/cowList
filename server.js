const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan')
const app = express();
const port = 3000;
const db = require('./db/index.js')

//! here are Routes that handle requests

app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(express.json()) //when receiving a JSON file
app.use(express.urlencoded({ extended: true })) 
// console.log('api/cows')


//! Sends back all of my stored cows
app.get('/api/cows', (req, res) => {
  // console.log('./api/cows')
  db.query('select * from cows', (err, data) => {
    console.log(data)
    if(err) {
      console.log('ERROR!', err)
      res.status(404).send();
    } else {
      res.status(200).send(data);
    }
  })
});

//! inserts a new cow
app.post('/api/cows', (req, res, next) => {
  console.log(req.body)
  db.query('INSERT INTO cows(cowName, cowDescription) values(?, ?)', ['Carl','Fat'], (err, data) => {
    if(err) {
      res.status(404).send();
    } else {
      res.status(201).send(data);
    }
  });


//! Error handlers if everything above does not work
// this is a custom 404 error handler

app.use((req, res, next) => {
  const error = new Error('Not found!');
  error.status = 404;
  next(error);
});

//! if something else breaks ANYWHERE in the app like the database
app.use((error, req, res, next) => {
  res.status(error.status || 500); //this will give me the problem's individual error status or a 500 status which is a databse
  res.json({
    error: {
      message: error.message // this is the error message of the argument passed
    }
  })

})
    // res.status(200).send(data);

  // res.status(201).json({
  //   message:'Handling POST requests to /cows'
  // });
});




app.get('/', function (req, res) { // '/' is the root route, which is the application's home page. GET retrieves data  and should have NO OTHER EFFECT.
  res.send('Hello World! We are in the root route of server.js since my target is /')
});

app.get('/api/cows', function (req, res) { // '/' is the root route, which is the application's home page. GET retrieves data  and should have NO OTHER EFFECT.
  res.send('Hello World! We are in the root route of server.js since my target is /api/cows')
});

// app.get('/api/routes/cows', function (req, res) { // '/' is the root route, which is the application's home page. GET retrieves data  and should have NO OTHER EFFECT.
//   res.send('Hello World! We are in the root route of server.js since my target is /api/routes/cows')
// });


// app.get('/api/cows', (req, res, next) => {
//   db.query('SELECT * FROM cows'), (err, data) => {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.status(200).send(data)
//     }
//   }
// });




app.listen(port, () => console.log(`Example app listening on port ${port}!`));