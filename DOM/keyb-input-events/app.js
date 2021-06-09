const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//clear input 
taskInput.value=''; 

// submit-form
// form.addEventListener('submit', runEvent);

// For input-keydown
// taskInput.addEventListener('keydown',runEvent);

// keyup
// taskInput.addEventListener('keyup',runEvent);

// keypress
// taskInput.addEventListener('keypress',runEvent);

// // focus
// taskInput.addEventListener('focus',runEvent);

// // blur
// taskInput.addEventListener('blur',runEvent);

// // cut
// taskInput.addEventListener('cut',runEvent);

// // paste
// taskInput.addEventListener('paste',runEvent);

// input
// taskInput.addEventListener('input',runEvent);

// change-for dropdown(select)
// select.addEventListener('change',runEvent);

// event handler

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);

  // heading.textContent=e.target.value;

  // // get input
  // console.log(taskInput.value);
  // clear input
  // taskInput.value='';

  e.preventDefault();
}