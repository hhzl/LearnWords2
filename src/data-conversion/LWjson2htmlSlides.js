/* LWjson2htmlSlides

Input: a sequence of data objects describing words

Output: HTML code for presenting slides to be used in a template

*/ 



var LWjson2htmlSlides = function (json) {
	"use strict";

        var slides = [];
        var slideNo = 1;



        function generateSlide(slides, aHTMLcontentString) {

             slides.push(`<div class="slide hidden" id="slide-${slideNo}">\n`);
             slides.push('<section class="slide-content">\n');


             slides.push(aHTMLcontentString);


             slides.push('</section>\n');
             slides.push('</div>\n\n');
        }





 
        json.forEach(function(element){

                  if (element.picture) {
                     slideNo += 1;

                     // show picture only
                     generateSlide(slides,`<img src="${element.picture}" />\n`);

                     
                     // reveal letters in subsequent slides
                     for (var i=1, len=element.word.length; i<=len; i++) {
                         slideNo += 1;
 
                         var content = `<img src="${element.picture}" />\n<br />`;
                         content += `<span class="bigLetters">${(element.word).substring(0,i)}</span>\n`;

                         generateSlide(slides,content);
                     }

                     // Later TODO: add button/keyboard shortcut to add word to wordsToRepeat collection

                     slides.push('<!-- - - - - - - - - - - - - - - - - - - - - - - - -->\n\n');

                  }

        });

        return slides.join('');
};




module.exports = LWjson2htmlSlides;
