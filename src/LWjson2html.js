"use strict";
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
//    2nd February 2017
//
// ----------------------------------------------------------------------


var LWjson2html = function (json) {

       var table = ['<table>'];

        table.push('<thead><tr>');
        for(var key in json[0]){
          table.push('<th>'+ key + '</th>');
        }
        table.push('</tr></thead>');
        
        table.push('<tbody>');

        json.forEach(function(element){
            table.push('<tr>');
            for(var key in element){
               if(key == "picture"){
                  if (element.picture) {table.push(`<td><img src="${element.picture}" /></td>`)}
                  else {table.push('<td></td>')};
               }else{
                  table.push('<td>'+ element[key] + '</td>');
               }

            }
            table.push('</tr>\n')}
        );

        table.push('</tbody>');
        table.push('</table>');
        return table.join('');
}

module.exports = LWjson2html;
