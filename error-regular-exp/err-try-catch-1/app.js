const user={email:'sajs@gmsl.com'};


try{
  // ReferenceError
  // function1();

  // TypeError
  // null.function1();

  // SyntaxError
  // eval('Hello World');

  // URIError
  // decodeURIComponent('%');

  if(!user.name){
    throw new SyntaxError('No name');
  }
}
catch(e){
  console.log(`Error: ${e.message}`);
  console.log(e);
  console.log(e.message);
  console.log(e.name);
  console.log(e instanceof ReferenceError);
  console.log(e instanceof TypeError);
}
finally{
  console.log("Runs regardless of result");
}

console.log('Program continues..');