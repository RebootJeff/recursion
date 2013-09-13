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
    // Delete extraneous comma at end of string
    // and add closing square bracket.
    result = result + ']';
  }
  else if(type === 'string'){
    result = result + '"' + obj + '"';
  }
  else if(type === 'number' || type === 'boolean' || !obj){
    result = result + obj;
  }
  else{
    result = '{'; 
    for(var prop in obj){
      if(obj.hasOwnProperty(prop)){
        var key = Object.keys(obj)[0];
        var value = obj[key];
        delete obj[key];
        result = result + '"' + stringifyJSON(key)
          + '":' + stringifyJSON(value);
      }
    }
    result = result + '}';
  }

  return result;
};