const express = require('express')
const app = express()
const mongoose = require('./db/mongoose');
const User = require('./db/models/new-user');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
    let myData = new User(req.body.state);
    myData.save()
      .then(item => {
        res.send("Saved");
      })
      .catch(err => {
        res.status(400).send("Error");
      });
})

var port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));