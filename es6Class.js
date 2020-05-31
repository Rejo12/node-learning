class Person{
  constructor(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
  }
  greet(){
    console.log(`hello ${this.firstName} ${this.lastName}`);
  }
}
var p1 =new Person('john','doe');
p1.greet();

var p2 = new Person('jane','doe');
p2.greet();

console.log(p1.prototype)
