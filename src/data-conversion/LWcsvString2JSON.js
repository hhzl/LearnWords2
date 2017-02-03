"use strict";
// ----------------------------------------------------------------------
// LearnWords 2
//
// File:
//    LWcsvString2JSON.js
//
// Purpose:
//    Converts a CSV string
//    to an array of objects
//
// Date:
//    1st February 2017
//
// ----------------------------------------------------------------------

var Papa = require("papaparse");


var LWcsvString2JSON = function (aCSVString) {

    var result = Papa.parse(aCSVString, {
        dynamicTyping: true,
        encoding: "utf8",
        skipEmptyLines: true
    });

    var arrayOfObjects = [];
    var propertyName;
    var obj;

    if (result.errors.length === 0) {
          // result.data is array of arrays
          // row with index 0 is header
          // we want an array of objects.


      for (var j = 1; j < result.data.length; j++) {
            obj = {};
            for (var k = 0; k < result.data[0].length; k++){
              if(k < result.data[j].length){
                propertyName = result.data[0][k];
                obj[propertyName] = result.data[j][k];
              }
            }      
            arrayOfObjects.push(obj)
     }
 
    } else {
          console.log(result.errors);
    }

    return arrayOfObjects;
};

module.exports = LWcsvString2JSON;
