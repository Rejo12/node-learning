var EventEmitter = require('events');
var util = require('util');

class Greeter extends EventEmitter{
  constructor(){
    super()
    this.greeting="hello";
  }
  greet(data){
    console.log("hello ...greetings for the day"+data);
    this.emit('greet',data);
  }
}

// function Greeter(){
//   EventEmitter.call(this);
//   this.greeting="hello";
// }
// util.inherits(Greeter,EventEmitter);
//
// Greeter.prototype.greet= function(data){
//   console.log("hello ...greetings for the day"+data);
//   this.emit('greet',data);
// }

var greet1= new Greeter();
greet1.on('greet',function(data){
  console.log(`hi ${data}`);
})
greet1.greet('rejo');
