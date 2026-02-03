import fs from 'fs';
function borrowBook(memberId, bookId, quantity){
    try{
        if(fs.existsSync('bookId.json') && fs.existsSync('memberId.json')){
            let book = JSON.parse(fs.readFileSync("bookId.json" , "utf-8"));
            
        }
    }catch(err){
        console.log(err);
    }
}