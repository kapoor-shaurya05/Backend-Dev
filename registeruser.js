import fs from 'fs'

function registeruser(name ,email,password){
    console.log(name);
    try{
        let user= [];
        let ob={
            id :new Date(), name,email,password,todo:[],
        }
        if(fs.existsSync("todo.json")){
            let data =JSON.parse(fsreadFileSync("todo.json","utf-8"))
            let isUser=data.some((value)=> value.name === name)
            if(isUser){
                return "user exit"
            }
            user=data;
        }
        user.push(ob)
        fs.writeFileSync("todo.json", JSON.stringify(user,null,2))
        console.log("user create ");
    }catch(err){
        console.log(err);
    }
}
export default registeruser
