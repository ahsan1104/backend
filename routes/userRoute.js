import express from 'express';
import { comment } from '../allData/comment.js';
import { user } from '../allData/user.js';

export const userRoutes = express.Router();

userRoutes.get('/user',(req,res)=>{
    res.status(200).send({status:200,message:'succes',data:user})
})