const express=require("express");
const Router=express.Router();
const userModel=require("../model/user");
const post=require("./post");
const crypto=require("crypto");


Router.get("/getuserprofile/:_id",(req,res)=>{
  userModel.getUsersPorfile(req.params,(data)=>{
    res.json({
      msg:"success",
      code:1,
      data
    });
  })
});

Router.post("/login",(req,res)=>{
  post.toJSON(req,(jsonData)=>{
    userModel.getUserProfile({
      query:{
        user_name:jsonData["username"]
      },
      fields:{
        user_name:1,
        user_password:1,
        user_regdateline:1
      }
    },(user)=>{
      if(user){
        let regDateline=String(user["user_regdateline"]+user["_id"]);
        const hash = crypto.createHmac('md5',regDateline);

        hash.update(String(jsonData["password"]));
        let pass=hash.digest('hex');
        if(pass==user["user_password"]){
          res.json({
            msg:"success!",
            code:1
          })
        }else{
          res.json({
            msg:"fail password",
            code:0
          })
        }
      }else{
        res.json({
          msg:"fail",
          code:0
        });
      }
    })

  });
})

module.exports=Router;