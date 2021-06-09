// console logging

// console.log('hello');
// console.log(123);
// console.log(true);
// var greeting = 'Hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1,b:2});
// console.table({a:1,b:2});
// console.error('This is an error');
// console.clear();
// console.warn('This is a warning');
// console.time('Hello');
//     console.log('hello');
//     console.log('hello');
//     console.log('hello');
//     console.log('hello');
//     console.log('hello');
//     console.log('hello');
//     console.log('hello');
// console.timeEnd('Hello');


// // var
// var name='sharath';
// console.log(name);
// name='pradeep';
// console.log(name);

// // let
// let name1='sharath';
// console.log(name1);
// name1='pradeep';
// console.log(name1);

// // const

// const name3='sha';
// console.log(name3);
// // name3='shar'; cannot reassign
// // console.log(name3);

// // object
// const person={
//     name:'sharath',
//     age:19
// };
// console.log(person);

// person.name = 'sha';
// console.log(person);

// // array
// const num=[1,2,3,4];
// num.push(5);
// console.log(num);


// data types

// let name="sharath";
// console.log(typeof name);

// let num=123;
// console.log(typeof num);

// let bol=true;
// console.log(typeof bol);

// let test=null;
// console.log(typeof test);

// let test1;
// console.log(typeof test1);

// let sym= Symbol();
// console.log(typeof sym);

// ref data types

// let arr=['hello',123];
// console.log(typeof arr);

// let ob={
//     name:'sha'
// };
// console.log(typeof ob);

// let today= new Date();
// console.log(today);
// console.log(typeof today);

// type conversion

// let val;

// // number to string
// val=String(555);
// val=String(4+4);
// // bool to string
// val=String(true);
// // date to string;
// val=String(new Date());
// // array to string
// val=String([1,2,3,4]);
// // tostring()
// val=(5).toString();
// val=(true).toString();


// //string to number
// val=Number('5'); 
// val=Number(true);
// val=Number(false);
// val=Number(null);
// val=Number('hello');
// val=Number([1,2,3,4]);
// val=Number(100.1);

// // // parseInt()
// val=parseInt('100.30');
// val=parseFloat('100.30');

// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));


// type coercion

// const val1=String(5);
// const val2=6;
// const sum=Number(val1+val2);

// console.log(sum);
// console.log(typeof sum);

// math operations

// const val1=100;
// const val2=50;
// let val;

// // simple
// val=val1+val2;
// val=val1-val2;
// val=val1/val2;
// val=val1*val2;
// val=val1%val2;

// // Math functions

// val=Math.PI;
// val=Math.E;
// val=Math.round(2.3);
// val=Math.ceil(2.1);
// val=Math.floor(2.9);
// val=Math.sqrt(64);
// val=Math.abs(-5);
// val=Math.pow(8,2);
// val=Math.min(2,6,4,8,1,-7);
// val=Math.max(2,6,4,8,1,-7);
// val=Math.random();
// val=Math.floor(Math.random()*10+1);


// console.log(val);



// String operations

// const firstName='Sharath';
// const lastName='Pradeep';
// const str='Hello there i am sharath';
// const tags='C++,C,PHP,Java,Python';

// let val;
// // concatenation
// val=firstName+lastName;
// val=firstName+' '+lastName;
// // append
// val='Hello ';
// val+='World';

// // escaping
// val="That's awesome,I cant't wait";
// val='That\'s awesome,I cant\'t wait';

// // length
// val=firstName.length;

// // concat
// val=firstName.concat(' ',lastName);

// // uppercase
// val=firstName.toUpperCase();

// // lowercase
// val=firstName.toLowerCase();

// val=firstName[0];

// // index
// val=firstName.indexOf('a');
// val=firstName.lastIndexOf('a');

// // charAt()
// val=firstName.charAt(5);

// // getting last char
// val=lastName.charAt(lastName.length-1);

// // substring
// val=firstName.substring(0,3);

// // slicing
// val=firstName.slice(0,5);
// val=firstName.slice(-3);

// // split
// val=str.split(' ');
// val=tags.split(',');

// // replace
// val=str.replace('sharath','uranium');

// // includes()
// val=str.includes('world');

// console.log(val);




// template literals

// const name='Sharath';
// const occu='student';
// const age='19';
// let html;

// function hello(){
//     return 'hello';
// };

// // ES5 way

// html='<ul><li>Name: '+ name +'</li><li>Occupation: '+ occu +'</li><li>Age: '+ age +'</li></ul>';

// html='<ul>'+
//      '<li>Name: '+ name +'</li>'+
//      '<li>Occupation: '+ occu +'</li>'+
//      '<li>Age: '+ age +'</li>'+
//      '</ul>';

// //ES6 way-with template literals/strings

// html=`
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Occupation: ${occu}</li>
//         <li>Age: ${age}</li>
//         <li>${2+2}</li>
//         <li>${hello()}</li>
//         <li>${(age>20)? 'Age greater than 20':'Age less than 20'}</li>
//     </ul>

// `;

// document.body.innerHTML=html; 



// arrays

// const numbers=[11,33,22,66,55];
// const numbers2=new Array(5,8,2,4,6);
// const numbers3=[100,600,20,50];
// const fruits=['apple','mango','orange','watermelon'];
// const mixed= new Array(22,'hello',true,undefined,null,{a:1,b:'num'},new Date());

// let val;

// // length
// val=numbers.length;

// // checking for a number
// val=numbers.includes(11);

// // checking if it is an array
// val=Array.isArray(numbers);

// // get a value
// val=numbers[1];

// // changing value
// numbers[0]=100;

// // index of a value
// val=numbers.indexOf(66);

// // mutating arrays
// // back
// numbers.push(250);
// // front
// numbers.unshift(300);
// // del frm back
// numbers.pop();
// // del frm front
// numbers.shift();
// // slicing
// val=numbers.slice(0,2);
// // splicing
// numbers.splice(0,1);
// // reverse
// numbers.reverse();
// // concatenation
// val=numbers.concat(numbers2);
// // sort 
// val=fruits.sort();
// val=numbers3.sort();
// // sort issue solution using compare
// val=numbers3.sort(function(x,y){
//     return x-y;
// });
// val=numbers3.sort(function(x,y){
//     return y-x;
// });
// // finding
// function under50(num){
//     return num<50;
// };
// val=numbers.find(under50);

// function over50(num){
//     return num > 50;
// }
// val=numbers.find(over50);


// console.log(numbers);
// console.log(val);




//object literals

// const person={
//     firstName: 'Sharath',
//     age:19,
//     email:'sp@aol.com',
//     hobbies:['reading','coding','cricket'],
//     address:{city:'calicut',state:'kerala'},
//     getBirthYear: function(){
//         return 2020-this.age;
//     }
// };
// let val;

// val=person;
// // getting specific value
// val=person.firstName;
// val=person['firstName'];
// val=person.age;
// val=person.hobbies[2];
// val=person.email;
// val=person.address.state;
// val=person.getBirthYear();

// console.log(val);

// const people=[
//     {name:'tony',age:30},
//     {name:'stark',age:50},
//     {name:'james',age:40}
// ];

// for(let i=0; i<people.length;i++){
//     console.log(people[i].name);    
// }





// date and time

// let val;

// const today = new Date();
// let birthday =new Date('2-23-2001 11:25:00');
// birthday =new Date('feb 24 2001'); 
// birthday =new Date('june 11 2002');
// birthday =new Date('12/1/2020');

// val=today.getMonth()+1;
// val=today.getDay();
// val=today.getDate();
// val=today.getFullYear();
// val=today.getHours();
// val=today.getMinutes();
// val=today.getSeconds();
// val=today.getMilliseconds();
// val=today.getTime();
// val=birthday.getMonth()+1;

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(2021);
// birthday.setHours(3);
// birthday.setMinutes(30);

// console.log(birthday);






// if statements

// const id=100;
// const id2='101';

// if(id==100){
//     console.log('true');
// }
// else{ 
//     console.log('false');
// }

// //checking number and data type
// if(id2===101){
//     console.log('true');
// }
// else{ 
//     console.log('false');
// }
// if(id2!==101){
//     console.log('true');
// }
// else{ 
//     console.log('false');
// }

// checking for ids existence
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// }
// else{
//     console.log(`No ID`);
// }

// elseif
// const color='orange';

// if(color==='red'){
//     console.log('Color is red');
// }
// else if(color==='yellow'){
//     console.log('Color is yellow');
// }
// else{
//     console.log('Color is neither red nor yellow');
// }


// const name='sha';
// const age=19;
// // and
// if(age>0 && age<21){
//     console.log('A teen');
// }
// else{
//     console.log('Not a teen');
// }
// // or
// if(age>0 || age>25){
//     console.log('A');
// }
// else{
//     console.log('B');
// }

// ternary
// const id=101;

// console.log(id===100?'Correct':'Incorrect');





// switches

// const color='red';

// switch(color){
//     case 'red': 
//      console.log('Color is red');
//      break;
//     case 'yellow':
//      console.log('Color is yellow');
//      break;
//     default :
//      console.log('Color is neither red nor  yellow');
//      break;
// }

// printing day of the week
// const today=new Date().getDay();

// switch(today){
//     case 0:
//         console.log('Today is Sunday');
//         break;
//     case 1:
//         console.log('Today is Monday');
//         break;
//     case 2:
//         console.log('Today is Tuesday');
//         break;
//     case 3:
//         console.log('Today is Wednesday');
//         break;
//     case 4:
//         console.log('Today is Thursday');
//         break;
//     case 5:
//         console.log('Today is Friday');
//         break;
//     case 6:
//         console.log('Today is Saturday');
//         break;
// }





// functions

// function greet(firstName,lastName){
//     return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet('Sharath','Pradeep'));

// function greet(firstName='Sharath',lastName='Pradeep'){
//     return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet());

// func expressions

// const square= function(x=5){
//     return x*x;
// };
// console.log(square(8));

// IIFEs
// (function(){
//     console.log('IIFEs Ran...');
// })();

// (function(name){
//     console.log('Hello '+name);
// })('Sharath');

// (function(x){
//     console.log("Square:" + x*x);
// })(5);

// inside objects

// const todo={
//     add:function(){
//         console.log('Add todo..');
//     },
//     edit:function(id){
//         console.log(`Edit todo ${id}`);
//     }
// }
// todo.delete=function(){
//     console.log('Delete todo..');
// }


// todo.add();
// todo.edit(25);
// todo.delete();







// Loops

// for

// for(let i=0;i<=10;i++){
//     console.log('Number',i);
// }
// multiplication table
// for(let i=1;i<=10;i++){
//     console.log('5 x ',i,'=',5*i);
// }

// for(let i=0;i<=10;i++){
//     if(i===4){
//         console.log('Fav Num-',i);
//     }
//     else if(i===7){
//         continue;
//     }
//     else if(i===8){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

// while

// let i=1;

// while(i<=10){
//     console.log(i);
//     i++;
// }

// do while

// let i=100;

// do{
//     console.log(i);
//     i++;
// }while(i<=10)

// array
const cars=['BMW','BENZ',"RR","FERRARI"];
let i=0;
// for
// for(i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }
// // while
// while(i<cars.length){
//     console.log(cars[i]);
//     i++;
// }
// for each
// cars.forEach(function (current,index,array){
//     console.log(`${index}:${current}`);
//     console.log(array);
// });

// map
// const users=[
//     {id:1001,name:'John'},
//     {id:1002,name:'Williams'},
//     {id:1003,name:'Sara'},
//     {id:1004,name:'Ron'}
// ];

// const names = users.map(function(current3){
//     return current3.name;
// });
// console.log(names);

// for in

// const person = {
//     name:'sharath',
//     age: 19,
//     occupation: 'student'
// };
// for(let x in person){
//     console.log(`${x}:${person[x]}`);
// }






// WINDOW METHODS!!!!

// window.console.log(123);

// alert
// window.alert('Hello World');

// prompt
// const input=prompt();
// alert(input);

// confirm
// if(confirm('Are you sure?')){
//     console.log('YES');
// }
// else{
//     console.log('NO');
// }


// properties

// let val;

// // height and width
// val=window.outerHeight; 
// val=window.outerWidth; 
// val=window.innerHeight;
// val=window.innerWidth;  

// // scroll points
// val=window.scrollY;

// // location
// val=window.location;
// val=window.location.hostname;
// val=window.location.href;
// val=window.location.protocol;
// val=window.location.port;
// val=window.location.search;
// // redirect using location
// // window.location.href='http://google.com';
// // reload
// // window.location.reload();

// // history
// // window.history.go();
// val=window.history.length;

// // navigator object
// val=window.navigator;
// val=window.navigator.appName;
// val=window.navigator.appVersion;

// console.log(val);


























 