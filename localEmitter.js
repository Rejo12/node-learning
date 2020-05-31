var util = require('util');

function Person(){
  this.firstName='John';
  this.lastName='Doe';
}

Person.prototype.greet=function(){
  console.log(`hello ${this.firstName} ${this.lastName}`);
}

function Police(){
  Person.call(this);
  this.badgeNumber=22
}

util.inherits(Police,Person);

var p1 = new Police();
console.log(p1);
p1.greet();
