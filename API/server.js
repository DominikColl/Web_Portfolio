const log = require('debug')('api:logging');
// get the express application
const app = require('./app');
const express = require('express')
const path = require('path');
// set the port to either the one passed from the environment variables or 4000
const port = process.env.PORT || 4000;
// spin up the server and log what port it is running on
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}
app.listen(port, () => log(`API listening on port ${port}!`));