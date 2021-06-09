let val;

const list=document.querySelector('ul');
const listItem=document.querySelector('li');

// get child nodes
val=list.childNodes;
val=list.childNodes[0];
val=list.childNodes[0].nodeName;
val=list.childNodes[1].nodeType;

// nodetype values
// 1-Element
// 2-attribute
// 3-text node
// 8-Comment
// 9-docuent itself
// 10-doctype

// get children
val=list.children;
val=list.children[0]; 
val=list.children[0].nodeType; 
val=list.children[0].nodeName;
val=list.children[1].textContent='Edited';

// children of children
list.children[3].children[0].id='test-id';
val=list.children[3].children[0];

// first and last child
val=list.firstChild;
val=list.firstElementChild;

val=list.lastChild;
val=list.lastElementChild;

// child count
val=list.childElementCount;



//Get Parent node

val=listItem.parentNode;
val=listItem.parentElement;
val=listItem.parentNode.parentNode;


// get siblings
val=listItem.nextSibling;
val=listItem.nextElementSibling.nextElementSibling;

val=listItem.previousSibling;
val=listItem.previousElementSibling;

val=listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);