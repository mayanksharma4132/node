var express=require("express");
var app=express();

app.get("/",function(req,res){
  res.send("welcome to ZOO !");
})

app.get("/speak/:animal",function(req,res){
  var animal=req.params.animal;
  var sounds={pig:"Oink",cow:"MOO",cat:"MEOW",fish:"..."}
  var sound=sounds[animal]
  res.send(animal+" speaks '"+sound+"'" )
})

app.get("/repeat/:message/:times",function(req,res){
  var message=req.params.message;
  var times=req.params.times;
  result=" "
  for (var i=0;i<times;i++){
    result+=message+" "
  }
    res.send(result);
})

app.listen(1337,function(){
console.log("welcome to server")
})
