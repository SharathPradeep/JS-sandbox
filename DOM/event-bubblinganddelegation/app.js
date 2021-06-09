// Event Bubbling

// document.querySelector('.card-title').addEventListener('click',function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click',function(){
//   console.log('col');
// });




// Event Delegation

// only works for first element

// const delItem1=document.querySelector('.delete-item');

// delItem1.addEventListener('click',deleteItem1);

// function deleteItem1(){
//   console.log('delete item');
// }


// Alternate method using for loop and querySelectorAll

// const delItem=document.querySelectorAll('.delete-item');

// for(let i=0;i<delItem.length;i++){
//   delItem[i].addEventListener('click',deleteItem);

//   function deleteItem(){
//     console.log('delete item');
// }
// }


// Alternate using delegation

document.body.addEventListener('click',deleteItem);

function deleteItem(e){
  // if(e.target.parentElement.className==='delete-item secondary-content'){
  //   console.log('delete item');
  // }
  // if(e.target.parentElement.classList[0]==='delete-item'){
  //   console.log('delete item');
  // }
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}
