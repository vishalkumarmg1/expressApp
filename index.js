const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public','index.html'));

});
const PORT =process.env.PORT || 5201;


app.listen(PORT, ()=>{
console.log(`Server is running on PORT ${PORT}`)});