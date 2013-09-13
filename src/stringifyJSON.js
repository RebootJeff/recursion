// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var type = typeof obj;
  var result;
  if(Array.isArray(obj)){
  	for(var i = 0; i < obj.length; i++){
  		return stringifyJSON(obj[i]);
  	}
  }
  else if(type === 'string'){
  	return '"' + obj + '"';
  }
  else if(type === 'number' || type === 'boolean'){
  	return obj;
  }
  else{
  	for(var prop in obj){
  		if(obj.hasOwnProperty(prop)){
  			var keys = Object.keys(obj);
  			var value = obj[keys[0]];
  			delete obj[keys[0]];
  		}
  	}
  }

};

