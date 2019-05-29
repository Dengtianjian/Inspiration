const querystring=require("querystring");

module.exports={

  /** 把POST请求返回JSON格式 */
  /**
   * @param req 请求的对象
   * @param fn 回调函数
   */
  toJSON(req,fn){
    var data=[];
    req.on("data",(chunk)=>{
      data.push(chunk);
    });
  
    req.on("end",()=>{
      data=JSON.parse(Buffer.concat(data).toString())
      fn(data);
    })
  }

}