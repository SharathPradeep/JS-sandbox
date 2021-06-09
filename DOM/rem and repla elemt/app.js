// replace element
// create an element

const newHead=document.createElement('h2');

// adding id and text node
newHead.id='task-title';
newHead.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHead=document.getElementById('task-title');

// get parent
const cardParent=document.querySelector('.card-action');

// replace
cardParent.replaceChild(newHead,oldHead);




// Remove element
const lis=document.querySelectorAll('li');

const list=document.querySelector('ul');

// remove by child
list.removeChild(lis[0]);

// remove()
lis[2].remove();


// classes and attr

const firstLi=document.querySelector('li:first-child');
const link=firstLi.children[0];

let val;

// classes
val=link.className;
val=link.classList;
val=link.classList[0];
link.classList.add('test');
val=link;
link.classList.remove('test');
val=link;

// attributes
val=link.attributes;
val=link.getAttribute('href');
link.setAttribute('href','http://google.com');
val=link.getAttribute('href');
link.setAttribute('title','google');
val=link.hasAttribute('href');
val=link;
link.removeAttribute('title');

console.log(val);