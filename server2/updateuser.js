import fs from "fs";
import { StatusCodes } from "http-status-pro-js";

function login(req,res,next){

    let{email,password} = req.body;
    if(!email || !password){
        return res.status(StatusCodes.BAD_REQUEST);
    }
    try{
        if(fs.existsSync("user.json")){
            let user =JSON.parse(fs.readFileSync("user.json","utf-8"));
            let isUser = user.find((value)=>  
                value.email === email && value.password === password
                );
            if(isUser){
                res.status(StatusCodes.OK);
                return ;
            }
            else{
               return res.status(StatusCodes.NOT_FOUND);
                
            }
        }
    }
    catch(err){
        console.log(err);
           console.log(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR);
       
    }
}

export default login;