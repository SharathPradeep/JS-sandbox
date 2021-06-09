// SETS- Store unique values of any type

const set1= new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name:'John'});
set1.add(true);
set1.add(100);

const set2= new Set([1,2,'hello',true]);

console.log(set2);

// get count
console.log(set1.size);

// check for values
console.log(set1.has(100));
console.log(set1.has(50+50));
console.log(set1.has({name:'John'}));

// delete from set
set1.delete(100);
console.log(set1);


// Iterating through SETS
// for...of
for(let item of set1){
    console.log(item);
}
// forEach
set1.forEach((item)=>{
    console.log(item);
})


// Convert set to array
const setArr=Array.from(set1);
console.log(setArr);