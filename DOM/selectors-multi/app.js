// document.getElementsByClassName

// // global scope- not neccessary
// const items=document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);

// items[0].style.color='red';
// items[3].textContent='List Item-modified';

// // local scope

// const listItems=document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);


// document.getElementsByTagName

// let lis=document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);

// lis[0].style.color='red';
// lis[3].textContent='List Item-modified';


// // convert html collection into array

// lis=Array.from(lis);

// lis.reverse();

// lis.reverse();

// lis.forEach(function(current,index){
//   console.log(current.className);
//   current.style.background='#ccc';
//   current.textContent=`List Item ${index+1}`;
// });

// console.log(lis);








// document.querySelectorAll()

const items=document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(current,index){
  console.log(current);
  current.style.background='#ccc';
  current.textContent=`List Item ${index+1}`;
});

const liOdd=document.querySelectorAll('ul li:nth-child(odd)');

const lieven=document.querySelectorAll('ul li:nth-child(even)');

liOdd.forEach(function(current){
  current.style.background='#f4f4f4';
});

for(let i=0;i<lieven.length;i++){
  lieven[i].style.background="#f4f3d1";
}


console.log(items);