//var fs = require('fs');

var {config} = require('./config');
var Twitter = require('twitter');

var client = new Twitter(config);

var listener = require('./routines/listeners')(client);

//refractory period of 10 minutes
