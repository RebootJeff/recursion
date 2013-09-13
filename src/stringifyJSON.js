// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var type = typeof obj;
  var result = '';
  if(Array.isArray(obj)){
    result = '['
    for(var i = 0; i < obj.length; i++){
      result = result + stringifyJSON(obj[i]);
      if(i < obj.length -1){
        result = result + ',';
      }
    }
    result = result + ']';
  }
  else if(type === 'string'){
    result = result + '"' + obj + '"';
  }
  else if(type === 'number' || type === 'boolean' || !obj){
    result = result + obj;  // converts obj to a string
  }
  else{
    result = '{'; 
    for(var prop in obj){
      if(obj.hasOwnProperty(prop)){
        // Questionable: Apparently the official JSON.stringify 
        // doesn't like undefined and function, so they get 
        // ignored below.
        if(typeof obj[prop] !== 'undefined' && typeof obj[prop] !== 'function'){
          result = result + stringifyJSON(prop)
            + ':' + stringifyJSON(obj[prop]) + ',';
        }
      }
    }

    // Delete extraneous comma at end of string. This code is
    // sad because it knows it is INELEGANT!
    if(result !== '{'){
      result = result.substr(0,result.length - 1);
    }
    result = result + '}';
  }

  return result;
};