const Todo = require('../models/todoModel.js');

const getAllTodo=async(req, res)=>{
    const allTodos = await Todo.find();
    if(!allTodos) res.status(404).json({error:'Not Found'});
    res.status(200).json(allTodos);
}

const singleTodo = async(req, res)=>{
    const id = req.params.id;
    const findSingle = await Todo.findOne({_id:id});
    if(!findSingle) res.status(404).json({error:`Todo with title: ${id} was not  found`});
    res.status(200).json(findSingle);
}

const addTodo = async(req, res)=>{
    const {title, description} = req.body;
    if(title==='' && description==='') return res.status(400).json({error:'error adding Todo'});
    const addTodo = new Todo({title, description});
    addTodo.save().then(result=>res.status(200).json({message:'Todo added successfully'})).catch(err=>res.status(400).json({error:'error adding Todo'}));
    
}


const updateTodo=async(req,res)=>{
    const id = req.params.id;
    const {title, description} = req.body;
   await Todo.findOneAndUpdate({ _id: id }, {title, description}).then(result=>res.status(200).json({message:'Todo record updated successfully'})).catch(err=>res.status(400).json({message:'error updating records'}))

}

const deleteTodo =async(req, res)=>{
    const id = req.params.id;
     await Todo.findOneAndDelete({_id:id}).then(result=>res.status(200).json({message:'Todo deleted successfully'})).catch(err=>res.status(400).json({error:'error deleting Todo'}));
}
module.exports={
    getAllTodo, singleTodo, addTodo, updateTodo, deleteTodo
}

