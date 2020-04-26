const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members')


const app = express();

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public','index.html'));

// });

// Get the single value from the api

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({extended :false}));

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);

// static folder
app.use(express.static(path.join(__dirname,'public')));

// Members API route
app.use('/api/members', require('./routes/api/members'));
const PORT =process.env.PORT || 5211;


app.listen(PORT, ()=>{
console.log(`Server is running on PORT ${PORT}`)});