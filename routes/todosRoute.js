import express from 'express';
import { todos } from '../allData/todos.js';

export const todosRoutes = express.Router();

todosRoutes.get('/todos',(req,res)=>{
    res.status(200).send({status:200,message:'succes',data:todos})
})