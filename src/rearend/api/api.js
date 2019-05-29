const UserModel=require("./user");

module.exports=(app)=>{

  app.use("/api/user",UserModel);

  app.use((req,res)=>{
    res.json({
      msg:"Unauthorized access",
      code:0
    })
  })
  
}
