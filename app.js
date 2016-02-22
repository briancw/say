/* jshint node: true */

var express = require('express');
var app = express();
var body_parser = require('body-parser');

var port = 3020;

app.use('/', express.static(__dirname));

app.listen(port, function() {
    console.log('Example app listening on port ' + port);
});
