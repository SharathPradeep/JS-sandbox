// create element

const li= document.createElement('li');

// add class

li.className='collection-item';

// add id

li.id='new-item';

// add attribute

li.setAttribute('title','New-Item');

// add text-node and append

li.appendChild(document.createTextNode('List Item (New)'));

// create  new link element

const link=document.createElement('a');

// add class

link.className='delete-item secondary-content';

// add href

link.setAttribute('href','#');

// create icon

link.innerHTML='<i class="fa fa-remove"></i>';

// append link to li

li.appendChild(link);

// append li as child to ul

ul=document.querySelector('ul');
ul.appendChild(li);

console.log(li);