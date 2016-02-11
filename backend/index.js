// http://stackoverflow.com/questions/6831918/node-js-read-a-text-file-into-an-array-each-line-an-item-in-the-array
// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
var express = require('express');
var app = express();
var fs = require('fs');
var quotes = fs.readFileSync('quotes.txt').toString().split("\n");
var images = fs.readFileSync('images.txt').toString().split("\n");

function shuffle(o){
    for(var j, x, i = o.length-1; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

app.get('/api/quote', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.type('text/plain');
    res.send(shuffle(quotes)[0]);
});

app.get('/api/image', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.type('text/plain');
    res.send(shuffle(images)[0]);
});

app.listen(3009);
