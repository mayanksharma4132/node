var express=require("express");
var app=express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/DogsAreLove/:thing",function(req,res){
    var thing=req.params.thing;
    res.render("love",{thingVar:thing})
});
app.get("/post",function(req,res){
  var post=[
    {title:"coded by my and only me!!!",author:"Mohit"},
    {title:"he is ustaad of us!!!",author:"Vikas"},
    {title:"he looks like neplai without specs!!!",author:"Vikrant"}
  ];
  res.render("post",{posts:post})
})

app.listen(1337,function(){
  console.log("hi server ");
})
