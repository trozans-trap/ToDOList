var express = require('express');

var todocontroller =require('./controllers/todocntrl');
const mongoose = require('mongoose');
var app = express();

const Item = require('./models/user');


app.set('view engine' , 'ejs');

app.use(express.static('./public'));

//Db config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
 .then(()=> console.log('MongoDb Connected...'))
 .catch(err=> console.log(err));


todocontroller(app);



app.listen(process.env.PORT || 4000 , ()=>{
    console.log("Port running Succeesfully");
});