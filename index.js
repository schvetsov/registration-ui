const express = require('express')
const app = express()
const mongoose = require('./db/mongoose');

app.get('/', (req, res) => {
    res.status(200).send('Hello world')
})

var port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));