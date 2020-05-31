// var a=require('./greet.js');
// a();
// var obj ={
//   firstName:'John',
//   lastName:'Doe',
//   greet:function(){
//     console.log(`hello ${this.firstName} ${this.lastName}`);
//   }
// }
// obj.greet();
// console.log(obj['firstName']);

//function constructor
// function Person(firstName,lastName){
//   this.firstName=firstName;
//   this.lastName=lastName;
// }
// //prototypal inheritance
// Person.prototype.greet=function(){
//   console.log(`hello ${this.firstName} ${this.lastName}`);
// }
//
// var john = new Person('john','doe');
// var jane=new Person('jane','doe');
// console.log(john.lastName);
// john.greet();
// console.log(jane.firstName)
// jane.greet();
// console.log(john.__proto__ === jane.__proto__);
// var firstName="john";
// (function(){
//     var firstName='rejo'
//   console.log(firstName);
// }())
// console.log(firstName);


//object properties

// var a={
//   name:'rejo'
// };
// var prop='name';
// console.log(a[prop]);

//functions are first class in js
var arr=[];
arr.push(function(){
  console.log('Hello world 1');
});
arr.push(function(){
  console.log('Hello world 2');
});
arr.push(function(){
  console.log('Hello world 3');
});
// arr.forEach((item)=>{
//   item();
// })
arr.map((item)=>{
  item();
})
