"use strict";


var LWjson2htmlSlides = function (json) {

        var slides = [];
        var slideNo = 1;
 
        json.forEach(function(element){
            for(var key in element){
               if(key == "picture"){

                  if (element.picture) {
                     slideNo += 1;
                     slides.push(`<div class="slide hidden" id="slide-${slideNo}">\n`);
                     slides.push('<section class="slide-content">\n');
                     slides.push(`<img src="${element.picture}" />\n`)
                     slides.push('</section>\n</div>\n\n');

                     for (var i=1, len=element.word.length; i<=len; i++) {
                     slideNo += 1;
                     slides.push(`<div class="slide hidden" id="slide-${slideNo}">\n`);
                     slides.push('<section class="slide-content">\n');
                     slides.push(`<img src="${element.picture}" />\n<br />`)
                     slides.push(`<span class="bigLetters">${(element.word).substring(0,i)}</span>\n`)
                     slides.push('</section>\n</div>\n\n');
                     }
                     slides.push('<!-- - - - - - - - - - - - - - - - - - - - - - - - -->\n\n');
                  };
               }   
            }  
            }  
        );

        return slides.join('');
}


module.exports = LWjson2htmlSlides;
