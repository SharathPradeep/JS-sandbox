// object.prototype
// Person.prototype

function Person(firstName,lastName,dob){
  this.firstName=firstName;
  this.lastName=lastName;
  this.birthday=new Date(dob);
  // // this.calAge=function(){
  // //   return (new Date().getUTCFullYear())-this.birthday.getUTCFullYear();
  // }
}

// calAge protoype

Person.prototype.calAge=function(){
  return (new Date().getUTCFullYear())-this.birthday.getUTCFullYear();
}

// Get Full Name
Person.prototype.getFullName=function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married

Person.prototype.getsMarried=function(newLastName){
  this.lastName=newLastName;
}

const john=new Person('John','Doe','4-11-2000');

const mary=new Person('Mary','Johnson','Dec 19 1998');

console.log(mary); 

console.log(john.calAge());

console.log(mary.getFullName());

mary.getsMarried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));

console.log(mary.hasOwnProperty('getFullName'));