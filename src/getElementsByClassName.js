// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here

  // fragment is used to start a new, empty NodeList
  var fragment = document.createDocumentFragment();
  var currentNode = (arguments.length > 1) ? arguments[1] : document.body;

  var children = currentNode.childNodes;
  for(var i = 0; i < children.length; i++){
    var child = children[i];
    if(checkClasses(child.classList,className)){
      fragment.appendChild(child);
    }
    if(children[i])
  }

  return fragment.childNodes;
};


var checkClasses(classes, targetClass){
  for(var key in classes){
    if(classes[key] === targetClass){
      return true;
    }
  }
  return false;
}