var express=require("express");
var app=express();

app.get("/",function(req,res){
  res.send("hi there !");
})

app.get("/cat",function(req,res){
  res.send("MEOW !!!");
})

app.get("/bye",function(req,res){
  res.send("good bye !");
})

app.get("*",function(req,res){
  res.send("where you want to go gentlemen ?");
})

app.listen(1337,function(){
  console.log("listening to port 1337");
});
