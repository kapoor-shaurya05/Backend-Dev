import fs from "fs"
function deleteUser(req,res){
    const{id} = req.params;
    try{
    if(!fs.existsSync("user.json")){
        return res.status(404).send("user data not found");
    }
    let users = JSON.parse(fs.readFileSync("user.json","utf-8"));
    let useridx = users.findIndex((value)=> value.id==id);
    if(useridx===-1){
        return res.status(404).send("user not found");
    }
    users.splice(useridx,1);
    fs.writeFileSync("user.json",JSON.stringify(users,null,2));
    console.log(users);
    res.status(200).send("user deleted successfully");
}catch(err){
    console.log(err);
    return res.status(500).send("internal server error");
}
}
export default deleteUser;

