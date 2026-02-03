import express from 'express'
import updateUser from './login.js';
import reg from './fetch.js';
import login from './updateuser.js';
const app = express();
app.use(express.json());
app.post('/register',reg);
app.post('/login',login);
app.put('/updateuser/:id',updateUser);
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});
