var greeting=require('./greeting.json');
var greet=function(){
  console.log(`${greeting.es} john doe`);
}
module.exports=greet;
