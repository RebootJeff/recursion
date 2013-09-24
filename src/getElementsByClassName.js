// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var currentNode;

var getElementsByClassName = function (className, currentNode, result) {
  // your code here

  currentNode = currentNode || document.body;
  result = result || [];

  if(currentNode.classList && currentNode.classList.contains(className)){
    result.push(currentNode);
  }


  var children = currentNode.childNodes;
  for(var i = 0; i < children.length; i++){
    var child = children[i];
    getElementsByClassName(className,child,result);
  };
  return result;
};
