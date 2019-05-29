const express=require("express");
const config=require("./config/config");

const app=express();

require("./api/api")(app);

app.listen(config["port"],(err)=>{
  console.log(`Server runing in ${config["port"]}`);
});