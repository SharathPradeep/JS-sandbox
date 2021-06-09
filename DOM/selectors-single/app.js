// // document.getElementById()

// console.log(document.getElementById('task-title'));

// // get things from element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle=document.getElementById('task-title');

// // changing style

// taskTitle.style.background='#333';

// taskTitle.style.color='#fff';

// taskTitle.style.padding='1rem';

// // document.getElementById('task-title').style.display='none';



// // changing content

// taskTitle.textContent ='Task List';

// taskTitle.innerText='My Task';

// taskTitle.innerHTML ='<h4>Task List</h4>';










// documnet.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

// console.log(document.querySelector('#task-title').style.background='#f4f4f4');

console.log(document.querySelector('li'));

document.querySelector('li').style.color='red';

document.querySelector('ul li').style.color='blue';

document.querySelector('li:last-child').style.color='red';

document.querySelector('li:nth-child(3)').style.color='orange';

document.querySelector('li:nth-child(4)').textContent='List Item-modified';

document.querySelector('li:nth-child(even)').style.background='#f4f4f4';

document.querySelector('li:nth-child(odd)').style.background='#ccc';