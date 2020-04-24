const express = require('express');
const path = require('path');

const app = express();

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public','index.html'));

// });

app.use(express.static(path.join(__dirname,'public')));
const PORT =process.env.PORT || 5202;


app.listen(PORT, ()=>{
console.log(`Server is running on PORT ${PORT}`)});