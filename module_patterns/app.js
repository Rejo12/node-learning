var greet = require('./greet1');
greet();

var greet = require('./greet2').greet;
greet();

var greet= require('./greet3');
greet.greet();
greet.greeting = "changed world";

var greet=require('./greet3');
greet.greet();

var Greet=require('./greet4');
console.log(Greet);
var greet4 = new Greet;
greet4.greet();
