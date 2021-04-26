const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/users-routes');
const mongoose = require('mongoose');


const app = express();


app.use(cors());
app.use(bodyParser.json());


app.use('/',userRoutes);


mongoose.connect('',{ useNewUrlParser: true,useUnifiedTopology: true }, ()=>{
    console.log('Connected to db!');
});

app.listen(3000,()=>{
    console.log('App is running');
})
