class Person{
  constructor(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName=lastName;
    this.dob=dob;
  }
  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  calAge(){
    return (new Date().getUTCFullYear())-(new Date(this.dob).getUTCFullYear());
  }
  getsMarried(newLastName){
    this.lastName=newLastName;
  }
  static addNumbers(x,y){
    return x+y;
  }

}

const mary= new Person('Mary','Williams','02-25-1992');

console.log(mary);

console.log(mary.greeting());

console.log(mary.calAge());

mary.getsMarried('Johnson');

console.log(mary.greeting());

console.log(Person.addNumbers(2,2));
