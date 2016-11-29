beforeAll(function(){

    var WORDLIST = {};

    WORDLIST['en-ge'] = [{
        "word": "apple",
        "translate": "der Apfel"
    },{
        "word": "pear",
        "translate": "die Birne"
    },{
        "word": "lemon",
        "translate": "die Zitrone"
    },{
        "word": "banana",
        "translate": "die Banane"
    },{
        "word": "orange",
        "translate": "die Orange"
    },{
        "word": "strawberry",
        "translate": "die Erdbeere"
    },{
        "word": "raspberry",
        "translate": "die Himbeere"
    },{
        "word": "blueberry",
        "translate": "die Brombeere"
    },{
        "word": "guava",
        "translate": "die Guava"
    },{
        "word": "pawpaw",
        "translate": "die Papaya"
    }];

    this.getWordListCodes = function(){
        var codes = [];
        for(var c in WORDLIST){
            codes.push(c);
        }
        return codes;
    };

    this.getWordList = function(code){
        if(!WORDLIST[code]){
            return null;
        }else{
            return WORDLIST[code];
        }
    };

});
