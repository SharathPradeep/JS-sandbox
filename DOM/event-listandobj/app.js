// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//   console.log('hello');
//   e.preventDefault();
// });



document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){
  // console.log('clicked');
  
  let val;
  val=e;
  
  // event target element
  val=e.target;
  val=e.target.id;
  val=e.target.className;
  val=e.target.classList;

  e.target.innerText='Hello';
  e.target.style.color='red';

  document.querySelector('#task-title').style.color='red';

  val=e.type;

  val=e.timeStamp;

  // coordinates rel to window
  val=e.clientY;
  val=e.clientX;

  // coordinates rel to elemt
  val=e.offsetY;
  val=e.offsetX;


  console.log(val);
}