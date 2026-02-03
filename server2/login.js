import { json } from "express";
import fs from "fs";
import { StatusCodes } from "http-status-pro-js";

function updateUser(req,res){

    const{id} = req.params;
    const{name,email} = req.body;
    try{

    
    if( !name ||!email){
        return res.status(400).send("id ,name and email required");
    }
    if(!fs.existsSync("user.json")){
        return res.status(StatusCodes.NOT_FOUND);
    }
    let users = JSON.parse(fs.readFileSync("user.json","utf-8"));
        let useridx = users.findIndex((value)=> value.id==id);

    if(useridx===-1){
        return res.status(404).send("user not found");
    }
    users[useridx].email = email;
    users[useridx].name = name;
    
    fs.writeFileSync("user.json",JSON.stringify(users,null,2));
    console.log(users);
    res.status(200).send("update successfully");
    
}catch(err){
    console.log(err);
    return res.status(500).send("internal server error");
}


}
export default updateUser;