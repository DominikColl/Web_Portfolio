// load in the imports
const error = require('debug')('api:error');
const express = require('express');
const contactRouter = require('./routes/contact')

// create an express app
const app = express();

app.use(express.json());
// four params are required to mark this as a error handling middleware
// eslint-disable-next-line no-unused-vars
app.use(function (req, res, next) {
    // allowing access from all sites
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/submit', contactRouter)


// export the express app
module.exports = app;