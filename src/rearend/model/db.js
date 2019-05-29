const mongo=require("mongodb").MongoClient;
const config=require("../config/config");

let mongoConnectURL=`mongodb://${config["db"]["host"]}:${config["db"]["port"]}/${config["db"]["name"]}`;

module.exports=(cb)=>{
  mongo.connect(mongoConnectURL, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    cb(db);
  });
}