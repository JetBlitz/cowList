//! Here, I will be creating a GET and POST request
const db = require('./db/index.js')
const express = require('express');
const router = express.Router();

router.get('/api/cows', (req, res, next) => {
  db.query('SELECT * FROM cows', (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

router.get('/', (req, res, next) => {
  res.status(200).json({
    message:'Handling GET requests to /cows'
  });
}); //handles GET requests, first argument is the URL. By just having a single '/' rather than '/cows', whenever a file like app.js has a app.use method that routes to this file, it wont attempt to route to '/cows/cows', instead it sees a single '/' and tells app.use('/cows, cowsRoutes), hey my target is '/cows'; so when it arrives here in cows.js, it sees that the router.get('/') and it tells app.use, this is where I should be since '/' tells me to stay here rather than be redirected to another file called '/cows' (app.use will essentially be rerouted incorrectly to '/cows/cows').

router.post('/', (req, res, next) => {
  res.status(201).json({
    message:'Handling POST requests to /cows'
  });
});

router.get('/:cowsId', (req, res, next) => {
  const id = req.params.cowsId; // this looks for the path that has the matching id and if found EXTRACTS from the route '/cows/cowId' and returns the cowId
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID that DOES NOT exist'
    });
  }
});

//!PUT and PATCH are the same
router.put('/:cowsId', (req, res, next) => { // this targets the route with the id I passed
    res.status(200).json({
      message: 'You updated the cow details!'
    });
});

router.delete('/:cowsId', (req, res, next) => { // this targets the route with the id I passed
  res.status(200).json({
    message: 'You DELETED the cow details!'
  });
});
module.exports = router;