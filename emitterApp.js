var EmitterApp = require('./emitter');
var eventConfig = require('./config').events;

var emtr = new EmitterApp();
emtr.on(eventConfig.GREET,function(){
  console.log('Hello world 1');
});
emtr.on(eventConfig.GREET,function(){
  console.log('Hello world 2');
})

console.log('Calling emitter');

emtr.emit(eventConfig.GREET);
