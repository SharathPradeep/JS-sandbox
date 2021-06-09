let re;
re=/hello/;
re=/hello/i;
// i-case insensitive-flag
// re=/hello/g;
// g-global search


// console.log(re);
// console.log(re.source);

// exec()- returns result in array or null-comparing
// const result = re.exec('sha hello world');
// console.log(result);


// test()-comparing-returns true/false
// const result = re.test('Hello');
// console.log(result);


// match()- returns array or null
// const str="Hello World";
// const result= str.match(re);
// console.log(result);


// search()- returns index of the first match or -1
// const str="sha Hello There";
// const result= str.search(re);
// console.log(result);

// replace()- returns new string with some or all matches of a pattern
const str='Hello There';
// const result = str.replace('There',re.source);
const result = str.replace(re,"Hi");
console.log(result);