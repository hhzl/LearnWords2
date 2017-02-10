// ----------------------------------------------------------------------
// LearnWords 2
//
// File:
//    LWjson2odg.js
//
// Purpose:
//    Replaces words enclosed with .theWord. 
//    (array of objects representing rows)
//    with what is in the 'translate' property
//    in an ODG template file.
//
// Date:
//    9th February 2017
//
// ----------------------------------------------------------------------



var LWjson2odg = function (json,xmlText) {
    "use strict";

        json.forEach(function(element){
            xmlText = xmlText.replace('.'+element.word+'.',element.translate)
        }
        );

        return xmlText;
};

module.exports = LWjson2odg;
