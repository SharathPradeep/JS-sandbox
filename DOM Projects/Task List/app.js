// Define UI Vars
const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');


// Calling the load event listeners func

loadEventListeners();

// declare the func loadEventListeners

function loadEventListeners(){
    // DOM Load Event
    document.addEventListener('DOMContentLoaded',getTasks);
    // Add form event
    form.addEventListener('submit',addTask);
    // Remove task event
    taskList.addEventListener('click',removeTask);
    // clear all tasks event
    clearBtn.addEventListener('click',clearTasks);
    // filter tasks event
    filter.addEventListener('keyup',filterTasks);
}

// getTasks func-loading tasks

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[]
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(current){
    // create li element
    const li=document.createElement('li');
    // add class
    li.className='collection-item';
    // text node
    li.appendChild(document.createTextNode(current));
    // Create link element
    const link=document.createElement('a');
    // Add class
    link.className='delete-item secondary-content';
    // Add icon html
    link.innerHTML='<i class="fa fa-remove"></i>';
    
    // add a to li
    li.appendChild(link);

    // add li to ul
    taskList.appendChild(li);
    })
}

// Add task func
function addTask(e){
    if(taskInput.value===''){
        alert('Add a task');
    }else{
        // create li element
    const li=document.createElement('li');
    // add class
    li.className='collection-item';
    // text node
    li.appendChild(document.createTextNode(taskInput.value));
    // Create link element
    const link=document.createElement('a');
    // Add class
    link.className='delete-item secondary-content';
    // Add icon html
    link.innerHTML='<i class="fa fa-remove"></i>';
    
    // add a to li
    li.appendChild(link);

    // add li to ul
    taskList.appendChild(li);

    // localstorage
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[]
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(li.textContent);

    localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    taskInput.value='';
    e.preventDefault();
}



// Add removeTask func

function removeTask(e){
    
    if(e.target.parentElement.classList.contains('delete-item')){

        if(confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();

            // LS remove
            let tasks;
            if(localStorage.getItem('tasks')===null){
                tasks=[]
            }else{
                tasks=JSON.parse(localStorage.getItem('tasks'));
            }
            const remvalue=e.target.parentElement.parentElement.textContent;

            tasks.forEach(function(current,index){
                if(remvalue===current){
                    tasks.splice(index,1);
                }
            })
            localStorage.setItem('tasks',JSON.stringify(tasks));
        }
    }
}




// Add clearTasks func

function clearTasks(e){

    // taskList.innerHTML=''; one method

    // 2nd method-faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    localStorage.clear();

    e.preventDefault();
}



// Add filterTasks func

function filterTasks(e){

    const text = e.target.value.toLowerCase();

    const values=document.querySelectorAll('.collection-item');

    values.forEach(function(current){
        const item=current.textContent;
        if(item.toLowerCase().indexOf(text)!==-1){
            current.style.display="block";
        }else{
            current.style.display="none";
        }
    })

}