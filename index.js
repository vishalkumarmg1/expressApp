const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send(`<h1>Hi there, I'm testing Express </h1>`)

});
const PORT =process.env.PORT || 5211;


app.listen(PORT, ()=>{
console.log(`Server is running on PORT ${PORT}`)});