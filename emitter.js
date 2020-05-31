function Emitter(){
  this.event={};
}

Emitter.prototype.on=function(type,listener){
  this.event[type] = this.event[type] || [];
  this.event[type].push(listener);
}

Emitter.prototype.emit=function(type){
  if(this.event[type]){
    this.event[type].map((item)=>{
      item();
    })
  }
}

module.exports=Emitter;
