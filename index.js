const express = require('express');
const app = express();
const port = 4000;

const checkTime = (req, res, next) => {
    const date = new Date();
    const hour = date.getHours();
    const day = date.getDay();
    if (day > 0 && day < 6 && hour >= 9 && hour < 17) {
      next();
    } else {
      res.send('Sorry, we are currently closed.');
    }
  };
  
  app.use(express.static('public'));
  

  app.get('/', checkTime, (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
  });
  
  app.get('/services', checkTime, (req, res) => {
    res.sendFile(__dirname + '/public/services.html');
  });
  

  app.get('/contact', checkTime, (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
  });
  
app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });