// var data = [{item: 'getnjj'}, {item: 'postlkn'},{item: 'deleteknn'}];

const Item = require('../models/user');
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app)=>{

    app.get('/todo' , (req , res)=>{
           Item.find({}).then(data=>{
               if(data){
                res.render('todo', {todos: data});
               }
           })
            
    });

    
    app.post('/todos' ,urlencodedParser, (req , res, next)=>{

        const item = req.body;
        const newItem = new Item(item);
        newItem.save().then(()=>{
            Item.find({}).then(data=>{
                if(data){
                 res.render('todo', {todos: data});
                }
            });    
        }).catch(next);

    });

    
    // app.delete('/todo' , (req , res, next)=>{

    //     const items = req.body;
    //     newItem.findAndRemove({ item: items}).then((person)=>
    //         Item.find({}).then(data=>{
    //               if(data){
    //               res.render('todo', {todos: data});
    //               }
    //          });  
    //     ).catch(next);

    // });

    
    app.put('/todo' , (req , res)=>{

    });
}