// ----------------------------------------------------------------------
// LearnWords 2
//
// File:
//    LWjson2html.js
//
// Purpose:
//    Converts a JSON object 
//    (array of objects representing rows)
//    to a HTML table with a header
//
// Date:
//    14th February 2017
//
// ----------------------------------------------------------------------


var LWjson2htmlCards = function (json) {
    "use strict";

       var htmlCode = [];


        json.forEach(function(element){
            htmlCode.push('\n<hr>\n<article>\n');

            htmlCode.push('<span class="idOfKey">'+ element["_id"] + '</span>\n');
            htmlCode.push('<span class="word">'+ element["word"] + '</span>\n');
            htmlCode.push('<span class="translate">'+ element["translate"] + '</span>\n');
            htmlCode.push('<span class="tags">'+ element["tags"] + '</span>\n');
            if (element.picture) {htmlCode.push(`<img src="${element.picture}" />\n`);}
            else {htmlCode.push('\n');}
            htmlCode.push('</article>\n');}
        );

        return htmlCode.join('');
};

module.exports = LWjson2htmlCards;
