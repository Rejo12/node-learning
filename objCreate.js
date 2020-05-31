var person={
  firstName : this.firstName,
  lastName : this.lastName,
  greet : function(){
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

var john = Object.create(person);
john.firstName = 'john';
john.lastName = 'doe';

var jane = Object.create(person);
jane.firstName = 'jane';
jane.lastName = 'doe';

john.greet();
jane.greet();
var joy=Object.create({});
console.log(joy);
