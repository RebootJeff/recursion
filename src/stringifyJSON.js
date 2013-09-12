// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var keys = Object.keys(obj);
  if(keys.length){
  	var value = obj[keys[0]];
  	delete obj[keys[0]];
  	return ',"' + keys[0] + '":' + value + stringifyJSON(obj);
  }
  else{
  	return '}';
  }
};

