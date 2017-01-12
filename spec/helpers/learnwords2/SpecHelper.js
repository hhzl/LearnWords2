var fs = require('fs');

beforeAll(function(){

	this.getGermanWordList = function(callback){

		if (typeof window === 'undefined'){
			// running in node
			var data = fs.readFileSync('data/json/wordlist-en-ge.json');
			var js = JSON.parse(data);
			callback.call(null,null,js);
		}else{
			// running in browser
			var req = new XMLHttpRequest();
			req.open('GET','/data/json/wordlist-en-ge.json',true);
			req.addEventListener("load",function(){
				try{
					var data = JSON.parse(this.responseText);
					callback.call(null,null,data);
				}catch(e){
					callback.call(null,e,null);
				}
			});
			req.send();
		}
		
	};

});