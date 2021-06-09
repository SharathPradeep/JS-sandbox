// set local storage item
// localStorage.setItem('name','John');
// localStorage.setItem('age','30');

// set session storage item
// sessionStorage.setItem('name','beth');


// remove from storage
// localStorage.removeItem('name');

//  get from storage
// const name=localStorage.getItem('name');
// const age=localStorage.getItem('age');
// console.log(name);
// console.log(age);

// // clear all
// localStorage.clear();




// form
document.querySelector('form').addEventListener('submit',function(e){

  const taskclear=document.getElementById('task');
  const task=document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks')===null){
    tasks=[];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks));
  alert('Task Saved');
  
  e.preventDefault();

  taskclear.value='';
});


const tasks= JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(current){
  console.log(current)
});