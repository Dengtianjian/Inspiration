const mg=require("./db");
const ObjectId=require("mongodb").ObjectId;

module.exports={

  getUsersPorfile(op,callback){
    mg((db)=>{
      var dbo=db.db("inspiration");
      if(op["query"]&&op["query"]["_id"]){
        op["query"]["_id"]=ObjectId(op["query"]["_id"]);
      }
      var query=op["query"]||{};
      var fields=op["fields"]||{};
      dbo.collection("ins_user_profile").find(query,{
        projection:fields
      }).toArray((err,res)=>{
        if(err) throw err;
        callback(res);
      })
    })
  },

  getUserProfile(op,callback){
    mg((db)=>{
      var dbo=db.db("inspiration");
      if(op["query"]&&op["query"]["_id"]){
        op["query"]["_id"]=ObjectId(op["query"]["_id"]);
      }
      var query=op["query"]||{};
      var fields=op["fields"]||{};
      dbo.collection("ins_user_profile").findOne(query,{
        projection:fields
      },(err,res)=>{
        if(err) throw err;
        callback(res);
      });
    })
  }

}