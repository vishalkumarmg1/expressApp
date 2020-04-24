const express = require('express');
const path = require('path');
const moment = require('moment')
const members = require('./Members')


const app = express();

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public','index.html'));

// });

const logger = (req,res, next)=>{
    console.log(`${req.protocal}://${req.get('host')}${req.originalUrl}: ${moment()}`);
    next();
};  
app.use(logger)

app.get('/api/members',(req, res)=>res.json(members));
app.use(express.static(path.join(__dirname,'public')));
const PORT =process.env.PORT || 5222;


app.listen(PORT, ()=>{
console.log(`Server is running on PORT ${PORT}`)});