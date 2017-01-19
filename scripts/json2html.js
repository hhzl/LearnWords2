"use strict";
var fs = require('fs')
var parsedJSONwordlist = require('../data/json/wordlist-en-ge.json');

var out = [];


out.push(`<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<style>

</style>
</head>
<body>
<table>
`);





parsedJSONwordlist.forEach(function(element){
       out.push('<tr><td>',element.word,'</td><td>',element.translate,'</td></tr>\n')});





out.push(`<table>
<body>
<html>
`);



var dest = 'public/wordlist-en-ge.html';



fs.writeFileSync(dest,out.join(""),{
            encoding:'utf8',
            flags:'w+'
          });


console.log('Wrote ' + dest); 

