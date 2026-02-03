import fs from "fs";
import { StatusCodes } from "http-status-pro-js";
function reg(req,res){
    try{
        
        let {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(StatusCodes.BAD_REQUEST);
        }
        let users = [];
        let obj = {
            id:Date.now(),name,email,password
        }
        if(fs.existsSync("user.json")){
            let user =JSON.parse(fs.readFileSync("user.json","utf-8"));
            let isUser = user.find((value)=> value.email===email);
            if(isUser){
               res.status(StatusCodes.CONFLICT);
               return;
            }
      users = user;
        }
        users.push(obj);
        fs.writeFileSync("user.json",JSON.stringify(users,null,2));
        res.status(StatusCodes.CREATED);
       
    }
    catch(err){
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR);
       
    }
}
export default reg;