var express=require("express");
var app=express();

app.get("/r/:subreditName",function(req,res){
var subredit=req.params.subreditName;
  res.send("WELCOME TO "+subredit.toUpperCase()+"SUBREDIT")
})
//app("/r/subreditName/comments/id/title/")

app.get("/r/:subreditName/:comments/:id/:title",function(req,res){
  console.log(req.params);
  res.send("WELCOME TO COMMENTS")
})

app.listen(1337,function(){
  console.log("server started");
})
