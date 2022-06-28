const mongoose = require('mongoose');

//create the schema

const TodoSchema= mongoose.Schema({
    title:{type:String},
    description:{type:String}
}, {timestamps:true})

//export the schema

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo
