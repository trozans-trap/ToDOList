const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    item:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const Item = mongoose.model('item', ItemSchema);
module.exports = Item;