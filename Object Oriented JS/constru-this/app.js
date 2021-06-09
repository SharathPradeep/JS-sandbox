// Person constructor
function Person(name,dob){
  this.name=name;
  // this.age=age;
  this.birthday=new Date(dob);
  this.calAge=function(){
    return (new Date().getUTCFullYear())-this.birthday.getUTCFullYear();
  }
}

// const brad= new Person('brad',18);
// const john= new Person('john',25);

// console.log(brad.age);

const rock=new Person('rock','02-23-2001');

console.log(rock.calAge());