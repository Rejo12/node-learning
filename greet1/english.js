var greeting=require('./greeting.json');
var greet=function(){
  console.log(`${greeting.en} john doe`);
}
module.exports=greet;
